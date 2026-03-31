import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { hasConsent } from "@/lib/pixel";

/**
 * Fires PageView on every client-side route change — only if the user
 * has accepted cookies. The initial PageView is fired by initPixel()
 * in CookieConsent, so we skip the first render to avoid a duplicate.
 */
const PixelTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (hasConsent() && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default PixelTracker;
