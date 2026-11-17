import { Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PixelTracker from "./components/PixelTracker";
import CookieConsent from "./components/CookieConsent";
import { routes } from "./routes";

// Basic loading fallback
const LoadingFallback = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-[9999]">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

/**
 * Everything that lives inside the router. Shared by the browser entry
 * (BrowserRouter, below) and the build-time prerender (StaticRouter, see
 * src/entry-server.tsx), so both produce the same markup.
 */
export const AppContent = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="vite-ui-theme">
    <Sonner />
    <ScrollToTop />
    <PixelTracker />
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
    <CookieConsent />
  </ThemeProvider>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
