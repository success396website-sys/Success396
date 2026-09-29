import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

interface ThankYouConfig {
  eyebrow: string;
  heading: string;
  message: string;
  secondaryCta?: { text: string; href: string };
}

/**
 * Config per form/program. Route is /thank-you/:type — each key here is
 * a distinct, trackable URL (GTM: match "page_path starts with /thank-you/"
 * for total submissions, or an exact path for a single form).
 */
const thankYouDetails: Record<string, ThankYouConfig> = {
  "take-a-session": {
    eyebrow: "Session Requested",
    heading: "Your session is booked in.",
    message: "Thank you for reaching out. We'll be in touch within 24–48 hours to find a time that works for you — no pitch, no pressure, just a conversation.",
    secondaryCta: { text: "Explore the Programs", href: "/programs" },
  },
  contact: {
    eyebrow: "Message Sent",
    heading: "Thanks for reaching out.",
    message: "We've received your message and our team will get back to you shortly. In the meantime, feel free to explore the Success369 Journeys.",
    secondaryCta: { text: "Explore the Programs", href: "/programs" },
  },
  gita: {
    eyebrow: "GITA Application Received",
    heading: "Your GITA application is in.",
    message: "We'll be in touch soon with next steps for your clarity session. In the meantime, take a look at what the journey involves.",
    secondaryCta: { text: "Revisit GITA", href: "/program-gita" },
  },
  maya: {
    eyebrow: "MAYA Application Received",
    heading: "Your MAYA application is in.",
    message: "We'll follow up shortly about your self alignment coaching journey. Real alignment takes time to surface — we're glad you're starting.",
    secondaryCta: { text: "Revisit MAYA", href: "/program-maya" },
  },
  sarvam: {
    eyebrow: "SARVAM Application Received",
    heading: "Your SARVAM application is in.",
    message: "We'll be in touch about building your success architecture. Our team will reach out with the details of your next steps.",
    secondaryCta: { text: "Revisit SARVAM", href: "/program-sarvam" },
  },
  shakti: {
    eyebrow: "SHAKTI Application Received",
    heading: "Your SHAKTI application is in.",
    message: "We'll follow up about your leadership development journey. Our team will reach out with cohort details and next steps.",
    secondaryCta: { text: "Revisit SHAKTI", href: "/program-shakti" },
  },
  "maaya-retreat": {
    eyebrow: "MAAYA Application Received",
    heading: "Your MAAYA application is in.",
    message: "We'll follow up with cohort details and next steps for your MAAYA journey. Seats are limited, so we review applications closely.",
    secondaryCta: { text: "Revisit MAAYA", href: "/maaya" },
  },
  mentor: {
    eyebrow: "Mentor Application Received",
    heading: "Thanks for applying to mentor.",
    message: "We've received your application to join the Success369 mentorship team. We'll review it and get back to you soon.",
  },
  event: {
    eyebrow: "You're Registered",
    heading: "Your seat is confirmed.",
    message: "Check your email for event details and any pre-work. We're looking forward to having you there.",
    secondaryCta: { text: "See All Events", href: "/events" },
  },
};

const defaultDetails: ThankYouConfig = {
  eyebrow: "Submission Received",
  heading: "Thank you.",
  message: "We've received your submission and will be in touch soon.",
};

const ThankYouPage = () => {
  const { type } = useParams<{ type: string }>();
  const details = (type && thankYouDetails[type]) || defaultDetails;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{details.heading} | Success369</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      <main
        className="flex-1 flex items-center justify-center px-6 pb-20"
        style={{ paddingTop: "var(--total-header-height)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              {details.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 text-glow"
          >
            {details.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-muted-foreground mb-12 font-light leading-relaxed"
          >
            {details.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-border/60 text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Link>
            {details.secondaryCta && (
              <CTAButton to={details.secondaryCta.href} variant="shimmer" size="md" icon={ArrowRight}>
                {details.secondaryCta.text}
              </CTAButton>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
