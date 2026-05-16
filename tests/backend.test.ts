import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { Miniflare } from "miniflare";
import { beforeEach, describe, expect, it } from "vitest";
import { handleApiRequest } from "../functions/_shared/router";
import { bytesToBase64, pbkdf2Sha256, signJwt } from "../functions/_shared/crypto";
import type { Env, RouteDeps } from "../functions/_shared/types";

const PASSWORD = "correct horse battery staple";
const JWT_SECRET = "0123456789abcdef0123456789abcdef";

const deps: RouteDeps = {
  jitter: async () => {},
  turnstileVerify: async (token) => token === "turnstile-ok",
};

async function makeEnv(): Promise<Env> {
  const mf = new Miniflare({
    modules: true,
    script: "export default { fetch() { return new Response('ok') } }",
    d1Databases: ["DB"],
    kvNamespaces: ["RATE_LIMIT"],
    r2Buckets: ["IMAGES"],
  });
  const DB = await mf.getD1Database("DB");
  const migrations = (await readdir("migrations"))
    .filter((file) => /^\d+_.+\.sql$/.test(file))
    .filter((file) => !file.includes("_seed_"))
    .sort();
  for (const file of migrations) {
    const migration = (await readFile(`migrations/${file}`, "utf8"))
      .replace(/PRAGMA foreign_keys = ON;/, "")
      .replace(/CREATE TRIGGER[\s\S]*?END;/, "")
      .split("\n")
      .filter((line) => !line.trimStart().startsWith("--"))
      .join("\n");
    for (const statement of migration.split(";").map((part) => part.trim()).filter(Boolean)) {
      await DB.prepare(statement).run();
    }
  }
  const RATE_LIMIT = await mf.getKVNamespace("RATE_LIMIT");
  const IMAGES = await mf.getR2Bucket("IMAGES");
  const saltBytes = new Uint8Array(32);
  saltBytes.fill(7);
  const ADMIN_SALT = bytesToBase64(saltBytes);
  const ADMIN_HASH = bytesToBase64(await pbkdf2Sha256(PASSWORD, ADMIN_SALT));

  return {
    DB,
    RATE_LIMIT: RATE_LIMIT as unknown as KVNamespace,
    IMAGES: IMAGES as unknown as R2Bucket,
    ADMIN_HASH,
    ADMIN_SALT,
    JWT_SECRET,
    TURNSTILE_SECRET: "test-secret",
    TURNSTILE_SITE_KEY: "test-site-key",
    ADMIN_PATH: "/hidden-test-admin",
  };
}

function request(path: string, init: RequestInit = {}) {
  return new Request(`https://example.test${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      "cf-connecting-ip": "203.0.113.10",
      ...(init.headers || {}),
    },
  });
}

async function login(env: Env) {
  const response = await handleApiRequest(request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ password: PASSWORD, turnstileToken: "turnstile-ok" }),
  }), env, deps);
  const headersWithCookies = response.headers as Headers & { getSetCookie?: () => string[] };
  const setCookie = typeof headersWithCookies.getSetCookie === "function"
    ? headersWithCookies.getSetCookie().join("; ")
    : response.headers.get("set-cookie") || "";
  const session = /choo_admin_session=([^;,]+)/.exec(setCookie)?.[1];
  const csrf = /choo_csrf=([^;,]+)/.exec(setCookie)?.[1];
  expect(session).toBeTruthy();
  expect(csrf).toBeTruthy();
  return {
    response,
    cookie: `choo_admin_session=${session}; choo_csrf=${csrf}`,
    csrf: csrf || "",
  };
}

const recipePayload = {
  slug: "mapo-test",
  status: "published",
  servings: 2,
  prepMinutes: 10,
  cookMinutes: 15,
  totalMinutes: 25,
  difficulty: "medium",
  tags: ["spicy", "quick"],
  imageIds: [],
  translations: [
    {
      locale: "en",
      title: "Mapo Test",
      description: "A test recipe.",
      origin: "Sichuan",
      occasion: "Weeknight",
      notes: "Keep the tofu intact.",
      ingredients: [
        { name: "silken tofu", amount: "400", unit: "g", aisle: "Fresh", inStore: true },
        { name: "doubanjiang", amount: "2", unit: "tbsp", aisle: "Sauces", inStore: true },
      ],
      steps: [
        { text: "Cube the tofu.", timerSeconds: 60 },
        { text: "Simmer with sauce.", timerSeconds: 240 },
      ],
      nutrition: { kcal: 180, protein: 12, carbs: 8, fat: 10 },
    },
  ],
};

describe("recipe backend", () => {
  let env: Env;

  beforeEach(async () => {
    env = await makeEnv();
  });

  it("logs in with Turnstile and a valid password", async () => {
    const { response, csrf } = await login(env);
    expect(response.status).toBe(200);
    expect(csrf.length).toBeGreaterThan(20);
  });

  it("rejects login failures with a generic response", async () => {
    const response = await handleApiRequest(request("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password: "wrong", turnstileToken: "turnstile-ok" }),
    }), env, deps);
    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toMatchObject({ error: "Invalid login" });
  });

  it("locks login after repeated failures", async () => {
    for (let i = 0; i < 5; i += 1) {
      await handleApiRequest(request("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password: "wrong", turnstileToken: "turnstile-ok" }),
      }), env, deps);
    }
    const response = await handleApiRequest(request("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password: PASSWORD, turnstileToken: "turnstile-ok" }),
    }), env, deps);
    expect(response.status).toBe(429);
  });

  it("rejects mutating admin requests without CSRF", async () => {
    const { cookie } = await login(env);
    const response = await handleApiRequest(request("/api/admin/recipes", {
      method: "POST",
      headers: { cookie },
      body: JSON.stringify(recipePayload),
    }), env, deps);
    expect(response.status).toBe(403);
  });

  it("rejects expired JWT sessions", async () => {
    const token = await signJwt({ sub: "admin", sid: "expired", iat: 1, exp: 2 }, JWT_SECRET);
    const response = await handleApiRequest(request("/api/admin/session", {
      headers: { cookie: `choo_admin_session=${token}` },
    }), env, deps);
    expect(response.status).toBe(401);
  });

  it("performs a recipe CRUD roundtrip", async () => {
    const { cookie, csrf } = await login(env);
    const create = await handleApiRequest(request("/api/admin/recipes", {
      method: "POST",
      headers: { cookie, "x-csrf-token": csrf },
      body: JSON.stringify(recipePayload),
    }), env, deps);
    expect(create.status).toBe(201);
    const created = await create.json<{ recipe: { recipeId: string; slug: string } }>();
    expect(created.recipe.slug).toBe("mapo-test");

    const publicList = await handleApiRequest(request("/api/recipes?tag=spicy&lang=en"), env, deps);
    expect(publicList.status).toBe(200);
    await expect(publicList.json()).resolves.toMatchObject({ recipes: [expect.objectContaining({ slug: "mapo-test" })] });

    const updatedPayload = {
      ...recipePayload,
      slug: "mapo-test-updated",
      translations: [{ ...recipePayload.translations[0], title: "Mapo Test Updated" }],
    };
    const update = await handleApiRequest(request(`/api/admin/recipes/${created.recipe.recipeId}`, {
      method: "PUT",
      headers: { cookie, "x-csrf-token": csrf },
      body: JSON.stringify(updatedPayload),
    }), env, deps);
    expect(update.status).toBe(200);

    const detail = await handleApiRequest(request("/api/recipes/mapo-test-updated?lang=en"), env, deps);
    expect(detail.status).toBe(200);
    await expect(detail.json()).resolves.toMatchObject({ recipe: expect.objectContaining({ title: "Mapo Test Updated" }) });

    const remove = await handleApiRequest(request(`/api/admin/recipes/${created.recipe.recipeId}`, {
      method: "DELETE",
      headers: { cookie, "x-csrf-token": csrf },
    }), env, deps);
    expect(remove.status).toBe(200);

    const missing = await handleApiRequest(request("/api/recipes/mapo-test-updated?lang=en"), env, deps);
    expect(missing.status).toBe(404);
  });
});
