import type { Env } from "./types";

export const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
};

export const MAX_JSON_BODY_BYTES = 100 * 1024;
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

export function securityHeaders(): HeadersInit {
  return {
    "Content-Security-Policy": [
      "default-src 'self'",
      "base-uri 'none'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "script-src 'self' https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://challenges.cloudflare.com",
      "frame-src https://challenges.cloudflare.com https://www.google.com",
      "form-action 'self'",
    ].join("; "),
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "X-Frame-Options": "DENY",
  };
}

export function applySecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(securityHeaders())) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export function json(data: unknown, init: ResponseInit = {}): Response {
  const headers = new Headers(init.headers);
  if (!headers.has("content-type")) headers.set("content-type", JSON_HEADERS["content-type"]);
  return new Response(JSON.stringify(data), { ...init, headers });
}

export function noContent(init: ResponseInit = {}): Response {
  return new Response(null, { ...init, status: init.status ?? 204 });
}

export function error(status: number, message = "Request failed"): Response {
  return json({ ok: false, error: message }, { status });
}

export function notFound(): Response {
  return error(404, "Not found");
}

export async function readJsonBody(request: Request): Promise<unknown> {
  const length = request.headers.get("content-length");
  if (length && Number(length) > MAX_JSON_BODY_BYTES) {
    throw Object.assign(new Error("Payload too large"), { status: 413 });
  }

  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > MAX_JSON_BODY_BYTES) {
    throw Object.assign(new Error("Payload too large"), { status: 413 });
  }
  if (!text.trim()) return {};
  return JSON.parse(text);
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "0.0.0.0"
  );
}

export function getAdminPath(env: Pick<Env, "ADMIN_PATH" | "ADMIN_PATH_DEFAULT">): string {
  const raw = env.ADMIN_PATH || env.ADMIN_PATH_DEFAULT || "/__admin";
  const normalized = raw.startsWith("/") ? raw : `/${raw}`;
  return normalized.replace(/\/+$/, "") || "/__admin";
}

export function getCookie(request: Request, name: string): string | null {
  const cookie = request.headers.get("cookie");
  if (!cookie) return null;
  for (const part of cookie.split(";")) {
    const [rawName, ...rest] = part.trim().split("=");
    if (rawName === name) return rest.join("=") || "";
  }
  return null;
}

export function appendCookie(headers: Headers, cookie: string): Headers {
  headers.append("set-cookie", cookie);
  return headers;
}

export function cachePublic(seconds: number): HeadersInit {
  return {
    "cache-control": `public, max-age=${seconds}, s-maxage=${seconds}, stale-while-revalidate=${seconds}`,
  };
}
