import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Sparkles, Search, Route, Users, Target, Zap, Clock, Globe } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mayaVideo from "@/assets/maya.mp4";
import maya1 from "@/assets/Maya Imgs/1.png";
import maya2 from "@/assets/Maya Imgs/2.png";
import maya3 from "@/assets/1.png";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations



const ProgramMaya = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>MAYA — Realigning Unseen Patterns | Success369</title>
        <meta name="description" content="MAYA is for those progressing outwardly but feeling inner friction. Dissolve invisible cycles and realign for coherent, sustainable momentum." />
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
            <source src={mayaVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — left-aligned, bottom-anchored */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                Success369: ALIGN
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Discover Your <span className="text-primary text-glow italic">True Direction</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Some people are not unclear. They are misaligned. MAYA is designed to help you realign the unseen patterns shaping your decisions, behaviour, and momentum.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/apply/maya" size="md" variant="shimmer">
                Begin the MAYA Journey
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- WHAT YOU GAIN --- */}
      <section className="section relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">What You Gain</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Progress begins to feel lighter — not forced."</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Unseen Awareness", desc: "Recognition of hidden patterns driving your choices.", icon: Search },
              { title: "Release", desc: "Freedom from misalignment and inherited definitions of success.", icon: Zap },
              { title: "Inner Coherence", desc: "A deeper sense of stability and internal alignment.", icon: Layers },
              { title: "Renewed Momentum", desc: "Focused, meaningful progress that feels sustainable.", icon: Route }
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
                Misalignment to Coherence
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who is MAYA For?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              For individuals who are progressing — but feel something is off. This is for inflection moments, not crisis moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: maya1,
                title: "Successful but Not Settled",
                description: "You've achieved the goals, but the satisfaction is fleeing. You experience growth without meaning and struggle to live your clarity consistently.",
                step: "01",
              },
              {
                image: maya2,
                title: "Persistent Inner Friction",
                description: "Despite outer progress, you feel a constant internal resistance. You find yourself repeating loops of overworking, overthinking, or overcommitting.",
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

      {/* --- WHAT IS MAYA? (Process) --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Realignment</span>
              <h2 className="mb-4">Sustainable Success</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                MAYA is a guided realignment journey. It doesn't ask you to slow down for the sake of it—it asks you to align so that your momentum becomes sustainable and meaningful.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, label: "Guided sessions" },
                  { icon: Users, label: "1:1 or small cohort" },
                  { icon: Globe, label: "Success369 Facilitator" },
                  { icon: Target, label: "Refined Ambition" }
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
                  src={maya3}
                  alt="Realignment Session"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">MAYA</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">Seeing and realigning the unseen drivers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection 
        items={[
          {
            question: "What exactly is MAYA?",
            answer: "MAYA is a 3-month guided realignment journey. It helps you see the hidden patterns influencing your choices — habits, pressures, expectations, silent definitions of success.\nWhen these remain unseen, they quietly control you. MAYA brings them to light. Once you see clearly, you choose differently."
          },
          {
            question: "Who is MAYA for?",
            answer: "MAYA is not just for senior professionals. It is for:\n• Early professionals stepping into responsibility\n• Graduates entering demanding paths\n• Homemakers ready to restart with clarity\n• Founders building from zero\n• Mid-career leaders navigating growth\n• Individuals who feel capable but unsettled\n\nFrom metros to small towns to villages. From first-generation dreamers to experienced builders. If something inside you says, “This is not fully aligned,” MAYA is for you."
          },
          {
            question: "What will I experience during MAYA?",
            answer: "You will:\n• Identify patterns driving your decisions\n• Understand what is draining your energy\n• Let go of outdated expectations\n• Align your values and daily behaviour\n• Build a clear, practical action plan\n• Implement it with structured support\n\nYou are not left with theory. You are supported until change becomes stable."
          },
          {
            question: "How does the journey work?",
            answer: "MAYA runs for 3 months. You receive:\n• Deep 1:1 guided sessions\n• Structured reflection exercises\n• Ongoing support and handholding\n• A clear realignment roadmap\n• Implementation check-ins\n\nIt follows the Success369 framework: Clarity → Congruence → Catalysis. See clearly. Align consciously. Move forward naturally."
          },
          {
            question: "Why not just fix productivity or time management?",
            answer: "Because surface fixes do not solve root misalignment. When patterns stay hidden:\nEffort increases. Satisfaction decreases. Progress feels heavy.\nWhen alignment returns:\nDecisions simplify. Energy returns. Momentum feels natural. MAYA works at the root."
          },
          {
            question: "Do I get personal support?",
            answer: "Yes. You work directly with a dedicated Success369 Coach. Not automated content. Not passive learning. Real conversation. Real structure. Real accountability."
          },
          {
            question: "What happens after MAYA?",
            answer: "You may:\n• Continue independently with clarity\n• Activate SHAKTI for execution\n• Or step into SARVAM for long-term design\n\nThere is no pressure to continue. MAYA stands complete on its own."
          }
        ]}
      />
      
      <GlobalCTA
        title={
          <h2 className="text-white">
            Begin Your <br /><span className="italic text-primary text-glow">MAYA Journey.</span>
          </h2>
        }
        description="Book your MAYA journey and begin the process of internal alignment and coherence."
        ctaText="Begin the MAYA Journey"
        ctaHref="/apply/maya"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramMaya;
