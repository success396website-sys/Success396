import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Target,
  Clock,
  GraduationCap,
  MessageSquare,
  UserCheck,
  Mic,
  Ear,
  Activity,
  Check,
  Calendar,
  Users,
  Award,
  Star,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import GlobalCTA from "@/components/GlobalCTA";
import CTAButton from "@/components/CTAButton";
import { fadeUp } from "@/lib/animations";
import { trackInitiateCheckout } from "@/lib/pixel";
import certificateImg from "@/assets/shakthi-certificate.jpg";
import avatarRihab from "@/assets/shakthi-new/testimonial-rihab.jpg";
import avatarAadhya from "@/assets/shakthi-new/testimonial-aadhya.jpg";
import avatarRavisankar from "@/assets/shakthi-new/testimonial-ravisankar.jpg";

const RAZORPAY = "https://pages.razorpay.com/shakti-unfiltered-voice";

/** Fired when a visitor clicks any Razorpay registration CTA */
const handleRegisterClick = () => trackInitiateCheckout("Shakthi — The Unfiltered Voice");

/* ─────────────────────────────────────────────  DATA  ───────────────────────────────────────────── */

const proof = [
  { icon: Target, title: "A specific skill", desc: "Each session targets one clearly identified area. You leave with a skill you can use on Monday — not a concept you'll forget by Friday." },
  { icon: Clock, title: "Focused, high-impact time", desc: "Two immersive sessions of three hours. Deep enough to create real change. Short enough to fit a genuinely busy schedule." },
  { icon: GraduationCap, title: "World-class material", desc: "SHAKTHI features curated content from Harvard ManageMentor — delivered the Success369 way: practical, personal, immediately useful." },
];

const facts = [
  { n: "6", l: "Total hours" },
  { n: "2", l: "Sessions × 3 hr" },
  { n: "15–25", l: "Per cohort" },
  { n: "₹3,000", l: "All inclusive" },
];

const modules = [
  { icon: MessageSquare, num: "01", title: "Communicate with clarity", sub: "Structure · message · vocabulary", desc: "Most people lose the room before they finish their first sentence. This module gives you a repeatable way to structure a message, choose the right words, and land your point — anchored by curated content from Harvard ManageMentor.", tags: ["Message structure", "Vocabulary", "Authentic expression", "Harvard ManageMentor content"] },
  { icon: UserCheck, num: "02", title: "Know your strengths", sub: "Speaker identity · personal style", desc: "Most professionals try to communicate like someone else. This module identifies what makes your communication style distinctly yours — and teaches you to deploy it with precision and confidence, rather than suppress it.", tags: ["Communication assessment", "Speaker identity", "Strength mapping", "Personal style"] },
  { icon: Mic, num: "03", title: "Conquer stage fright", sub: "Channel nerves into authority", desc: "Nerves aren't the enemy — unmanaged nerves are. Learn to channel anxiety into presence and authority. A board presentation, a client pitch, a high-stakes meeting — you'll leave equipped for the moment that matters.", tags: ["Anxiety management", "Presence under pressure", "High-stakes communication", "Board readiness"] },
  { icon: Ear, num: "04", title: "Master listening", sub: "The skill that changes everything", desc: "Listening is the most underrated communication skill — and the one that builds the most trust, shifts the most dynamics, and makes you a sharper, faster communicator in every context.", tags: ["Active listening", "Trust building", "Workplace dynamics", "Sharper responses"] },
  { icon: Activity, num: "05", title: "Presence & body language", sub: "Tone · posture · the room", desc: "What you say is only part of the message. Tone, posture, eye contact and pace decide whether people believe you. This module aligns your delivery with your intent, so you're experienced the way you mean to be.", tags: ["Tone & pace", "Body language", "Eye contact", "Congruence"] },
];

const outcomes = [
  { num: "01", title: "A clearer voice", desc: "A repeatable way to structure and deliver any message with confidence." },
  { num: "02", title: "Your communication map", desc: "A clear picture of your natural style, strengths, and where to deploy them." },
  { num: "03", title: "A take-home commitment", desc: "One specific, dated action you'll practise the moment the cohort ends." },
];

const whoFor = [
  { title: "Professionals stepping up", desc: "People moving into bigger rooms, harder conversations, and higher-stakes moments." },
  { title: "Ambitious early-career talent", desc: "Those who know they're capable of more and want the tools to prove it." },
  { title: "Founders & client-facing teams", desc: "Anyone whose results depend on being clearly understood and trusted." },
  { title: "Organisational cohorts", desc: "Teams who want a shared language for communicating with clarity and presence." },
];

const apart = [
  { num: "01", title: "Targeted, not generic", desc: "Each module goes deep on one skill — never a broad curriculum that skims everything." },
  { num: "02", title: "Identity-led", desc: "Shakthi starts from who you are — your natural style and strengths — not a template of who you “should” be." },
  { num: "03", title: "Focused & high-impact", desc: "Six hours of deep, immersive learning designed for people with full schedules." },
  { num: "04", title: "Application-first", desc: "Real practice, structured reflection and a take-home commitment — every single time." },
  { num: "05", title: "Practitioner-designed", desc: "Built by people with real-world experience in skill development and personal growth." },
  { num: "06", title: "Part of a bigger ecosystem", desc: "Shakthi sits within Success369, giving you a pathway for growth well beyond one session." },
];

const ladder = [
  { chip: "You are here", stage: "Skill", name: "Shakthi", desc: "Focused skill development — communication, presence, and more. One skill, one session, real change.", active: true },
  { chip: "Coming next", stage: "Alignment", name: "MAAYA", desc: "A structured alignment experience — identity, aspiration, and the capabilities your next chapter actually needs.", next: true },
  { chip: null, stage: "Mastery", name: "SARVAM", desc: "The premium experience for those ready to go all in on the life and impact they're building." },
];

const testimonials = [
  { img: avatarRihab, quote: "In advertising, I assumed I already communicated well. SHAKTHI showed me the gap between being heard and being understood — I walk into every room differently now.", name: "Rihab M Abou Zaki", role: "Media & Advertising · Portland, Oregon" },
  { img: avatarAadhya, quote: "I spend my days listening to others. SHAKTHI gave me language for my own voice — clearer, more present, and no longer afraid of the pause.", name: "Dr. Aadhya Kesav", role: "Clinical Psychologist · UAE" },
  { img: avatarRavisankar, quote: "Six focused hours changed how I open a conversation. I lead with clarity now — and it shows in every business room I step into.", name: "Ravisankar Menon", role: "VP, Business Development, Fingent · Connecticut" },
];

const investIncludes = [
  "Access to both live sessions (6 hours)",
  "Harvard ManageMentor® content included",
  "Certificate of completion (issued on completion)",
  "Communication Strength Assessment",
  "Personal speaker identity profile",
  "Proven ways to conquer performance anxiety",
];

const steps = [
  { n: "1", title: "Reserve your seat", desc: "Book through the secure ₹3,000 payment link. That's everything in." },
  { n: "2", title: "Get your details", desc: "We send your cohort dates and the joining link to your inbox." },
  { n: "3", title: "Show up & practise", desc: "Two focused 3-hour sessions with a small, motivated group." },
  { n: "4", title: "Walk away changed", desc: "Leave with a sharper skill and a dated commitment to keep going." },
];

const faqs = [
  { question: "Who is SHAKTHI really for?", answer: "Anyone on a growth path — regardless of role, seniority, or industry. If you want to communicate with more clarity and presence, you're in the right room." },
  { question: "How much time does it take?", answer: "Two sessions of three hours each — six focused hours total. Designed to create real change while respecting a genuinely busy calendar." },
  { question: "What's included in the ₹3,000?", answer: "Everything: both live sessions, curated Harvard ManageMentor content, structured reflection, and your personal take-home commitment. No hidden extras." },
  { question: "What's the Harvard ManageMentor connection?", answer: "Shakthi features curated content from Harvard ManageMentor — the professional skill development platform of Harvard Business School. It is not a Harvard programme, certification, or endorsement." },
  { question: "Is it online or in person?", answer: "Sessions run as live cohorts, available online across India and the UAE, and can be adapted for in-person delivery for organisational groups." },
];

/* reusable section header */
const SectionHead = ({ eyebrow, title, sub, center }: { eyebrow: string; title: React.ReactNode; sub?: string; center?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-12 md:mb-16 ${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
  >
    <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">{eyebrow}</span>
    <h2 className="mb-0">{title}</h2>
    {sub && <p className="text-muted-foreground text-lg mt-4">{sub}</p>}
  </motion.div>
);

const grad = "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent";

/* ─────────────────────────────────────────────  PAGE  ───────────────────────────────────────────── */

const ShakthiNew = () => {
  const [activeMod, setActiveMod] = useState(0);
  const mod = modules[activeMod];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Shakthi — Find your voice. Command the room. | Success369</title>
        <meta
          name="description"
          content="Shakthi by Success369: a focused communication skill-development programme for ambitious individuals. 3 HR × 2 sessions. Cohorts of 15–25. ₹3,000 all inclusive. Harvard ManageMentor content included."
        />
        <link rel="canonical" href="https://success369.org/shakti-unfiltered-voice" />
      </Helmet>

      <Navbar />

      {/* ════════ HERO ════════ */}
      <section
        className="relative w-full bg-black flex items-center overflow-hidden"
        style={{ paddingTop: "var(--total-header-height)", minHeight: "100vh" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 30%, hsl(324 100% 46% / 0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 85%, hsl(11 97% 72% / 0.12) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="absolute inset-0 hero-overlay z-[1]" />

        <div className="relative z-10 container-custom py-20 md:py-28 w-full">
          <div className="max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                <Sparkles size={12} /> Success369 · Skill Development Series
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-white leading-[1.05] mb-6"
            >
              Find your voice.
              <span className={`block ${grad} text-glow`}>Command the room.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="max-w-xl text-base sm:text-xl text-white/85 font-light mb-8"
            >
              A focused communication programme for ambitious individuals who want to be heard, understood, and
              remembered — in every meeting, pitch, and room they walk into.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["3 HR × 2 sessions", "Cohorts of 15–25", "₹3,000 all inclusive"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/70 border border-white/15 bg-white/5 px-3.5 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {p}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <CTAButton href={RAZORPAY} target="_blank" rel="noopener noreferrer" variant="shimmer" size="md" onClick={handleRegisterClick}>
                Book your seat
              </CTAButton>
              <CTAButton
                href="#programme"
                variant="outline"
                size="md"
                icon={null}
                className="text-white border-white/25 hover:text-white hover:border-primary/60"
              >
                See the programme
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ TICKER BAND ════════ */}
      <div className="bg-gradient-to-r from-primary to-accent py-8 px-6 text-center">
        <p className="text-white text-lg md:text-2xl font-display font-bold tracking-wide uppercase">
          One skill &nbsp;·&nbsp; One session &nbsp;·&nbsp; Real change
        </p>
      </div>

      {/* ════════ WHY SHAKTHI ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom">
          <SectionHead eyebrow="Why Shakthi works" title="Three things every cohort walks away with" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proof.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 rounded-3xl bg-card/60 border border-border/40 hover:border-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <p.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FACTS ════════ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead eyebrow="The format" title="Built for the pace of a real, ambitious life" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facts.map((f, i) => (
              <motion.div
                key={f.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 sm:p-8 rounded-2xl bg-card/40 border border-border/30 text-center"
              >
                <div className={`font-display text-4xl sm:text-5xl font-extrabold ${grad} mb-2`}>{f.n}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{f.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROGRAMME — MODULE EXPLORER ════════ */}
      <section id="programme" className="section bg-card/30 scroll-mt-24">
        <div className="container-custom">
          <SectionHead
            eyebrow="The programme"
            title={<>Five shifts in how<br className="hidden sm:block" /> you communicate</>}
            sub="Each module builds on the last — from how you structure a message to how you hold a room. Tap any module to explore what shifts in you."
          />
          <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-6">
            <div className="flex flex-col gap-3">
              {modules.map((m, i) => {
                const active = i === activeMod;
                return (
                  <button
                    key={m.num}
                    onClick={() => setActiveMod(i)}
                    className={`flex items-center gap-4 text-left rounded-2xl p-4 border transition-all ${
                      active
                        ? "border-transparent bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20"
                        : "border-border/40 bg-card/50 hover:border-primary/30"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-10 h-10 rounded-xl grid place-items-center font-display font-extrabold text-sm ${
                        active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {m.num}
                    </span>
                    <span>
                      <span className={`block text-sm font-bold leading-tight ${active ? "text-white" : "text-foreground"}`}>
                        {m.title}
                      </span>
                      <span className={`block text-xs mt-0.5 ${active ? "text-white/80" : "text-muted-foreground"}`}>
                        {m.sub}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeMod}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-card/60 border border-border/40 p-8 sm:p-10"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <mod.icon size={22} className="text-primary" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Module {mod.num}</span>
              <h3 className="text-2xl md:text-3xl mt-2 mb-4">{mod.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{mod.desc}</p>
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ HARVARD ════════ */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] border border-primary/20 bg-card/50 p-8 sm:p-12 overflow-hidden"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
                <Star size={14} /> Harvard ManageMentor content included
              </span>
              <h2 className="mb-5">The gold standard, made practical</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shakthi features curated content from Harvard ManageMentor — the professional skill development platform
                of Harvard Business School — woven into a live, facilitated experience so the thinking actually changes
                how you show up.
              </p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed">
                Success369 holds a licence to incorporate Harvard ManageMentor content. This is not a Harvard programme,
                certification, or endorsement.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
                <img src={certificateImg} alt="Sample Harvard ManageMentor certificate of completion" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-primary">
                <Award size={14} /> Issued on completion
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ OUTCOMES ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom">
          <SectionHead
            eyebrow="What you walk away with"
            title="Application, not just concepts"
            sub="Every session includes real practice, structured reflection, and a personal take-home commitment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative p-8 rounded-3xl bg-card/50 border border-border/40"
              >
                <span className="font-display font-black text-5xl text-primary/15">{o.num}</span>
                <h3 className="text-lg mt-3 mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHO IT'S FOR ════════ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead
            eyebrow="Who it's for"
            title="For anyone on a growth path"
            sub="Shakthi isn't reserved for senior titles. It's for anyone hungry to communicate better and show up more effectively — at work and in life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoFor.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card/40 border border-border/30 hover:border-primary/30 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check size={15} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">{w.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ABOUT + WHAT SETS IT APART ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom">
          <SectionHead eyebrow="About Shakthi" title="Growth is the right of anyone willing to work for it" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-14">
            The name <strong className="text-foreground">Shakthi</strong> reflects a simple belief: growth isn't about
            becoming someone else. It's about unlocking what is already inside you — and directing it with skill and
            intention. Shakthi is a skill development programme under the Success369 framework, built for ambitious
            individuals who want to close specific gaps in how they communicate, present themselves, and show up in the
            world — not through long, drawn-out training, but through short, focused sessions that create real, visible
            change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apart.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="p-7 rounded-2xl bg-card/50 border border-border/40 hover:border-primary/30 transition-all"
              >
                <div className="font-display font-extrabold text-primary text-xl mb-3">{a.num}</div>
                <h4 className="text-base font-semibold mb-2">{a.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PATHWAY ════════ */}
      <section className="section">
        <div className="container-custom">
          <SectionHead
            eyebrow="The Success369 pathway"
            title="Shakthi is where it begins"
            sub="A clear progression — from sharpening a specific skill, to aligning your whole direction."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ladder.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`p-8 rounded-3xl border transition-all ${
                  r.active
                    ? "bg-primary/5 border-primary/40 shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)]"
                    : "bg-card/40 border-border/30"
                }`}
              >
                {r.chip && (
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                      r.active ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {r.chip}
                  </span>
                )}
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-1">{r.stage}</span>
                <h3 className="text-2xl mb-3">{r.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom">
          <SectionHead eyebrow="In their words" title={<>What SHAKTHI <span className={grad}>changed for them</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col gap-5 p-8 rounded-3xl bg-card/50 border border-border/40 hover:border-primary/30 transition-all"
              >
                <Quote size={28} className="text-primary" />
                <blockquote className="text-foreground/90 leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="flex items-center gap-3 mt-auto">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-primary/30"
                  />
                  <span>
                    <span className="block text-sm font-bold leading-tight">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ENROL / INVESTMENT ════════ */}
      <section id="enrol" className="section scroll-mt-24">
        <div className="container-custom">
          <SectionHead eyebrow="Enrol" title="Two sessions. One real change." center />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-0 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-10"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Your investment</div>
              <div className="font-display text-5xl font-extrabold mb-1">₹3,000</div>
              <div className="text-sm text-muted-foreground mb-6">per seat · inclusive of all materials</div>
              <ul className="space-y-3">
                {investIncludes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="min-w-0 rounded-3xl border border-border/40 bg-card/60 p-8 sm:p-10 flex flex-col"
            >
              <h3 className="text-2xl mb-3">Reserve your seat</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Cohorts run as small live groups, online across India &amp; the UAE. Pay once — that's everything in.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Calendar, t: "Two live sessions · 3 hours each", s: "Scheduled with your cohort" },
                  { icon: Users, t: "15–25 participants", s: "Kept small for real practice depth" },
                ].map((x) => (
                  <div key={x.t} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <x.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{x.t}</div>
                      <div className="text-xs text-muted-foreground">{x.s}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <CTAButton href={RAZORPAY} target="_blank" rel="noopener noreferrer" variant="shimmer" size="md" className="w-full" onClick={handleRegisterClick}>
                  Book your seat — ₹3,000
                </CTAButton>
                <p className="text-xs text-muted-foreground/70 text-center mt-4">Secure payment via Razorpay · India &amp; the UAE.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS ════════ */}
      <section className="section bg-card/30">
        <div className="container-custom">
          <SectionHead eyebrow="How it works" title="From curious to confident, in four steps" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="p-7 rounded-2xl bg-card/40 border border-border/30"
              >
                <div className={`font-display text-4xl font-extrabold ${grad} mb-4`}>{s.n}</div>
                <h4 className="text-base font-semibold mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ (shared) ════════ */}
      <FAQSection
        title="QUESTIONS, ANSWERED"
        description="Everything you need to know before you book your seat in the next Shakthi cohort."
        items={faqs}
      />

      {/* ════════ CLOSING CTA ════════ */}
      <GlobalCTA
        kind="button"
        title={<h2 className="text-white">One skill. One session. Real change.</h2>}
        description="The next cohort is filling — secure your seat in about two minutes."
        ctaText="Book your seat"
        ctaHref={RAZORPAY}
        variant="shimmer"
        showPillars
        id="book"
        onCtaClick={handleRegisterClick}
      />

      <Footer />
    </div>
  );
};

export default ShakthiNew;
