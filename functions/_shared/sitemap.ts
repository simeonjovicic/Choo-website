export const SITEMAP_PATH = "/sitemap.xml";

const BASE = "https://choo-foodstore.at";

interface Entry {
  loc: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
  alternates?: Array<{ hreflang: string; href: string }>;
}

function homeAlternates() {
  return [
    { hreflang: "en", href: `${BASE}/?lang=en` },
    { hreflang: "de", href: `${BASE}/?lang=de` },
    { hreflang: "zh", href: `${BASE}/?lang=zh` },
    { hreflang: "x-default", href: `${BASE}/` },
  ];
}

const ENTRIES: Entry[] = [
  { loc: `${BASE}/`, changefreq: "weekly", priority: "1.0", alternates: homeAlternates() },
  { loc: `${BASE}/?lang=de`, changefreq: "weekly", priority: "0.9", alternates: homeAlternates() },
  { loc: `${BASE}/?lang=zh`, changefreq: "weekly", priority: "0.9", alternates: homeAlternates() },
  { loc: `${BASE}/impressum`, changefreq: "monthly", priority: "0.3" },
];

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function buildSitemapXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ENTRIES.map((e) => {
    const alts = (e.alternates || []).map(
      (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" />`,
    ).join("\n");
    return [
      "  <url>",
      `    <loc>${esc(e.loc)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : "",
      e.priority ? `    <priority>${e.priority}</priority>` : "",
      alts,
      "  </url>",
    ].filter(Boolean).join("\n");
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}
