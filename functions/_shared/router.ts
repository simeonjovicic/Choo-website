import { addClearSessionCookies, addSessionCookies, clearSession, createSession, getSession, requireAdmin, verifyAdminPassword } from "./auth";
import { adminEntryJs, adminStylesCss, adminUiJs } from "./admin-client";
import {
  checkDailyUsageLimit,
  createImageRecord,
  createRecipe,
  deleteImageRecord,
  deleteRecipe,
  getAdminRecipe,
  getImageStorageUsage,
  getPublicRecipe,
  listAdminRecipes,
  listPublicRecipes,
  listPublicTags,
  updateRecipe,
} from "./db";
import { cachePublic, error, getClientIp, json, MAX_IMAGE_BYTES, notFound, readJsonBody } from "./http";
import {
  DAILY_IMAGE_UPLOAD_LIMIT,
  DAILY_PUBLIC_API_LIMIT,
  DAILY_R2_IMAGE_MISS_LIMIT,
  MAX_STORED_IMAGE_BYTES,
  MAX_STORED_IMAGE_COUNT,
} from "./limits";
import { checkApiRateLimit, clearLoginFailures, isLoginLocked, recordLoginFailure } from "./rate-limit";
import { loginSchema, recipePayloadSchema, tagSchema } from "./schemas";
import type { Env, RouteDeps } from "./types";

const LOGIN_ERROR = "Invalid login";
const IMAGE_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

async function defaultJitter(minMs = 50, maxMs = 250): Promise<void> {
  const span = Math.max(maxMs - minMs, 0);
  const bytes = new Uint8Array(1);
  crypto.getRandomValues(bytes);
  const ms = minMs + Math.round((bytes[0] / 255) * span);
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function verifyTurnstile(token: string, remoteIp: string | null, env: Env): Promise<boolean> {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET,
      response: token,
      remoteip: remoteIp || undefined,
      idempotency_key: crypto.randomUUID(),
    }),
  });
  if (!response.ok) return false;
  const result = await response.json<{ success?: boolean }>();
  return result.success === true;
}

async function failLogin(env: Env, ip: string, status = 401, deps: RouteDeps = {}): Promise<Response> {
  await recordLoginFailure(env, ip);
  await (deps.jitter || defaultJitter)();
  console.log(JSON.stringify({ event: "admin_login", ip, result: status === 429 ? "locked" : "failure" }));
  return error(status, LOGIN_ERROR);
}

async function handleLogin(request: Request, env: Env, deps: RouteDeps): Promise<Response> {
  const ip = getClientIp(request);
  if (await isLoginLocked(env, ip)) {
    await (deps.jitter || defaultJitter)();
    console.log(JSON.stringify({ event: "admin_login", ip, result: "locked" }));
    return error(429, LOGIN_ERROR);
  }

  let body: unknown;
  try {
    body = await readJsonBody(request);
  } catch (caught) {
    if (typeof caught === "object" && caught && "status" in caught && Number(caught.status) === 413) {
      return error(413, "Payload too large");
    }
    return failLogin(env, ip, 401, deps);
  }

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return failLogin(env, ip, 401, deps);

  const turnstileOk = await (deps.turnstileVerify || verifyTurnstile)(parsed.data.turnstileToken, ip, env);
  if (!turnstileOk) return failLogin(env, ip, 401, deps);

  const passwordOk = await verifyAdminPassword(env, parsed.data.password);
  if (!passwordOk) return failLogin(env, ip, 401, deps);

  await clearLoginFailures(env, ip);
  const session = await createSession(env, deps);
  const headers = new Headers({ "content-type": "application/json; charset=utf-8" });
  addSessionCookies(headers, session.sessionToken, session.csrfToken, request);
  console.log(JSON.stringify({ event: "admin_login", ip, result: "success" }));
  return json({ ok: true }, { headers });
}

async function handleLogout(request: Request, env: Env): Promise<Response> {
  const session = await getSession(request, env);
  await clearSession(env, session?.sid);
  const headers = new Headers({ "content-type": "application/json; charset=utf-8" });
  addClearSessionCookies(headers, request);
  return json({ ok: true }, { headers });
}

function edgeCache(): Cache | null {
  if (typeof caches === "undefined") return null;
  return (caches as CacheStorage & { default?: Cache }).default || null;
}

async function withEdgeCache(request: Request, loader: () => Promise<Response>): Promise<Response> {
  const cache = edgeCache();
  if (!cache || request.method.toUpperCase() !== "GET") return loader();

  const cacheKey = new Request(request.url, { method: "GET" });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const response = await loader();
  if (response.ok) {
    try {
      await cache.put(cacheKey, response.clone());
    } catch {
      // Cache is best-effort. Never fail the request because an edge cache write failed.
    }
  }
  return response;
}

async function publicDailyLimit(env: Env, routeName: string): Promise<Response | null> {
  const ok = await checkDailyUsageLimit(env, `public:${routeName}`, DAILY_PUBLIC_API_LIMIT);
  return ok ? null : error(429, "Daily public API limit reached");
}

async function handlePublicImage(request: Request, pathname: string, env: Env): Promise<Response> {
  const key = decodeURIComponent(pathname.replace(/^\/api\/images\//, ""));
  if (!key) return notFound();

  return withEdgeCache(request, async () => {
    const quotaOk = await checkDailyUsageLimit(env, "r2:image-miss", DAILY_R2_IMAGE_MISS_LIMIT);
    if (!quotaOk) return error(429, "Daily image read limit reached");

    const object = await env.IMAGES.get(key);
    if (!object) return notFound();
    const headers = new Headers(cachePublic(60 * 60 * 24 * 30));
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    headers.set("content-type", object.httpMetadata?.contentType || "application/octet-stream");
    return new Response(object.body, { headers });
  });
}

async function handleImageUpload(request: Request, env: Env): Promise<Response> {
  const length = request.headers.get("content-length");
  if (length && Number(length) > MAX_IMAGE_BYTES) return error(413, "Image too large");

  const form = await request.formData();
  const file = form.get("file");
  const altText = String(form.get("altText") || "").slice(0, 180);
  if (!(file instanceof File)) return error(400, "Image file required");
  if (file.size > MAX_IMAGE_BYTES) return error(413, "Image too large");
  const extension = IMAGE_TYPES.get(file.type);
  if (!extension) return error(415, "Unsupported image type");

  const uploadOk = await checkDailyUsageLimit(env, "admin:image-upload", DAILY_IMAGE_UPLOAD_LIMIT);
  if (!uploadOk) return error(429, "Daily upload limit reached");

  const usage = await getImageStorageUsage(env);
  if (usage.imageCount >= MAX_STORED_IMAGE_COUNT || usage.totalBytes + file.size > MAX_STORED_IMAGE_BYTES) {
    return error(409, "Image storage limit reached");
  }

  const r2Key = `recipes/${crypto.randomUUID()}.${extension}`;
  await env.IMAGES.put(r2Key, await file.arrayBuffer(), {
    httpMetadata: { contentType: file.type },
  });
  const image = await createImageRecord(env, { r2Key, contentType: file.type, altText, sizeBytes: file.size });
  return json({ ok: true, image }, { status: 201 });
}

async function adminRateLimit(request: Request, env: Env, routeName: string): Promise<Response | null> {
  const ip = getClientIp(request);
  const limit = routeName === "upload" ? 20 : 120;
  const windowSeconds = routeName === "upload" ? 15 * 60 : 60;
  const ok = await checkApiRateLimit(env, `admin:${routeName}:${ip}`, limit, windowSeconds);
  return ok ? null : error(429, "Too many requests");
}

export async function handleApiRequest(request: Request, env: Env, deps: RouteDeps = {}): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const method = request.method.toUpperCase();

  try {
    if (pathname === "/api/admin/client/entry.js" && method === "GET") {
      return new Response(adminEntryJs, { headers: { "content-type": "text/javascript; charset=utf-8", ...cachePublic(300) } });
    }
    if (pathname === "/api/admin/client/ui.js" && method === "GET") {
      return new Response(adminUiJs, { headers: { "content-type": "text/javascript; charset=utf-8", ...cachePublic(300) } });
    }
    if (pathname === "/api/admin/client/styles.css" && method === "GET") {
      return new Response(adminStylesCss, { headers: { "content-type": "text/css; charset=utf-8", ...cachePublic(300) } });
    }
    if (pathname === "/api/admin/config" && method === "GET") {
      return json({ ok: true, siteKey: env.TURNSTILE_SITE_KEY || "" }, { headers: cachePublic(60) });
    }
    if (pathname === "/api/admin/login" && method === "POST") {
      return handleLogin(request, env, deps);
    }

    if (pathname === "/api/images" || pathname.startsWith("/api/images/")) {
      if (method === "GET") return handlePublicImage(request, pathname, env);
    }

    if (pathname === "/api/recipes" && method === "GET") {
      return withEdgeCache(request, async () => {
        const limited = await publicDailyLimit(env, "recipes");
        if (limited) return limited;
        const tag = url.searchParams.get("tag");
        const parsedTag = tag && tag !== "all" ? tagSchema.safeParse(tag) : null;
        if (parsedTag && !parsedTag.success) return error(400, "Invalid tag");
        const recipes = await listPublicRecipes(env, url.searchParams.get("lang"), parsedTag?.data);
        return json({ ok: true, recipes }, { headers: cachePublic(120) });
      });
    }
    if (pathname.startsWith("/api/recipes/") && method === "GET") {
      return withEdgeCache(request, async () => {
        const limited = await publicDailyLimit(env, "recipe-detail");
        if (limited) return limited;
        const slug = decodeURIComponent(pathname.replace(/^\/api\/recipes\//, ""));
        const recipe = await getPublicRecipe(env, slug, url.searchParams.get("lang"));
        return recipe ? json({ ok: true, recipe }, { headers: cachePublic(120) }) : notFound();
      });
    }
    if (pathname === "/api/recipe-tags" && method === "GET") {
      return withEdgeCache(request, async () => {
        const limited = await publicDailyLimit(env, "recipe-tags");
        if (limited) return limited;
        const tags = await listPublicTags(env);
        return json({ ok: true, tags }, { headers: cachePublic(300) });
      });
    }

    if (pathname === "/api/admin/session" && method === "GET") {
      await requireAdmin(request, env);
      return json({ ok: true });
    }
    if (pathname === "/api/admin/logout" && method === "POST") {
      await requireAdmin(request, env, { csrf: true });
      return handleLogout(request, env);
    }
    if (pathname === "/api/admin/recipes" && method === "GET") {
      await requireAdmin(request, env);
      const limited = await adminRateLimit(request, env, "recipes");
      if (limited) return limited;
      const recipes = await listAdminRecipes(env);
      return json({ ok: true, recipes });
    }
    if (pathname === "/api/admin/recipes" && method === "POST") {
      await requireAdmin(request, env, { csrf: true });
      const limited = await adminRateLimit(request, env, "recipes");
      if (limited) return limited;
      const payload = recipePayloadSchema.parse(await readJsonBody(request));
      const recipe = await createRecipe(env, payload);
      return json({ ok: true, recipe }, { status: 201 });
    }
    if (pathname.startsWith("/api/admin/recipes/")) {
      const id = decodeURIComponent(pathname.replace(/^\/api\/admin\/recipes\//, ""));
      if (method === "GET") {
        await requireAdmin(request, env);
        const recipe = await getAdminRecipe(env, id);
        return recipe ? json({ ok: true, recipe }) : notFound();
      }
      if (method === "PUT") {
        await requireAdmin(request, env, { csrf: true });
        const limited = await adminRateLimit(request, env, "recipes");
        if (limited) return limited;
        const payload = recipePayloadSchema.parse(await readJsonBody(request));
        const recipe = await updateRecipe(env, id, payload);
        return recipe ? json({ ok: true, recipe }) : notFound();
      }
      if (method === "DELETE") {
        await requireAdmin(request, env, { csrf: true });
        const limited = await adminRateLimit(request, env, "recipes");
        if (limited) return limited;
        const keys = await deleteRecipe(env, id);
        await Promise.all(keys.map((key) => env.IMAGES.delete(key)));
        return json({ ok: true });
      }
    }
    if (pathname === "/api/admin/images" && method === "POST") {
      await requireAdmin(request, env, { csrf: true });
      const limited = await adminRateLimit(request, env, "upload");
      if (limited) return limited;
      return handleImageUpload(request, env);
    }
    if (pathname.startsWith("/api/admin/images/") && method === "DELETE") {
      await requireAdmin(request, env, { csrf: true });
      const id = decodeURIComponent(pathname.replace(/^\/api\/admin\/images\//, ""));
      const key = await deleteImageRecord(env, id);
      if (!key) return notFound();
      await env.IMAGES.delete(key);
      return json({ ok: true });
    }

    return notFound();
  } catch (caught) {
    const status = typeof caught === "object" && caught && "status" in caught ? Number(caught.status) : 500;
    if (status === 401) return error(401, "Unauthorized");
    if (status === 403) return error(403, "Forbidden");
    if (status === 400) return error(400, "Invalid payload");
    if (status === 413) return error(413, "Payload too large");
    if (caught instanceof Error && /UNIQUE constraint failed/i.test(caught.message)) {
      return error(409, "Recipe slug already exists");
    }
    console.error(caught);
    return error(status || 500, "Request failed");
  }
}
