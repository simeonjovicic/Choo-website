import {
  type Lang,
  META,
  buildSeoContentHtml,
  buildRecipeJsonLd,
  normalizeLang,
} from "./seo-data";

const CANONICAL_BASE = "https://choo-foodstore.at";

export function pickLang(url: URL, acceptLanguage: string | null): Lang {
  const qp = url.searchParams.get("lang");
  if (qp) return normalizeLang(qp);
  if (acceptLanguage) {
    const head = acceptLanguage.split(",")[0]?.trim();
    if (head) return normalizeLang(head);
  }
  return "en";
}

function canonicalForLang(lang: Lang): string {
  return lang === "en" ? `${CANONICAL_BASE}/` : `${CANONICAL_BASE}/?lang=${lang}`;
}

function escAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export async function renderLocalizedHtml(html: string, lang: Lang): Promise<string> {
  const meta = META[lang];
  let out = html;

  out = out.replace(/<html lang="[^"]*"/, `<html lang="${meta.htmlLang}"`);

  out = out.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escAttr(meta.title)}</title>`,
  );

  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escAttr(meta.description)}" />`,
  );

  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalForLang(lang)}" />`,
  );

  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escAttr(meta.title)}" />`,
  );

  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escAttr(meta.description)}" />`,
  );

  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalForLang(lang)}" />`,
  );

  out = out.replace(
    /<meta property="og:locale" content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
  );

  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escAttr(meta.title)}" />`,
  );

  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escAttr(meta.description)}" />`,
  );

  const seoBlock = buildSeoContentHtml(lang);
  const recipeLd = buildRecipeJsonLd();
  out = out.replace("</main>", `${seoBlock}\n</main>\n${recipeLd}`);

  return out;
}

export async function maybeRewriteIndex(
  request: Request,
  upstream: Response,
): Promise<Response> {
  const ct = upstream.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return upstream;

  const url = new URL(request.url);
  const lang = pickLang(url, request.headers.get("accept-language"));
  const html = await upstream.text();
  const rewritten = await renderLocalizedHtml(html, lang);

  const headers = new Headers(upstream.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "public, max-age=300, s-maxage=300");
  headers.set("vary", "Accept-Language");
  headers.set("content-language", lang);

  return new Response(rewritten, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}
