import { applySecurityHeaders, getAdminPath } from "./_shared/http";
import { maybeRewriteIndex } from "./_shared/seo-render";
import { buildSitemapXml, SITEMAP_PATH } from "./_shared/sitemap";
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
    const body = `User-agent: *\nDisallow: ${adminPath}\n\nSitemap: https://choo-foodstore.at${SITEMAP_PATH}\n`;
    return applySecurityHeaders(new Response(body, {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    }));
  }

  if (url.pathname === SITEMAP_PATH) {
    return applySecurityHeaders(new Response(buildSitemapXml(), {
      headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
    }));
  }

  if (url.pathname.replace(/\/+$/, "") === adminPath) {
    return applySecurityHeaders(await adminShell(context.request, context.env));
  }

  const downstream = await context.next();

  if (
    context.request.method === "GET" &&
    (url.pathname === "/" || url.pathname === "/index.html")
  ) {
    const rewritten = await maybeRewriteIndex(context.request, downstream);
    return applySecurityHeaders(rewritten);
  }

  return applySecurityHeaders(downstream);
};
