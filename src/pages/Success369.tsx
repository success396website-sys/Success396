import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Heart,
  Target,
  Network,
  Megaphone,
  Users,
  Star,
  Map,
  Flame,
  MessageSquare,
  CheckCircle,
  Award,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, fadeIn, scaleUp } from "@/lib/animations";

// Asset imports
import model369Video from "@/assets/Model 369.mp4";
import success369Video from "@/assets/Success 369.mp4";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const alignments = [
  { a: "Identity", b: "Perception" },
  { a: "Reality", b: "Potential" },
  { a: "Action", b: "Aspiration" },
  { a: "Values", b: "Visibility" },
  { a: "Behaviour", b: "Reputation" },
  { a: "Thought → Word", b: "Action Coherence" },
];

const catalysts = [
  { icon: Network, num: "01", title: "Networks", description: "Building the right relational ecosystem that amplifies your reach and impact." },
  { icon: Megaphone, num: "02", title: "Brand Expression", description: "Communicating who you are with clarity, consistency, and conviction." },
  { icon: Users, num: "03", title: "Core Team", description: "Surrounding yourself with aligned people who multiply your momentum." },
  { icon: Star, num: "04", title: "Success Formula", description: "Your unique architecture for repeatable, sustainable results." },
  { icon: Map, num: "05", title: "Territory", description: "Defining the domain where you operate with greatest leverage." },
  { icon: Flame, num: "06", title: "Purpose as Fuel", description: "Transforming meaning into the energy that sustains long-term effort." },
  { icon: MessageSquare, num: "07", title: "Communication", description: "Saying what matters, to whom it matters, in the way it lands." },
  { icon: CheckCircle, num: "08", title: "Commitment", description: "Converting intention into consistent daily action and decisive choice." },
  { icon: Award, num: "09", title: "Credibility", description: "Building the trust that turns visibility into genuine influence." },
];

const journeys = [
  {
    name: "MAYA",
    tagline: "Congruence",
    image: card2,
    href: "/program-maya",
    color: "from-accent/20 to-transparent",
  },
  {
    name: "GITA",
    tagline: "Clarity",
    image: card1,
    href: "/program-gita",
    color: "from-primary/20 to-transparent",
  },
  {
    name: "SARVAM",
    tagline: "Build",
    image: card3,
    href: "/program-sarvam",
    color: "from-primary/20 to-transparent",
  },
  {
    name: "SHAKTI",
    tagline: "Momentum",
    image: card4,
    href: "/program-shakti",
    color: "from-accent/20 to-transparent",
  },
];

const distinctions = [
  {
    side: "Others",
    points: ["Performance tactics", "Goal-setting frameworks", "Skill development", "Motivation"],
    muted: true,
  },
  {
    side: "Success369",
    points: ["Alignment before acceleration", "Identity as foundation", "Sustainable coherence", "Architecture, not tactics"],
    muted: false,
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const Success369Page = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>The Success369 Model | Clarity. Congruence. Catalysis.</title>
        <meta
          name="description"
          content="Discover the 3–6–9 Model: three pillars, six alignments, and nine catalytic forces — a complete architecture for sustainable success."
        />
      </Helmet>

      <Navbar />

      {/* ══════════════════════════════════════
          HERO — Full-screen video backdrop
      ══════════════════════════════════════ */}
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video background */}
        <motion.div
          style={{ y: heroParallax }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={model369Video} type="video/mp4" />
          </video>
        </motion.div>

        {/* Overlay — matches home hero-overlay */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        {/* Floating number accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {["3", "6", "9"].map((n, i) => (
            <motion.span
              key={n}
              className="absolute font-display font-black text-white/[0.04] select-none"
              style={{
                fontSize: "clamp(140px, 20vw, 320px)",
                left: `${10 + i * 33}%`,
                top: "50%",
                transform: "translateY(-50%)",
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            >
              {n}
            </motion.span>
          ))}
        </div>

        {/* Hero content — left-aligned, bottom-anchored like home */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                The 3–6–9 Model
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Success<span className="text-primary text-glow">369</span>{" "}—{" "}
              Clarity. Congruence. Catalysis.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Sustainable success is not a strategy. It is an architecture — built on three pillars, six alignments, nine catalytic forces.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/free-session" size="md" variant="shimmer">
                Take a Free Session
              </CTAButton>
              <CTAButton
                to="/programs"
                size="md"
                variant="outline"
                className="text-white hover:text-white border-white/20 hover:border-primary/50"
              >
                Explore Journeys
              </CTAButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-6 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          WHY 3–6–9? — Intro Statement
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[300px] -translate-x-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                The Foundation
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>

            <h2 className="mb-8">
              Why{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                3–6–9?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              In a world of noise, speed, and constant performance pressure, most people are not struggling because of lack of effort.
            </p>
            <p className="text-2xl md:text-3xl font-display font-bold text-foreground leading-snug">
              They are struggling because of{" "}
              <span className="text-primary italic">misalignment.</span>
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10">
              {[
                { num: "3", label: "Pillars", sub: "anchor the foundation" },
                { num: "6", label: "Alignments", sub: "protect internal coherence" },
                { num: "9", label: "Forces", sub: "activate sustainable momentum" },
              ].map(({ num, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/40 transition-all"
                >
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-primary text-glow">
                    {num}
                  </span>
                  <span className="font-bold text-base sm:text-lg text-foreground">{label}</span>
                  <span className="text-xs text-muted-foreground text-center">{sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLAR 1 — CLARITY
      ══════════════════════════════════════ */}
      <section className="section relative bg-card/10 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden">
                <img
                  src={card1}
                  alt="Clarity — knowing who you are"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl">
                <span className="text-primary font-display text-5xl font-extrabold leading-none">1</span>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Pillar One</p>
              </div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Zap size={12} />
                Pillar 1
              </span>

              <h2 className="mb-2">
                Clarity
              </h2>
              <p className="text-primary italic text-lg mb-6">Knowing Who You Are and What Matters</p>

              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Clarity answers three essential questions: <strong className="text-foreground">Identity</strong> — who am I beyond roles and expectations? <strong className="text-foreground">Purpose</strong> — what genuinely matters to me? <strong className="text-foreground">Context</strong> — where do I truly stand today?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-destructive/70 mb-3">Without Clarity</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Decisions feel heavy", "Effort scatters", "Direction shifts constantly"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">With Clarity</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Focus sharpens", "Trade-offs simplify", "Progress becomes intentional"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-foreground font-display font-bold text-xl">Clarity creates direction.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLAR 2 — CONGRUENCE + 6 Alignments
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-accent/5 blur-[120px] pointer-events-none -translate-x-1/3" />

        <div className="container-custom relative z-10">
          {/* Section header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Heart size={12} />
                Pillar 2
              </span>
              <h2 className="mb-2">Congruence</h2>
              <p className="text-primary italic text-lg mb-6">Aligning Intention with Behaviour</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Knowing what matters is not enough. You must live it. Congruence strengthens six critical alignments that determine whether your internal world matches how you show up externally.
              </p>
              <p className="text-foreground font-display font-bold text-xl">Congruence creates coherence.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden">
                <img
                  src={card2}
                  alt="Congruence — aligning intention with behaviour"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl">
                <span className="text-primary font-display text-5xl font-extrabold leading-none">2</span>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Pillar Two</p>
              </div>
            </motion.div>
          </div>

          {/* 6 Alignment cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                  The 6 Alignments
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {alignments.map(({ a, b }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="group p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-500 flex items-center gap-4"
                >
                  <span className="text-primary font-display font-extrabold text-2xl min-w-[2rem]">
                    {i + 1}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-foreground text-sm">{a}</span>
                    <motion.span
                      className="text-primary font-bold text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      ↔
                    </motion.span>
                    <span className="font-semibold text-foreground text-sm">{b}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* States comparison */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-destructive/70 mb-4">When Alignments Weaken</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {["Friction increases", "Trust erodes", "Energy drains"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">When They Strengthen</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {["Integrity stabilises", "Confidence deepens", "Progress becomes consistent"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLAR 3 — CATALYSIS + Video + 9 Forces
      ══════════════════════════════════════ */}
      <section className="section relative bg-card/10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="container-custom relative z-10">
          {/* Pillar Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                <Target size={12} />
                Pillar 3
              </span>
              <h2 className="mb-2">Catalysis</h2>
              <p className="text-primary italic text-lg mb-6">Turning Alignment into Real-World Momentum</p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Clarity and congruence prepare the ground. Catalysis activates movement. Nine catalytic forces determine whether alignment translates into visible, lasting impact.
              </p>
              <p className="text-foreground font-display font-bold text-xl">Catalysis creates momentum.</p>
            </motion.div>

            {/* Video embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-border/30">
                <video
                  src={success369Video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Catalysis in Action</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl">
                <span className="text-primary font-display text-5xl font-extrabold leading-none">3</span>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Pillar Three</p>
              </div>
            </motion.div>
          </div>

          {/* 9 Catalytic Forces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                The 9 Catalytic Forces
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h3 className="text-foreground">What Converts Alignment into Impact</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalysts.map(({ icon: Icon, num, title, description }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.7 }}
                className="group relative p-8 rounded-3xl bg-card/40 border border-border/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-500"
              >
                <span className="absolute top-4 right-6 font-display font-black text-[5rem] text-foreground/[0.04] group-hover:text-primary/[0.07] transition-colors duration-500 leading-none select-none">
                  {num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-base font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT MAKES 369 DISTINCT
      ══════════════════════════════════════ */}
      <section className="section bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-primary/4 blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                What Makes It Distinct
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2>
              Alignment before{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">
                acceleration.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most success models focus on performance. Success369 begins where others don't — with who you are before what you do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {distinctions.map(({ side, points, muted }, i) => (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`p-8 rounded-3xl border transition-all ${
                  muted
                    ? "bg-card/20 border-border/20 opacity-60"
                    : "bg-card/50 border-primary/30 shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-5 ${muted ? "text-muted-foreground" : "text-primary"}`}>
                  {side}
                </p>
                <ul className="space-y-3">
                  {points.map((pt) => (
                    <li key={pt} className={`flex items-start gap-3 text-sm ${muted ? "text-muted-foreground line-through decoration-muted-foreground/50" : "text-foreground"}`}>
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${muted ? "bg-muted-foreground/40" : "bg-primary"}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Timeless + Relevant today */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-card/30 border border-border/30"
            >
              <h3 className="mb-4">Why It Is Timeless</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Trends change. Technology evolves. Markets shift. But three things remain constant: human identity, human alignment, human momentum.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Individuals", "Leaders", "Teams", "Organisations"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-card/30 border border-border/30"
            >
              <h3 className="mb-4">Why It Is Relevant Today</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                We live in a performance-driven era of hyper-visibility, rapid scaling, and continuous comparison. The modern challenge is not ambition — it is integration.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Clarity in complexity", "Congruence in visibility", "Catalysis without burnout"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent/10 text-foreground text-xs font-semibold border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE FOUR JOURNEYS
      ══════════════════════════════════════ */}
      <section className="section relative bg-card/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                One Architecture. Multiple Doors.
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2>
              The Success369{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journeys
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              GITA, MAYA, SARVAM, and SHAKTI are independent applications of the 3–6–9 Model. Each applies the architecture in a different context. None is a prerequisite for another.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeys.map(({ name, tagline, image, href, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: i % 2 === 1 ? "48px" : "0px" }}
                className="group relative"
              >
                <Link to={href} className="block">
                  <div className="relative rounded-[2rem] overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${color} via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{tagline}</p>
                      <h3 className="text-white font-display font-extrabold text-2xl mb-3 leading-tight">{name}</h3>
                      <div className="flex items-center gap-2 text-white/60 text-xs font-medium group-hover:text-white/90 transition-colors">
                        <span>Explore</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GLOBAL CTA
      ══════════════════════════════════════ */}
      <GlobalCTA
        title={
          <h2 className="text-white">
            You do not need to master{" "}
            <span className="text-primary italic">the model to begin.</span>
          </h2>
        }
        description="Most people start with a decision, a tension, a sense that something could be more aligned. That is enough. The architecture works quietly in the background."
        ctaText="Begin with Clarity — Take a Free Session"
        ctaHref="/free-session"
        showPillars={true}
      />

      <Footer />
    </div>
  );
};

export default Success369Page;
