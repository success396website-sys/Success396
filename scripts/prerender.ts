/**
 * Post-build step: static site generation.
 *
 * The site is a React SPA, so `vite build` only produces one empty
 * dist/index.html and every page's content is drawn in the browser by
 * JavaScript. Crawlers that do not run JavaScript (ChatGPT, Perplexity,
 * Claude, most SEO checkers, link-preview bots, "View Source") therefore
 * see an empty page.
 *
 * `npm run build` now also builds src/entry-server.tsx (vite --ssr, into
 * dist-ssr). This script loads that bundle, server-renders every
 * prerenderable route to HTML and writes dist/<route>/index.html with:
 *   - the full page markup inside <div id="root">
 *   - the page's <title>, meta tags, canonical and JSON-LD (from the same
 *     react-helmet-async <Helmet> blocks the page already uses)
 *
 * The route list is not hand-maintained: it comes from src/routes.tsx, and
 * blog posts / events are expanded from their data files. Adding a blog
 * post or a page and rebuilding is all it takes.
 *
 * Vercel serves a real static file before applying the rewrite in
 * vercel.json, so these files are served as-is. Routes that are not
 * prerendered (checkout, forms, thank-you pages, redirects, 404) fall
 * through to dist/spa.html, the untouched client-only shell. In the
 * browser, main.tsx hydrates the prerendered markup.
 */
import { existsSync, copyFileSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const indexPath = join(distDir, "index.html");
const spaPath = join(distDir, "spa.html");
const serverEntry = join(root, "dist-ssr", "entry-server.js");

const siteUrl = "https://success369.org";

interface HelmetTags {
  title: string;
  meta: string;
  link: string;
  script: string;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** `name="x"` / `property="x"` key of a <meta> tag, or `rel="x"` of a <link>. */
function tagKey(tag: string, attrs: string[]): string | null {
  for (const attr of attrs) {
    const m = tag.match(new RegExp(`\\s${attr}="([^"]*)"`));
    if (m) return `${attr}:${m[1]}`;
  }
  return null;
}

function removeTemplateMeta(html: string, key: string): string {
  const [attr, value] = [key.slice(0, key.indexOf(":")), key.slice(key.indexOf(":") + 1)];
  return html.replace(new RegExp(`[ \\t]*<meta\\s+${attr}="${escapeRegExp(value)}"[^>]*>[ \\t]*\\r?\\n?`, "g"), "");
}

function buildHtml(template: string, route: string, appHtml: string, helmet: HelmetTags): string {
  const metaTags = helmet.meta.match(/<meta\b[^>]*>/g) ?? [];
  const linkTags = helmet.link.match(/<link\b[^>]*>/g) ?? [];
  const metaKeys = new Set(metaTags.map((t) => tagKey(t, ["name", "property"])).filter(Boolean) as string[]);
  const hasCanonical = linkTags.some((t) => tagKey(t, ["rel"]) === "rel:canonical");

  // Helmet emits an empty <title> when a page sets none; treat that as missing.
  const pageTitle = helmet.title.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.trim();
  const titleText = pageTitle || template.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() || "Success369";
  const descText =
    metaTags
      .find((t) => tagKey(t, ["name"]) === "name:description")
      ?.match(/\scontent="([^"]*)"/)?.[1] ??
    template.match(/<meta name="description" content="([^"]*)"/)?.[1] ??
    "";
  const url = `${siteUrl}${route === "/" ? "" : route}`;

  // Tags the page's Helmet block did not set are derived from its title,
  // description and URL, so every page has consistent og:/twitter:/canonical.
  const derived: string[] = [];
  const derive = (key: string, tag: string) => {
    if (!metaKeys.has(key)) derived.push(tag);
  };
  if (!hasCanonical) derived.push(`<link rel="canonical" href="${url}" />`);
  derive("property:og:url", `<meta property="og:url" content="${url}" />`);
  derive("property:og:title", `<meta property="og:title" content="${titleText}" />`);
  derive("property:og:description", `<meta property="og:description" content="${descText}" />`);
  derive("name:twitter:title", `<meta name="twitter:title" content="${titleText}" />`);
  derive("name:twitter:description", `<meta name="twitter:description" content="${descText}" />`);

  let html = template;

  // Drop the template defaults that this page overrides.
  html = html.replace(/[ \t]*<title>[\s\S]*?<\/title>[ \t]*\r?\n?/, "");
  const overridden = new Set<string>(metaKeys);
  for (const tag of derived) {
    const k = tagKey(tag, ["name", "property"]);
    if (k) overridden.add(k);
  }
  overridden.add("name:description");
  for (const key of overridden) html = removeTemplateMeta(html, key);
  if (metaKeys.has("property:og:image")) {
    // The default 1200x630 size no longer describes a page-specific image.
    html = removeTemplateMeta(html, "property:og:image:width");
    html = removeTemplateMeta(html, "property:og:image:height");
    if (!metaKeys.has("name:twitter:image")) {
      const ogImage = metaTags
        .find((t) => tagKey(t, ["property"]) === "property:og:image")
        ?.match(/\scontent="([^"]*)"/)?.[1];
      if (ogImage) {
        html = removeTemplateMeta(html, "name:twitter:image");
        derived.push(`<meta name="twitter:image" content="${ogImage}" />`);
      }
    }
  }

  const description = metaKeys.has("name:description")
    ? ""
    : `<meta name="description" content="${descText}" />`;

  const missing = [
    !pageTitle && "title",
    !metaKeys.has("name:description") && "description",
  ].filter(Boolean);
  // A missing canonical is not listed: it is derived from the route below.
  if (missing.length) {
    console.warn(`  [warn] ${route} sets no ${missing.join(", ")} of its own — add a <Helmet> / <PageSeo> to the page`);
  }

  const headTags = [pageTitle ? helmet.title : `<title>${titleText}</title>`, helmet.meta, helmet.link, description, ...derived, helmet.script]
    .filter(Boolean)
    .join("\n    ");
  html = html.replace("</head>", `    ${headTags}\n  </head>`);

  // Page markup.
  html = html.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
  return html;
}

async function main() {
  if (!existsSync(indexPath)) throw new Error("dist/index.html not found — run `vite build` first.");
  if (!existsSync(serverEntry)) {
    throw new Error("dist-ssr/entry-server.js not found — run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.");
  }

  // Keep the untouched client-only shell for non-prerendered routes. If this
  // script is re-run on an already processed dist/, reuse the saved shell.
  if (!existsSync(spaPath)) copyFileSync(indexPath, spaPath);
  const template = readFileSync(spaPath, "utf-8");

  const { render, getPrerenderPaths } = await import(pathToFileURL(serverEntry).href);
  const paths: string[] = getPrerenderPaths();

  console.log(`Prerendering ${paths.length} routes...`);
  for (const route of paths) {
    const { html: appHtml, helmet } = await render(route);
    const html = buildHtml(template, route, appHtml, helmet);
    const outPath = route === "/" ? indexPath : join(distDir, route.replace(/^\//, ""), "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`  ${route} -> ${outPath.replace(distDir, "dist")} (${(html.length / 1024).toFixed(0)} KB)`);
  }

  console.log("Prerender complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
