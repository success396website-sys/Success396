import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Sparkles, CheckCircle2, Clock, Globe, Users, Target, Building } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gitaVideo from "@/assets/gita.mp4";
import gita1 from "@/assets/Gita/1.png";
import gita2 from "@/assets/Gita/2.png";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations

const ProgramGita = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>GITA — Clarity Before Action | Success369</title>
        <meta name="description" content="GITA is the essential first phase of Success369. A guided clarity session for those at a decision point, designed to reveal your next direction with confidence." />
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
            <source src={gitaVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero content — left-aligned, bottom-anchored */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <Sparkles size={12} />
                Success369: PAUSE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Some moments — <span className="text-primary text-glow italic">don't need speed.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              They need clarity. GITA is the essential entry point for those at a decision point, designed to reveal the direction that makes sense for your next move.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <CTAButton to="/apply/gita" size="md" variant="shimmer">
                Apply for GITA
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- FOUNDATION STYLE: WHO SHOULD BEGIN? --- */}
      <section className="section bg-background relative overflow-hidden">
        {/* Decorative background elements */}
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
                Clarity Before Action
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who is GITA For?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              GITA is for individuals at a decision point—students, professionals, leaders, or anyone feeling capable but unclear.
            </p>
          </motion.div>

          {/* Cards following Home Page style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: gita1,
                title: "Professionals at a Crossroads",
                description: "Career moves, leadership shifts, or moments of uncertainty—when acting without clarity can create years of confusion.",
                step: "01",
              },
              {
                image: gita2,
                title: "Capable but Unclear Leaders",
                description: "You have the momentum, but you question the direction. GITA helps you pause and choose your next step with confidence.",
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
                {/* Floating Background Number */}
                <span className="absolute -top-16 -right-8 font-display text-[10rem] md:text-[14rem] font-black text-foreground/[0.05] dark:text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.08] group-hover:-translate-y-8 group-hover:-translate-x-4">
                  {card.step}
                </span>

                <div className="relative rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  </div>

                  {/* Content */}
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

      {/* --- WHAT YOU GAIN (Transformation) --- */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">What You Gain</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Clarity comes first. Action comes after."</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Self-Understanding", desc: "Clear understanding of who you are right now.", icon: Users },
              { title: "Direction Clarity", desc: "Knowing which path makes sense from here.", icon: Target },
              { title: "Confident Decisions", desc: "Confidence in your next moves.", icon: Sparkles },
              { title: "Grounded Path", desc: "A calm way forward from here.", icon: Building }
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

      {/* --- WHAT IS GITA? (Process) --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Experience</span>
              <h2 className="mb-8">
                A space for <br />
                <span className="text-primary italic">clear thinking.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                GITA is a guided clarity session. It doesn't give quick advice. It creates space for you to understand who you are right now, what truly matters, and what direction makes sense.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, label: "3-hour guided session" },
                  { icon: Users, label: "1:1 or small group" },
                  { icon: Globe, label: "Online or in person" },
                  { icon: Target, label: "No quick advice" }
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
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                  alt="Clarity Session"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              {/* Floating Stat/Accent */}
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">100%</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">Focus on your personal transformation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection 
        items={[
          {
            question: "What is GITA?",
            answer: "GITA is a focused 3-hour guided clarity session. It helps you understand:\n• Where you are right now\n• What truly matters to you\n• What direction makes sense next\n\nGITA does not tell you what to do. It helps you see clearly enough to decide well."
          },
          {
            question: "Who is GITA for?",
            answer: "GITA is for anyone at a decision point. It is suited for:\n• Students planning their next step\n• Graduates choosing a path\n• Early professionals unsure about direction\n• Professionals considering change\n• Homemakers planning a restart\n• Leaders facing new responsibility\n• Entrepreneurs at a crossroads\n\nFrom metros to small towns and villages — if you need clarity before taking your next step, GITA is for you. You do not need to feel stuck. You only need to want clearer direction."
          },
          {
            question: "What will I gain from GITA?",
            answer: "By the end of the session, you will have:\n• Clear understanding of your current situation\n• Simpler choices\n• Reduced doubt\n• A confident next step\n• A guiding principle for future decisions\n\nYou leave calmer and clearer."
          },
          {
            question: "How does the GITA journey work?",
            answer: "GITA is:\n• A 3-hour guided session\n• Delivered 1:1 or in a small group\n• Available online or in person\n• Led by a trained Success369 guide\n\nThe session moves step by step: Reflection → Insight → Direction. There is no pressure to act immediately. Clarity comes first."
          },
          {
            question: "Why does GITA matter?",
            answer: "Many people act too quickly — and then spend years correcting their path. GITA helps you pause before you commit. Better clarity leads to better choices. Better choices lead to steady progress. In Success369, clarity always comes before action."
          },
          {
            question: "Where does GITA fit in the Success369 journeys?",
            answer: "For many, GITA is the starting point. For some, it is enough. For others, it opens the door to deeper journeys like MAYA or SARVAM. There is no obligation to continue."
          }
        ]}
      />
      
      <GlobalCTA
        title={
          <h2 className="text-white">
            Begin with <span className="text-primary italic">Clarity.</span>
          </h2>
        }
        description="Book your GITA session and choose your next step with absolute confidence."
        ctaText="Apply for GITA"
        ctaHref="/apply/gita"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramGita;
