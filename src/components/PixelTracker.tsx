import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { hasConsent } from "@/lib/pixel";

declare global {
  interface Window {
    fbq: any;
    dataLayer: any[];
  }
}

/**
 * Success369 — Site-Wide Micro-Movement Tracking
 * 
 * Tracks:
 * 1. Scroll Depth (25%, 50%, 75%, 90%)
 * 2. Time on Page (30s, 1m, 3m, 5m)
 * 3. Section Views (Auto-detects by ID)
 * 4. Button & CTA Clicks (Auto-detects by text content)
 * 5. Outbound Links
 * 6. Form Submissions
 */
const PixelTracker = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const scrollFiredRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    // 1. Initial PageView (only after consent)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    const consented = hasConsent();

    // Meta Pixel stays behind cookie consent.
    if (consented && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    // Virtual page view for GTM (SPA route changes). Always sent so
    // conversion pages like /thank-you/* can be counted; the consent state
    // is included so GTM tags can be gated with it. Delayed slightly so
    // react-helmet-async has applied the new document.title first.
    const path = location.pathname;
    window.setTimeout(() => {
      if (typeof window.dataLayer !== "undefined") {
        window.dataLayer.push({
          event: "page_view",
          page_path: path,
          page_title: document.title,
          page_location: window.location.origin + path + window.location.search,
          consent: consented ? "granted" : "not_granted",
        });
      }
    }, 150);

    // Reset scroll tracking for the new page
    scrollFiredRef.current = {};
  }, [location.pathname]);

  useEffect(() => {
    if (!hasConsent() || typeof window.fbq !== "function") return;

    const _PAGE = window.location.pathname;

    // --- 1. Scroll Depth ---
    const _scrollDepths = [25, 50, 75, 90];
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const pct = Math.round((window.scrollY / scrollHeight) * 100);
      _scrollDepths.forEach(d => {
        if (pct >= d && !scrollFiredRef.current[d]) {
          scrollFiredRef.current[d] = true;
          window.fbq("trackCustom", "ScrollDepth", {
            depth: d + "%",
            page: _PAGE
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- 2. Time on Page ---
    const timers: number[] = [];
    [
      { s: 30, l: "30 seconds" },
      { s: 60, l: "1 minute" },
      { s: 180, l: "3 minutes" },
      { s: 300, l: "5 minutes" }
    ].forEach(p => {
      const t = window.setTimeout(() => {
        window.fbq("trackCustom", "TimeOnPage", {
          duration: p.l,
          page: _PAGE
        });
      }, p.s * 1000);
      timers.push(t);
    });

    // --- 3. Section Views ---
    const _sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.fbq("trackCustom", "SectionView", {
            section: entry.target.id,
            page: _PAGE
          });
          _sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll("[id]").forEach(el => {
      if (el.id && !el.id.startsWith("radix-:")) {
        _sectionObserver.observe(el);
      }
    });

    // --- 4. Button & CTA Click Detection ---
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("a, button");
      if (!el) return;

      const htmlEl = el as HTMLElement;
      const text = (htmlEl.innerText || "").trim().substring(0, 80);
      const href = (el as HTMLAnchorElement).href || "";

      // Register / Payment buttons
      if (text.includes("3,000") || text.toLowerCase().includes("register")) {
        window.fbq("track", "InitiateCheckout", {
          content_name: document.title,
          value: 3000,
          currency: "INR",
          page: _PAGE
        });
      }
      // Free session buttons
      else if (text.toLowerCase().includes("free session") || text.toLowerCase().includes("free taster")) {
        window.fbq("track", "Lead", {
          content_name: "Free Session",
          page: _PAGE
        });
      }
      // Join community / WhatsApp buttons
      else if (text.toLowerCase().includes("join") || href.includes("whatsapp") || href.includes("wa.me")) {
        window.fbq("trackCustom", "CommunityClick", {
          button_text: text,
          page: _PAGE
        });
      }
      // Book / Contact buttons
      else if (text.toLowerCase().includes("book") || text.toLowerCase().includes("contact") || text.toLowerCase().includes("enquire")) {
        window.fbq("trackCustom", "EnquiryClick", {
          button_text: text,
          page: _PAGE
        });
      }
      // All other CTA clicks
      else if (text.length > 2) {
        window.fbq("trackCustom", "CTAClick", {
          button_text: text,
          destination: href.replace("https://success369.org", ""),
          page: _PAGE
        });
      }

      // 5. Outbound Link Detection
      if (href && !href.includes("success369.org") && !href.startsWith("#") && !href.startsWith("javascript") && !href.startsWith("tel:") && !href.startsWith("mailto:")) {
        window.fbq("trackCustom", "OutboundClick", {
          destination: href.substring(0, 100),
          page: _PAGE
        });
      }
    };

    document.addEventListener("click", handleClick);

    // --- 6. Form Submissions ---
    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formId = form.id || form.className.substring(0, 40) || "unknown";
      window.fbq("trackCustom", "FormSubmit", {
        form_id: formId,
        page: _PAGE
      });
    };

    document.addEventListener("submit", handleFormSubmit);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleFormSubmit);
      _sectionObserver.disconnect();
      timers.forEach(t => clearTimeout(t));
    };
  }, [location.pathname]);

  return null;
};

export default PixelTracker;
