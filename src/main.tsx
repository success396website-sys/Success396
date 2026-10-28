import { createRoot, hydrateRoot } from "react-dom/client";
import { matchRoutes } from "react-router-dom";
import App from "./App.tsx";
import { routes } from "./routes";
import "./index.css";

const container = document.getElementById("root")!;

// Prerendered pages ship with their markup already inside #root: attach to
// it instead of rebuilding it. Client-only routes (forms, checkout, 404)
// are served an empty #root and render normally.
if (container.hasChildNodes()) {
  // Load the current page's code-split chunk first, so hydration never has
  // to suspend on it (see lib/lazyPage.tsx).
  const matches = matchRoutes(routes, window.location.pathname) ?? [];
  Promise.all(matches.map((m) => m.route.preload?.()))
    .catch(() => {})
    .then(() => hydrateRoot(container, <App />));
} else {
  createRoot(container).render(<App />);
}
