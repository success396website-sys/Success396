import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { lazyPage, type LazyPage } from "./lib/lazyPage";

// Lazy load pages for performance
const Index = lazyPage(() => import("./pages/Index"));
const Programs = lazyPage(() => import("./pages/Programs"));
const ProgramGita = lazyPage(() => import("./pages/ProgramGita"));
const ProgramMaya = lazyPage(() => import("./pages/ProgramMaya"));
const ProgramSarvam = lazyPage(() => import("./pages/ProgramSarvam"));
const ProgramShakti = lazyPage(() => import("./pages/ProgramShakti"));
const Blog = lazyPage(() => import("./pages/Blog"));
const BlogPost = lazyPage(() => import("./pages/BlogPost"));
const Book = lazyPage(() => import("./pages/Book"));
const Contact = lazyPage(() => import("./pages/Contact"));
const Events = lazyPage(() => import("./pages/Events"));
const EventDetail = lazyPage(() => import("./pages/EventDetail"));
const TakeSession = lazyPage(() => import("./pages/TakeSession"));
const Podcast = lazyPage(() => import("./pages/Podcast"));
const RoundTables = lazyPage(() => import("./pages/RoundTables"));
const PrivacyPolicy = lazyPage(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazyPage(() => import("./pages/RefundPolicy"));
const ShippingPolicy = lazyPage(() => import("./pages/ShippingPolicy"));
const TermsConditions = lazyPage(() => import("./pages/TermsConditions"));
const CookiePolicy = lazyPage(() => import("./pages/CookiePolicy"));
const Success369 = lazyPage(() => import("./pages/Success369"));
const AboutUs = lazyPage(() => import("./pages/AboutUs"));
const Checkout = lazyPage(() => import("./pages/Checkout"));
const EventRegister = lazyPage(() => import("./pages/EventRegister"));
const ProgramApply = lazyPage(() => import("./pages/ProgramApply"));
const MentorApply = lazyPage(() => import("./pages/MentorApply"));
const CommunityCharter = lazyPage(() => import("./pages/CommunityCharter"));
const AcceptableUsePolicy = lazyPage(() => import("./pages/AcceptableUsePolicy"));
const LegalNotice = lazyPage(() => import("./pages/LegalNotice"));
const Disclaimer = lazyPage(() => import("./pages/Disclaimer"));
const ShakthiNew = lazyPage(() => import("./pages/ShakthiNew"));
const Authors = lazyPage(() => import("./pages/Authors"));
const ThankYou = lazyPage(() => import("./pages/ThankYou"));
const ThankYouShakthi = lazyPage(() => import("./pages/ThankYouShakthi"));
const ThankYouPage = lazyPage(() => import("./pages/ThankYouPage"));
const NotFound = lazyPage(() => import("./pages/NotFound"));

export interface AppRoute {
  path: string;
  element: ReactElement;
  /**
   * Set to false for pages that must stay client-only (forms, checkout,
   * thank-you pages, redirects, the 404). Everything else is prerendered
   * to static HTML at build time by scripts/prerender.ts.
   *
   * Paths with a `:param` are expanded by src/entry-server.tsx — see
   * `dynamicPaths` there (blog posts and events are picked up from their
   * data files automatically).
   */
  prerender?: boolean;
  /** Loads the page's code-split chunk (see lib/lazyPage.tsx). */
  preload?: () => Promise<void>;
}

const page = (path: string, Page: LazyPage, prerender?: false): AppRoute => ({
  path,
  element: <Page />,
  preload: Page.preload,
  ...(prerender === false && { prerender }),
});

/**
 * Single source of truth for the site's routes. App.tsx renders them and
 * the build-time prerender step reads the same list, so a new page added
 * here is statically generated without touching the build script.
 */
export const routes: AppRoute[] = [
  page("/", Index),
  page("/success-369", Success369),
  page("/about-us", AboutUs),
  page("/programs", Programs),
  page("/program-gita", ProgramGita),
  { path: "/program-maya", element: <Navigate to="/maaya" replace />, prerender: false },
  page("/maaya", ProgramMaya),
  page("/program-sarvam", ProgramSarvam),
  page("/program-shakti", ProgramShakti),
  page("/shakti-unfiltered-voice", ShakthiNew),
  page("/blog", Blog),
  page("/blog/:slug", BlogPost),
  {
    path: "/what-is-the-369-method",
    element: <Navigate to="/blog/what-is-the-369-method" replace />,
    prerender: false,
  },
  page("/book", Book),
  page("/authors", Authors),
  page("/contact", Contact),
  page("/events", Events),
  page("/events/:slug", EventDetail),
  page("/take-a-session", TakeSession),
  page("/podcast", Podcast),
  page("/round-tables", RoundTables),
  page("/privacy-policy", PrivacyPolicy),
  page("/refund-policy", RefundPolicy),
  page("/shipping-policy", ShippingPolicy),
  page("/cookie-policy", CookiePolicy),
  page("/terms-conditions", TermsConditions),
  page("/checkout", Checkout, false),
  page("/register/:slug", EventRegister, false),
  page("/apply/mentor", MentorApply, false),
  page("/apply/:program", ProgramApply, false),
  page("/community-charter", CommunityCharter),
  page("/acceptable-use", AcceptableUsePolicy),
  page("/legal-notice", LegalNotice),
  page("/disclaimer", Disclaimer),
  page("/thank-you", ThankYou, false),
  page("/thank-you-shakthi", ThankYouShakthi, false),
  page("/thank-you/:type", ThankYouPage, false),
  // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
  page("*", NotFound, false),
];
