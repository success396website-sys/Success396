/**
 * Meta Pixel tracking utility — GDPR-compliant.
 *
 * - The fbevents.js stub loads on every page (required for the queue).
 * - fbq("init") is only called after the user accepts cookies.
 * - All tracking functions check consent before firing.
 */

const PIXEL_ID = "789944417071903";

/** Returns true only if the user has accepted cookies */
export const hasConsent = () =>
  localStorage.getItem("cookie-consent") === "accepted";

/**
 * Initializes the pixel and fires the first PageView.
 * Called by CookieConsent on accept, or on page load if already accepted.
 */
export const initPixel = () => {
  if (typeof window.fbq !== "function") return;
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
  localStorage.setItem("cookie-consent", "accepted");
};

/** Core tracker — no-ops silently if consent not given or pixel not ready */
export const pixelTrack = (event: string, params?: Record<string, unknown>) => {
  if (!hasConsent() || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
};

/** User views a key page or content section */
export const trackViewContent = (contentName: string) =>
  pixelTrack("ViewContent", { content_name: contentName });

/** User signals purchase intent */
export const trackInitiateCheckout = (contentName: string) =>
  pixelTrack("InitiateCheckout", { content_name: contentName });

/** User submits a lead form or intent action */
export const trackLead = (contentName: string) =>
  pixelTrack("Lead", { content_name: contentName });

/** Fires once on confirmed Razorpay payment success */
export const trackPurchase = (
  value: number,
  currency = "INR",
  contentName?: string
) => pixelTrack("Purchase", { value, currency, content_name: contentName });
