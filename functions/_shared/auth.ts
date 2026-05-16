import { bytesToBase64, base64ToBytes, pbkdf2Sha256, randomToken, signJwt, timingSafeEqual, verifyJwt } from "./crypto";
import { appendCookie, getCookie } from "./http";
import type { Env, RouteDeps, SessionClaims } from "./types";

export const SESSION_COOKIE = "choo_admin_session";
export const CSRF_COOKIE = "choo_csrf";
export const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60;

export async function verifyAdminPassword(env: Env, password: string): Promise<boolean> {
  const expected = base64ToBytes(env.ADMIN_HASH);
  const actual = await pbkdf2Sha256(password, env.ADMIN_SALT);
  return timingSafeEqual(actual, expected);
}

export async function createSession(env: Env, deps: RouteDeps = {}): Promise<{
  sessionToken: string;
  csrfToken: string;
  sessionId: string;
}> {
  const now = Math.floor((deps.now?.() ?? Date.now()) / 1000);
  const sessionId = randomToken(32);
  const csrfToken = randomToken(32);
  const claims: SessionClaims = {
    sub: "admin",
    sid: sessionId,
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
  };
  await env.RATE_LIMIT.put(`csrf:${sessionId}`, csrfToken, { expirationTtl: SESSION_TTL_SECONDS });
  return {
    sessionToken: await signJwt({ ...claims }, env.JWT_SECRET),
    csrfToken,
    sessionId,
  };
}

export async function getSession(request: Request, env: Env): Promise<SessionClaims | null> {
  const token = getCookie(request, SESSION_COOKIE);
  if (!token) return null;
  const claims = await verifyJwt<SessionClaims & Record<string, unknown>>(token, env.JWT_SECRET);
  if (!claims || claims.sub !== "admin" || !claims.sid) return null;
  return claims;
}

export async function requireAdmin(request: Request, env: Env, options: { csrf?: boolean } = {}): Promise<SessionClaims> {
  const session = await getSession(request, env);
  if (!session) throw Object.assign(new Error("Unauthorized"), { status: 401 });

  if (options.csrf) {
    const headerToken = request.headers.get("x-csrf-token") || "";
    const cookieToken = getCookie(request, CSRF_COOKIE) || "";
    const storedToken = await env.RATE_LIMIT.get(`csrf:${session.sid}`);
    if (!headerToken || !cookieToken || !storedToken || headerToken !== cookieToken || headerToken !== storedToken) {
      throw Object.assign(new Error("CSRF rejected"), { status: 403 });
    }
  }

  return session;
}

export async function clearSession(env: Env, sessionId?: string): Promise<void> {
  if (sessionId) await env.RATE_LIMIT.delete(`csrf:${sessionId}`);
}

function cookieSecurity(request?: Request): string {
  if (request) {
    const url = new URL(request.url);
    const isLocalHttp = url.protocol === "http:" && (
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "::1"
    );
    if (isLocalHttp) return "SameSite=Strict";
  }
  return "Secure; SameSite=Strict";
}

export function addSessionCookies(headers: Headers, sessionToken: string, csrfToken: string, request?: Request): Headers {
  const security = cookieSecurity(request);
  appendCookie(
    headers,
    `${SESSION_COOKIE}=${sessionToken}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; ${security}`,
  );
  appendCookie(
    headers,
    `${CSRF_COOKIE}=${csrfToken}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; ${security}`,
  );
  return headers;
}

export function addClearSessionCookies(headers: Headers, request?: Request): Headers {
  const security = cookieSecurity(request);
  appendCookie(headers, `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; ${security}`);
  appendCookie(headers, `${CSRF_COOKIE}=; Path=/; Max-Age=0; ${security}`);
  return headers;
}

export async function hashPasswordForCli(password: string): Promise<{ hash: string; salt: string }> {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const salt = bytesToBase64(bytes);
  const hash = bytesToBase64(await pbkdf2Sha256(password, salt));
  return { hash, salt };
}
