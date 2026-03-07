import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Sparkles, Zap, Search, Route, Users, Target, Clock, Globe, Shield } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shaktiVideo from "@/assets/shakti.mp4";
import shakti1 from "@/assets/Shakti/1.png";
import shakti2 from "@/assets/Shakti/2.png";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations



const ProgramShakti = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>SHAKTI — Activating Aligned Momentum | Success369</title>
        <meta name="description" content="SHAKTI is for leaders and teams ready to execute. Translate alignment into real-world strength with focused activation." />
      </Helmet>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={shaktiVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — left-aligned, bottom-anchored */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                Success369: ACTIVATE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Activating{" "}
              <span className="text-primary text-glow italic">Aligned Momentum</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Clarity without movement creates frustration. Alignment without activation creates delay. SHAKTI exists to turn alignment into impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/apply/shakti" size="md" variant="shimmer">
                Apply for SHAKTI
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- WHO IT'S FOR (Foundation Style) --- */}
      <section className="section bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 md:mb-20 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Translation to Impact
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who is SHAKTI For?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              SHAKTI is for those who already have clarity and alignment — and are ready to move. This is an accelerator, not a starting point.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: shakti1,
                title: "Leaders & Teams in Motion",
                description: "Leaders strengthening presence and communication, and teams seeking alignment and execution rhythm. Translating purpose into performance.",
                step: "01",
              },
              {
                image: shakti2,
                title: "Journey Integration",
                description: "Individuals and organisations emerging from MAYA, GITA, or SARVAM who need to translate their insights into real-world capability.",
                step: "02",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginTop: (index % 2 === 1) ? "100px" : "0px" }}
                className="group relative"
              >
                <span className="absolute -top-16 -right-8 font-display text-[10rem] md:text-[14rem] font-black text-foreground/[0.05] dark:text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.08] group-hover:-translate-y-8 group-hover:-translate-x-4">
                  {card.step}
                </span>

                <div className="relative rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                  <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  </div>

                  <div className="p-10 md:p-12">
                    <motion.div className="w-16 h-1 bg-primary/20 mb-8 overflow-hidden rounded-full">
                      <motion.div className="h-full bg-primary" initial={{ x: "-100%" }} whileInView={{ x: "0%" }} transition={{ duration: 1 }} />
                    </motion.div>
                    <h3 className="mb-4 text-2xl font-bold text-foreground tracking-tight">{card.title}</h3>
                    <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT YOU GAIN --- */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">What You Gain</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Movement becomes clean and confident — not forced."</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sharper Execution", desc: "Translate your clarity into precise action.", icon: Target },
              { title: "Stronger Influence", desc: "Build credibility through alignment and presence.", icon: Sparkles },
              { title: "Team Alignment", desc: "Create execution rhythm without corporate jargon.", icon: Users },
              { title: "Usable Tools", desc: "Practical, immediately applicable activation frameworks.", icon: Shield }
            ].map((gain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-card/40 border border-border/30 hover:border-primary/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500 group-hover:text-white">
                  <gain.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3">{gain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{gain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT IS SHAKTI? (Process) --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Activation Journey</span>
              <h2 className="mb-8">
                Insight into execution, <br />
                <span className="text-primary italic">alignment into influence.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                SHAKTI is a focused activation journey rooted in the Catalysis pillar of Success369. It is not about working harder—it is about directing energy where it matters most.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, label: "3–6 hours per module" },
                  { icon: Users, label: "Individual or Team" },
                  { icon: Globe, label: "Online or in-person" },
                  { icon: Zap, label: "Catalysis Rooted" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200"
                  alt="Activation Session"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">SHAKTI</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">Converting intention into outcomes through catalysis.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection 
        items={[
          {
            question: "What Is SHAKTI?",
            answer: "SHAKTI is a set of focused, applied activation journeys rooted in the Catalysis pillar of the Success369 model. It strengthens the specific capabilities that convert:\n• Insight into execution\n• Alignment into influence\n• Intention into outcomes\n\nSHAKTI is not about adding more effort. It is about directing energy where it matters most. In the meaning economy, momentum is not created by force—it is created by coherent activation."
          },
          {
            question: "Who SHAKTI Is For",
            answer: "SHAKTI is designed for individuals and systems that already have a degree of clarity and alignment, and are now asking: How do we move faster—without losing coherence?\n\nSHAKTI is ideal for:\n• Leaders strengthening presence, credibility, or communication\n• Teams seeking trust, alignment, and execution rhythm\n• Organisations translating purpose into performance\n• Individuals emerging from GITA, MAYA, or SARVAM\n• Institutions needing targeted capability activation\n\nSHAKTI is not a starting point. It is an accelerator."
          },
          {
            question: "What You Will Experience in SHAKTI",
            answer: "Participants in SHAKTI typically experience:\n• Sharper execution — reduced friction between intent and action\n• Stronger influence — credibility, communication, and presence\n• Aligned teams — clarity of roles, trust, and shared direction\n• Practical tools — immediately applicable in real contexts\n• Sustainable momentum — progress that compounds, not burns out\n\nSHAKTI creates movement that feels clean, confident, and grounded."
          },
          {
            question: "How SHAKTI Works",
            answer: "SHAKTI is delivered through modular activation engagements. Each SHAKTI engagement is focused on a specific capability, context-aware and applied, and designed for clarity, relevance, and action.\n\nModules can be:\n• Experienced independently\n• Combined into short activation journeys\n• Integrated within MAYA or SARVAM\n• Delivered to individuals, teams, or organisations\n\nFormats are flexible and designed around real-world constraints."
          },
          {
            question: "Examples of SHAKTI Activation Areas",
            answer: "Depending on context and need, SHAKTI may focus on areas such as:\n• Clarity-Led Communication\n• Credible Leadership Presence\n• Aligned Teams & Trust Networks\n• Authentic Personal Brand Expression\n• Purpose-Driven Performance Systems\n\nEach engagement begins with understanding where alignment already exists—and then activating it."
          },
          {
            question: "Duration & Format",
            answer: "• Duration: 3–6 hours per module (or combined engagements)\n• Format: Online or in-person\n• Delivery: Individual, team, or organisational setting\n\nSHAKTI respects time while creating real movement."
          },
          {
            question: "Where SHAKTI Fits in the Success369 Journeys",
            answer: "SHAKTI can be experienced as a standalone activation, as a bridge between journeys, as an embedded activation layer within SARVAM, or as an organisational engagement.\n\nIt does not replace the core journeys. It amplifies them."
          },
          {
            question: "Activate What Is Already Aligned",
            answer: "If clarity is present and readiness exists, SHAKTI helps you move—cleanly and confidently."
          }
        ]}
      />
      
      <GlobalCTA
        title={
          <h2 className="text-white">
            Activate your <span className="text-primary italic">aligned momentum.</span>
          </h2>
        }
        description="Book a free session to explore how SHAKTI can accelerate impact for you, your team, or your organisation."
        ctaText="Apply for SHAKTI"
        ctaHref="/apply/shakti"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramShakti;