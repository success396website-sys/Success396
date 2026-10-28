import { Writable } from "node:stream";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppContent } from "./App";
import { routes } from "./routes";
import { blogPosts } from "./data/blog";
import { allEvents } from "./data/events-list";

/**
 * Build-time server renderer, consumed by scripts/prerender.ts.
 */

// Expanders for routes with a :param. They read the same data files the
// pages use, so a new blog post or event is prerendered automatically.
const dynamicPaths: Record<string, () => string[]> = {
  "/blog/:slug": () => blogPosts.map((post) => `/blog/${post.slug}`),
  "/events/:slug": () => allEvents.map((event) => `/events/${event.slug}`),
};

export function getPrerenderPaths(): string[] {
  const paths: string[] = [];
  for (const route of routes) {
    if (route.prerender === false) continue;
    if (!route.path.includes(":")) {
      paths.push(route.path);
    } else if (dynamicPaths[route.path]) {
      paths.push(...dynamicPaths[route.path]());
    } else {
      console.warn(`[prerender] no path expander for "${route.path}" — add one to dynamicPaths or set prerender: false`);
    }
  }
  return paths;
}

export interface HelmetTags {
  title: string;
  meta: string;
  link: string;
  script: string;
}

// Pages are code-split with React.lazy. A first pass waits for every lazy
// chunk the route needs; once they are resolved, a plain renderToString
// yields the finished page with no Suspense fallbacks or streamed patches.
function warmUp(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={{}}>
        <StaticRouter location={url}>
          <AppContent />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(new Writable({ write: (_chunk, _enc, done) => done() }));
          resolve();
        },
        onShellError: reject,
        onError: reject,
      }
    );
  });
}

export async function render(url: string): Promise<{ html: string; helmet: HelmetTags }> {
  await warmUp(url);

  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet!;
  return {
    html,
    helmet: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
    },
  };
}
