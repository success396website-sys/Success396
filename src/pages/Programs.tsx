import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ArrowRight, Compass, Users, Building2, Sparkles,
  Eye, Layers, Zap, Sun, ChevronRight, Target, Shield, Pause, Quote, Heart, Coffee, MoveDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import JourneySection from "@/components/JourneySection";
import VideoCardsSection from "@/components/VideoCardsSection";
import journeyVideo from "@/assets/Journey op 1.mp4";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations

const pathwaySteps = [
  { icon: Target, label: "Align", description: "Phase 1: MAYA", color: "bg-primary/20" },
  { icon: Pause, label: "Pause", description: "Phase 2: GITA", color: "bg-primary/20" },
  { icon: Building2, label: "Build", description: "Phase 3: SARVAM", color: "bg-primary/20" },
  { icon: Zap, label: "Activate", description: "Phase 4: SHAKTI", color: "bg-primary/20" },
];

const programCards = [
  {
    icon: Layers,
    title: "MAYA",
    subtitle: "Realigning Unseen Patterns",
    description: "For those progressing outwardly but feeling inner friction. Dissolve invisible cycles.",
    href: "/program-maya",
    outcome: "Coherence, focus, and grounded momentum.",
    cta: "Explore the Unseen",
    phase: "Phase 1"
  },
  {
    icon: Eye,
    title: "GITA",
    subtitle: "Clarity Before Action",
    description: "For decision points where perspective matters. Witness your direction before moving forward.",
    href: "/program-gita",
    outcome: "Clear direction and confident next steps.",
    cta: "Begin Your Clarity",
    phase: "Phase 2"
  },
  {
    icon: Shield,
    title: "SARVAM",
    subtitle: "Architecting Sustainable Success",
    description: "For individuals ready to build long-term value. Integrate identity, work, and legacy.",
    href: "/program-sarvam",
    outcome: "A stable success architecture that endures.",
    cta: "Begin the Architecture",
    phase: "Phase 3"
  },
  {
    icon: Sun,
    title: "SHAKTI",
    subtitle: "Activating Aligned Momentum",
    description: "For leaders and teams ready to execute. Translate alignment into real-world strength.",
    href: "/program-shakti",
    outcome: "Sharper execution without losing alignment.",
    cta: "Activate Momentum",
    phase: "Phase 4"
  },
];

const Programs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground/90 selection:bg-primary/30 overflow-x-hidden">
      <Helmet>
        <title>Programs — Success369 Journeys</title>
        <meta name="description" content="Explore the four phases of Success369 Journeys: MAYA, GITA, SARVAM, and SHAKTI — structured growth experiences for real decisions and transitions." />
      </Helmet>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-background/90">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={journeyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          {/* Hero Overlay System (matched to home page) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
        </div>

        <motion.div 
          style={{ scale: heroScale }}
          className="relative container-custom w-full text-left pb-28 sm:pb-32 z-10"
        >
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
            >
              Building Success for the Meaning Economy
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-4 sm:mb-6 text-glow text-white"
            >
              Build Success <br />
              <span className="italic text-primary text-glow">That Is Aligned.</span>
            </motion.h1>

            <motion.div custom={2} variants={fadeUp} className="max-w-2xl mb-12 space-y-6 text-left">
              <p className="text-lg sm:text-xl text-white/90 font-light">
                In a world driven by speed and performance, many people are <span className="text-white font-medium">successful — but not fulfilled.</span>
                <br />
                Others are <span className="text-white font-medium">capable — but unclear.</span>
              </p>
              <p className="text-base sm:text-lg leading-relaxed font-light text-white/70 italic">
                Success369 Journeys are designed to align who you are, what you value, and how you act — so success grows with clarity, confidence, and meaning.
              </p>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row justify-start items-center gap-6 mb-16">
              <CTAButton href="#journeys-intro" size="lg" variant="shimmer" className="px-10">
                Begin Your Journey
              </CTAButton>
              <CTAButton to="/free-session" size="lg" variant="outline" icon={null as any} className="px-10 border-white/10 text-white hover:text-white hover:border-primary/50">
                Take a Free Session
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="flex justify-center text-primary/20"
            >
              <MoveDown className="animate-bounce" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- WHAT ARE SUCCESS369 JOURNEYS? --- */}
      <section id="journeys-intro" className="section overflow-hidden bg-card/60 backdrop-blur-md border-y border-border/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-8 bg-primary/60" />
                  <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                    Ready to Transition?
                  </p>
                  <span className="h-[1px] w-8 bg-primary/60" />
                </div>
                <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  What Are <br />
                  <span className="italic">Success369 Journeys?</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Structured, guided growth experiences that support real decisions and real transitions — across life, career, leadership, and enterprise.
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  {["From uncertainty to clarity", "From misalignment to coherence", "From effort to meaningful momentum"].map((t, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                      <span className="text-foreground/70 group-hover:text-foreground transition-colors text-base">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="p-10 rounded-[3rem] bg-secondary/30 border border-border/50 backdrop-blur-xl relative"
            >
              <Quote size={50} className="text-primary/10 absolute -top-8 -left-8" />
              <div className="space-y-6 relative z-10">
                <p className="font-display text-2xl sm:text-3xl italic font-light leading-snug text-foreground/90">
                  "These are not courses. They are journeys designed around readiness and responsibility."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-[1px] w-12 bg-primary/30" />
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-60">The Success369 Methodology</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/[0.01] rounded-[3rem] -z-10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE PATHWAY --- */}
      <section className="section-lg overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                The Architectural Flow
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">The Success369 Pathway</h2>
            <div className="h-[1px] w-32 bg-primary/30 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {pathwaySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="relative text-center group"
              >
                {/* Background Number Pattern */}
                <span className="absolute top-0 left-12 font-display text-7xl font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4">
                  0{i + 1}
                </span>

                <div className="relative w-24 h-24 mx-auto rounded-3xl bg-secondary/30 border border-border/50 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 z-10">
                  <step.icon size={32} className="text-primary/60 group-hover:text-primary transition-all duration-500" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground uppercase tracking-wider group-hover:text-primary transition-colors relative z-10">{step.label}</h3>
                <p className="text-muted-foreground text-[9px] font-bold tracking-[0.3em] uppercase transition-opacity relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION (Who It's For) --- */}
      <JourneySection />
 
      {/* --- SHOWCASE SECTION (The Programs) --- */}
      <VideoCardsSection />


      {/* --- FINAL CONVERSION --- */}
      <GlobalCTA
        title={
          <h2 className="text-white">
            Begin Your <br /><span className="italic text-primary text-glow">Journey.</span>
          </h2>
        }
        description="If you’re unsure where to start, begin with a conversation. Understand your context. See your options clearly. Decide with confidence."
        ctaText="Book a Session"
        ctaHref="/free-session"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Programs;