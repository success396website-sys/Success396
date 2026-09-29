/**
 * Single source of truth for per-route SEO metadata.
 *
 * Used by two consumers:
 * 1. This is the reference each page's <Helmet> block is meant to match.
 * 2. scripts/prerender.ts reads this at build time to bake the correct
 *    <title>/<meta description>/canonical/OG/Twitter tags directly into a
 *    static HTML file for each route (since this is a client-rendered SPA
 *    with no server-side rendering, the tags react-helmet-async sets are
 *    invisible to anything that doesn't execute JavaScript — crawlers,
 *    curl, link-preview bots, etc).
 *
 * Route path is the key, matching the paths registered in src/App.tsx.
 */

export interface RouteSeo {
  title: string;
  description: string;
}

export const siteUrl = "https://success369.org";

export const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "Success369 — Build Success That Is Aligned",
    description:
      "Success369 helps individuals, leaders, and organisations build sustainable success through clarity, congruence, and catalysis.",
  },
  "/success-369": {
    title: "What Is the Success369 Method? | Zero to Success in 369 Days",
    description:
      "The Success369 method is a structured 369-day framework built on Clarity, Congruence, and Catalysis. Discover how alignment creates sustainable success — not just effort.",
  },
  "/about-us": {
    title: "About Us | Success369 — Engineering Success",
    description:
      "Success369 is a philosophy-led, systems-driven enterprise headquartered in Bengaluru, India. We architect meaningful success through disciplined execution.",
  },
  "/programs": {
    title: "Programs — Success369 Journeys",
    description:
      "Explore the Success369 Journeys: MAYA, GITA, SARVAM, and SHAKTI — structured growth experiences for real decisions and transitions.",
  },
  "/program-gita": {
    title: "GITA — Clarity Before Action | Success369",
    description:
      "GITA is an essential part of Success369. A guided clarity session for those at a decision point, designed to reveal your next direction with confidence.",
  },
  "/program-maya": {
    title: "Self Alignment Coaching to Discover Your True Direction — MAYA by Success369",
    description:
      "MAYA is the Success369 self alignment coaching journey for people who are moving forward but feel something is fundamentally off — not broken, just misaligned. Guided 1:1 or small cohort sessions with a certified facilitator.",
  },
  "/maaya": {
    title: "Self Alignment Coaching | Identity and Purpose Coaching — MAAYA",
    description:
      "MAAYA is Success369's self alignment coaching journey for individuals who are progressing but feel something is off. Guided 1:1 sessions with a certified Success369 facilitator.",
  },
  "/program-sarvam": {
    title: "SARVAM — Architecting Sustainable Success | Success369",
    description:
      "SARVAM is for leaders ready to build long-term value. Integrate identity, work, and legacy into a stable success architecture that endures.",
  },
  "/program-shakti": {
    title: "Leadership Development Courses Online — SHAKTI by Success369",
    description:
      "SHAKTI is Success369's leadership development program — focused activation modules for leaders and teams ready to turn alignment into sharper execution and stronger influence. Available online and in-person.",
  },
  "/shakti-unfiltered-voice": {
    title: "Shakthi — Find your voice. Command the room. | Success369",
    description:
      "Shakthi by Success369: a focused communication skill-development programme for ambitious individuals. 3 HR × 2 sessions. Cohorts of 15–25. ₹3,000 all inclusive. Harvard ManageMentor content included.",
  },
  "/book": {
    title: "Success 369 Book by Dr. Ajayya Kumar & Praveen Parameswar",
    description:
      "The Success 369 book is a structured personal development framework built on three pillars — Clarity, Congruence, and Catalysis. Available now in hardcover with bonus worksheets.",
  },
  "/authors": {
    title: "Meet the Authors — Dr. Ajayya Kumar & Praveen Parameswar | Success369",
    description:
      "Dr. Ajayya Kumar and Praveen Parameswar are the co-authors of Success 369 — a structured personal development framework built on Clarity, Congruence, and Catalysis.",
  },
  "/contact": {
    title: "Contact Us — Get in Touch | Success369",
    description:
      "Reach out to the Success369 team. Whether it's about our programs, book, events, or partnerships — we'd love to hear from you.",
  },
  "/events": {
    title: "Events — Live Transformation Experiences | Success369",
    description:
      "Join Success369 live events — from free virtual masterclasses to life-changing in-person experiences that rewire how you grow.",
  },
  "/take-a-session": {
    title: "Take a Session — Your First Step | Success369",
    description:
      "Book a 30-minute session with Success369. No pitch, no pressure — just a warm conversation to explore what's next for your journey.",
  },
  "/podcast": {
    title: "Podcast — Success369 Audio Experiences",
    description:
      "Tune into the Success369 Podcast network for insights on personal growth, clarity, and sustainable success from leaders and visionaries.",
  },
  "/blog": {
    title: "Blog — Insights for Sustainable Growth | Success369",
    description:
      "Explore perspectives on clarity, congruence, and catalysis — the three pillars of lasting transformation.",
  },
};
