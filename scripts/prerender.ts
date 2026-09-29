/**
 * Post-build step: bakes the correct <title>/<meta description>/canonical/
 * OG/Twitter tags into a real static HTML file for each route.
 *
 * Why: this site is a client-only React SPA (no SSR). Vite's build only
 * produces one dist/index.html, and every route's real title/description
 * is set afterward by react-helmet-async, purely in JavaScript. Any tool
 * that reads raw HTML without executing JS — curl, "View Source", most
 * SEO checkers, social link-preview bots, and search-engine crawlers on
 * their first pass — only ever sees the one generic index.html, no matter
 * which page it's actually looking at.
 *
 * This script runs after `vite build` and writes dist/<route>/index.html
 * for every route in routeSeo (plus every blog post), each a copy of the
 * built index.html with just its <head> SEO tags swapped to that route's
 * values. Vercel's filesystem routing serves a matching static file
 * before falling back to the SPA rewrite (already proven on this project
 * by /robots.txt and /sitemap.xml working correctly), so this makes the
 * correct tags visible immediately to non-JS clients, while real visitors
 * still get the exact same interactive SPA (same JS bundle, same <div
 * id="root">) — react-helmet-async just re-applies the same values once
 * React mounts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { routeSeo, siteUrl, type RouteSeo } from "../src/data/seo";
import { blogPosts } from "../src/data/blog";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildHtmlFor(baseHtml: string, route: string, seo: RouteSeo): string {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const url = `${siteUrl}${route === "/" ? "" : route}`;

  let html = baseHtml;

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`
  );

  // OG tags
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`
  );

  // Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  // canonical link — add right after <title> (base index.html has none)
  html = html.replace(/(<title>[^<]*<\/title>)/, `$1\n    <link rel="canonical" href="${url}" />`);

  return html;
}

function writeRoute(baseHtml: string, route: string, seo: RouteSeo) {
  const html = buildHtmlFor(baseHtml, route, seo);
  const outPath = route === "/" ? indexPath : join(distDir, route.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");
  console.log(`  prerendered ${route} -> ${outPath.replace(distDir, "dist")}`);
}

function main() {
  const baseHtml = readFileSync(indexPath, "utf-8");

  console.log(`Prerendering ${Object.keys(routeSeo).length} static routes...`);
  for (const [route, seo] of Object.entries(routeSeo)) {
    writeRoute(baseHtml, route, seo);
  }

  console.log(`Prerendering ${blogPosts.length} blog posts...`);
  for (const post of blogPosts) {
    const seo: RouteSeo = {
      title: post.metaTitle || `${post.title} — Success369 Insights`,
      description: post.metaDescription || post.excerpt || post.content[0]?.slice(0, 160) || "",
    };
    writeRoute(baseHtml, `/blog/${post.slug}`, seo);
  }

  console.log("Prerender complete.");
}

main();
