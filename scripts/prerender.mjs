import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const dist = join(process.cwd(), "dist");
const ssrEntry = pathToFileURL(join(process.cwd(), "dist-ssr", "entry-server.js")).href;
const { render } = await import(ssrEntry);

const SITE = "https://privchat.dev";

const routes = [
  "/",
  "/server/",
  "/app/",
  "/chat/",
  "/game/",
  "/agents/",
  "/sdk/",
  "/architecture/",
  "/tutorials/",
  "/open-source/",
  "/enterprise/",
  "/platform/",
  "/contact/",
];

const langs = [
  { code: "en", prefix: "", html: "en", hreflang: "en" },
  { code: "cn", prefix: "/zh-hans", html: "zh-Hans", hreflang: "zh-Hans" },
  { code: "tw", prefix: "/zh-hant", html: "zh-Hant", hreflang: "zh-Hant" },
];

// SEO 字典来自 src/seo.ts —— 经 dist-ssr 一同打包导出。
const seoModule = await import(ssrEntry);
const SEO = seoModule.SEO;

const template = readFileSync(join(dist, "index.html"), "utf8");

function headFor(langDef, route) {
  const meta = SEO[route][langDef.code];
  const canonical = `${SITE}${langDef.prefix}${route}`;
  const alternates = langs
    .map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${SITE}${l.prefix}${route}" />`)
    .join("\n    ");
  return [
    `<link rel="canonical" href="${canonical}" />`,
    alternates,
    `<link rel="alternate" hreflang="x-default" href="${SITE}${route}" />`,
  ].join("\n    ");
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

let count = 0;
const sitemapUrls = [];
for (const langDef of langs) {
  for (const route of routes) {
    const path = `${langDef.prefix}${route}`;
    const meta = SEO[route][langDef.code];
    const appHtml = render(path);

    let page = template;
    page = page.replace('<html lang="en">', `<html lang="${langDef.html}">`);
    page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`);
    page = page.replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    );
    page = page.replace(
      /<meta property="og:title"[\s\S]*?\/>/,
      `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    );
    page = page.replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    );
    page = page.replace(
      '<meta property="og:image" content="/assets/privchat-hero.png" />',
      `<meta property="og:image" content="${SITE}/assets/privchat-hero.png" />\n    <meta property="og:url" content="${SITE}${path}" />`,
    );
    page = page.replace("<!--app-head-->", headFor(langDef, route));
    page = page.replace("<!--app-html-->", appHtml);

    const targetDir = path === "/" ? dist : join(dist, ...path.split("/").filter(Boolean));
    mkdirSync(targetDir, { recursive: true });
    writeFileSync(join(targetDir, "index.html"), page);
    sitemapUrls.push(`${SITE}${path}`);
    count++;
  }
}

// SPA fallback for unknown paths (GitHub Pages serves 404.html): empty-shell template.
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
// 注意: 404.html 用根页(已预渲染的英文首页)兜底即可 —— JS 归一化未知路径到首页。

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(dist, "sitemap.xml"), sitemap);
writeFileSync(
  join(dist, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`,
);

console.log(`prerendered ${count} pages`);
