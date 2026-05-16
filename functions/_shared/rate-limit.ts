import type { Env } from "./types";

const LOGIN_WINDOW_SECONDS = 15 * 60;
const LOGIN_LOCK_SECONDS = 60 * 60;
const LOGIN_MAX_FAILURES = 5;

export async function isLoginLocked(env: Env, ip: string): Promise<boolean> {
  return (await env.RATE_LIMIT.get(`login:lock:${ip}`)) === "1";
}

export async function recordLoginFailure(env: Env, ip: string): Promise<void> {
  const key = `login:fail:${ip}`;
  const current = Number((await env.RATE_LIMIT.get(key)) || "0");
  const next = current + 1;

  if (next >= LOGIN_MAX_FAILURES) {
    await env.RATE_LIMIT.put(`login:lock:${ip}`, "1", { expirationTtl: LOGIN_LOCK_SECONDS });
    await env.RATE_LIMIT.delete(key);
    return;
  }

  await env.RATE_LIMIT.put(key, String(next), { expirationTtl: LOGIN_WINDOW_SECONDS });
}

export async function clearLoginFailures(env: Env, ip: string): Promise<void> {
  await Promise.all([
    env.RATE_LIMIT.delete(`login:fail:${ip}`),
    env.RATE_LIMIT.delete(`login:lock:${ip}`),
  ]);
}

export async function checkApiRateLimit(env: Env, key: string, limit: number, windowSeconds: number): Promise<boolean> {
  const namespaced = `api:${key}`;
  const current = Number((await env.RATE_LIMIT.get(namespaced)) || "0");
  if (current >= limit) return false;
  await env.RATE_LIMIT.put(namespaced, String(current + 1), { expirationTtl: windowSeconds });
  return true;
}
