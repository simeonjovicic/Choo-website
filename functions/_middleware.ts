import { applySecurityHeaders, getAdminPath } from "./_shared/http";
import type { Env } from "./_shared/types";

async function adminShell(request: Request, env: Env): Promise<Response> {
  const indexUrl = new URL("/", request.url);
  const response = env.ASSETS
    ? await env.ASSETS.fetch(new Request(indexUrl, request))
    : await fetch(indexUrl.toString(), request);
  const html = await response.text();
  const injected = html.replace(
    "</body>",
    '  <script type="module" src="/api/admin/client/entry.js"></script>\n</body>',
  );
  return new Response(injected, {
    status: response.status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const adminPath = getAdminPath(context.env);

  if (url.pathname === "/robots.txt") {
    return applySecurityHeaders(new Response(`User-agent: *\nDisallow: ${adminPath}\n`, {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300" },
    }));
  }

  if (url.pathname.replace(/\/+$/, "") === adminPath) {
    return applySecurityHeaders(await adminShell(context.request, context.env));
  }

  return applySecurityHeaders(await context.next());
};
