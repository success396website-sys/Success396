import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Sparkles, Shield, Search, Route, Users, Target, Clock, Globe } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sarvamVideo from "@/assets/sarvam.mp4";
import sarvam1 from "@/assets/Sarvam/1.png";
import sarvam2 from "@/assets/Sarvam/2.png";
import { fadeUp } from "@/lib/animations";
import sarvam3 from "@/assets/website.1.jpeg";

// fadeUp imported from @/lib/animations



const ProgramSarvam = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>SARVAM — Architecting Sustainable Success | Success369</title>
        <meta name="description" content="SARVAM is for leaders ready to build long-term value. Integrate identity, work, and legacy into a stable success architecture that endures." />
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
            <source src={sarvamVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — left-aligned, bottom-anchored */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                Success369: BUILD
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              The Architecture for{" "}
              <span className="text-primary text-glow italic">Sustainable Success</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Some seek clarity. Some seek realignment. SARVAM is for those ready to build integrated, stable, and enduring success across time and responsibility.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/apply/sarvam" size="md" variant="shimmer">
                Apply for SARVAM
              </CTAButton>
              <CTAButton
                to="/#newsletter"
                size="md"
                variant="outline"
                className="text-white hover:text-white border-white/20 hover:border-primary/50"
              >
                Speak with Us
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
                Legacy-Level Responsibility
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who is SARVAM For?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              SARVAM is for individuals carrying significant responsibility and ready for long-term alignment across all dimensions of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: sarvam1,
                title: "Leaders at Inflection Points",
                description: "Senior leaders, CXOs, and founders who are done with incremental improvement and are ready for the complete architecture of sustainable success.",
                step: "01",
              },
              {
                image: sarvam2,
                title: "Stepping into Legacy",
                description: "Professionals stepping into legacy-level responsibility who need to align identity, leadership, and influence into a coherent, enduring structure.",
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
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Success is a complete system — refined over time."</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Identity Clarity", desc: "Deep clarity beyond roles and titles.", icon: Search },
              { title: "Strategic Alignment", desc: "Coherence across life and leadership.", icon: Target },
              { title: "Decision Stability", desc: "Long-term stability in significant choices.", icon: Shield },
              { title: "Sustainable Momentum", desc: "Balanced progress that compounds naturally.", icon: Route }
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

      {/* --- WHAT IS SARVAM? (Process) --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Living Architecture</span>
              <h2 className="mb-8">
                Building success that <br />
                <span className="text-primary italic">actually lasts.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                SARVAM approaches success as a complete system—aligning identity, leadership, work, relationships, and financial direction. It is about building conditions where outcomes endure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, label: "12-month journey" },
                  { icon: Users, label: "Dedicated 1:1 engagement" },
                  { icon: Globe, label: "Hybrid format" },
                  { icon: Shield, label: "Living Architecture" }
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
                  src={sarvam3}
                  alt="Success Architecture"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">SARVAM</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">The complete architecture for enduring outcomes.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection 
        items={[
          {
            question: "What Is SARVAM?",
            answer: "SARVAM is a long-term, highly personalised success architecture journey. It approaches success as a whole system—personal identity, professional direction, leadership presence, relationships, influence, and financial stability.\n\nRather than fixing isolated problems, SARVAM helps you design a coherent life and leadership structure where growth compounds naturally. In the meaning economy, success is no longer measured only by achievement. It is measured by coherence, continuity, and impact."
          },
          {
            question: "Who SARVAM Is For",
            answer: "SARVAM is designed for individuals who carry significant responsibility and are ready for long-term alignment. It is especially suited for:\n• Senior leaders and CXOs\n• Entrepreneurs and founders\n• Business owners and professionals at major inflection points\n• Individuals transitioning into higher responsibility or legacy roles\n\nSARVAM is not for experimentation. It is for commitment."
          },
          {
            question: "What You Will Experience in SARVAM",
            answer: "Participants in SARVAM typically experience:\n• Deep identity clarity — understanding who you are beyond roles and titles\n• Strategic life alignment — coherence across personal, professional, and social dimensions\n• Decision stability — fewer reactive choices, greater long-long-term confidence\n• Sustainable momentum — growth that does not come at the cost of balance or integrity\n• A personal success architecture — designed, refined, and lived over time\n\nSARVAM does not chase outcomes. It builds the conditions in which outcomes endure."
          },
          {
            question: "How the SARVAM Journey Unfolds",
            answer: "SARVAM is delivered as a relationship-led, one-on-one journey, supported by the broader Success369 ecosystem. The journey unfolds deliberately across the three pillars:\n\nClarity: Defining identity, purpose, context, and long-term direction.\nCongruence: Aligning values, behaviour, decisions, and leadership presence.\nCatalysis: Translating alignment into influence, execution, and sustained impact.\n\nKey features of the journey include:\n• Dedicated 1:1 engagement with a senior Success369 guide\n• Hybrid format (online and in-person)\n• Integration of additional domain expertise when required\n• Continuous refinement as life and responsibilities evolve"
          },
          {
            question: "Duration & Commitment",
            answer: "• Duration: 12 months\n• Engagement: Approximately 60–100 hours\n• Format: Predominantly 1:1 (Hybrid)\n\nSARVAM respects depth over speed. Progress is steady, intentional, and grounded."
          },
          {
            question: "Why SARVAM Matters",
            answer: "Many capable people succeed early—but struggle to sustain coherence as complexity increases. SARVAM exists to prevent that fracture.\n\nBecause without alignment:\n• Success becomes fragile\n• Growth becomes exhausting\n• Influence loses integrity\n\nWith alignment:\n• Success compounds\n• Leadership stabilises\n• Impact deepens"
          },
          {
            question: "Where SARVAM Fits in the Success369 Journeys",
            answer: "SARVAM is often entered after GITA and MAYA, once clarity and realignment are established. For some, it is the culmination of their Success369 engagement. For others, it becomes the foundation for legacy-level contribution.\n\nReadiness matters more than timing."
          },
          {
            question: "How do I Apply for SARVAM?",
            answer: "SARVAM is offered through a considered application process to ensure mutual alignment. This is intentional. The journey works best when commitment, readiness, and responsibility are clear on both sides."
          }
        ]}
      />
      
      <GlobalCTA
        title={
          <h2 className="text-white">
            Build your <span className="text-primary italic">legacy architecture.</span>
          </h2>
        }
        description="SARVAM is by application only. Book a conversation to explore if this is the right time for your transformation."
        ctaText="Apply for SARVAM"
        ctaHref="/apply/sarvam"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramSarvam;