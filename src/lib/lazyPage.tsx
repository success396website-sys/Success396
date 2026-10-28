import type { ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType<any> }>;

export interface LazyPage {
  (props: Record<string, unknown>): JSX.Element;
  preload: () => Promise<void>;
}

/**
 * Code-split page component, like React.lazy, with one difference: it can
 * be preloaded, after which it renders synchronously on its very first
 * render. React.lazy always suspends once, even for an already-loaded
 * chunk, and a Suspense boundary that suspends while hydrating can be
 * thrown away and rebuilt on the client (React error #421) — losing the
 * prerendered markup. main.tsx preloads the current route's chunk before
 * hydrating so that never happens.
 */
export function lazyPage(loader: Loader): LazyPage {
  let Component: ComponentType<any> | undefined;
  let pending: Promise<void> | undefined;

  const preload = () =>
    (pending ??= loader().then((mod) => {
      Component = mod.default;
    }));

  const Page = ((props: Record<string, unknown>) => {
    if (!Component) throw preload();
    return <Component {...props} />;
  }) as LazyPage;
  Page.preload = preload;
  return Page;
}
