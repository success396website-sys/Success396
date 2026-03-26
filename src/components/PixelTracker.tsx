import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PixelTracker component to handle Meta Pixel PageView events on route changes.
 * This runs automatically for every page change as long as the user has accepted cookies.
 */
const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if consent was accepted
    const consent = localStorage.getItem("cookie-consent");
    
    if (consent === "accepted" && typeof (window as any).fbq === "function") {
      // Track PageView on route change
      (window as any).fbq("track", "PageView");
      console.log(`[Meta Pixel] PageView tracked for: ${location.pathname}`);
    }
  }, [location]);

  return null;
};

export default PixelTracker;
