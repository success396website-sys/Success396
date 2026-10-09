import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sparkles, Fingerprint, Compass, RefreshCw, Clock, Users, Award, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import FAQSection from "@/components/FAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mayaVideo from "@/assets/maya.mp4";
import maya1 from "@/assets/Maya Imgs/1.webp";
import maya2 from "@/assets/Maya Imgs/2.webp";
import { fadeUp } from "@/lib/animations";

const ProgramMaya = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Self Alignment Coaching | Identity and Purpose Coaching — MAAYA</title>
        <meta
          name="description"
          content="MAAYA is Success369's self alignment coaching journey for individuals who are progressing but feel something is off. Guided 1:1 sessions with a certified Success369 facilitator."
        />
        <link rel="canonical" href="https://success369.org/maaya" />
      </Helmet>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src={mayaVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 hero-overlay" />

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
              Self Alignment Coaching to{" "}
              <span className="text-primary text-glow italic">Discover Your True Direction</span> — MAYA by Success369
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-8 sm:mb-10 max-w-xl text-lg sm:text-xl text-white/90 font-light"
            >
              What is self alignment coaching? It is about making yourself in sync with your actions, choices and
              movement. MAYA is the Success369 self alignment coaching journey for people who are moving forward but
              feel something is fundamentally off — not broken, just misaligned.
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

      {/* --- HOW DOES IDENTITY AND PURPOSE COACHING TRANSFORM YOU? --- */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">How Does Identity and Purpose Coaching Transform You?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">"Not broken. Just misaligned."</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Identity Clarity", desc: "Understand who you're becoming beneath the roles and expectations you've inherited.", icon: Fingerprint },
              { title: "Purpose Alignment", desc: "See whether your daily actions actually reflect what matters to you — not just what looks right.", icon: Compass },
              { title: "Pattern-Level Change", desc: "Shift the deeper patterns that make progress feel coherent and purposeful instead of scattered and forced.", icon: RefreshCw },
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mt-14"
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              MAYA works as identity and purpose coaching because it goes beyond surface-level goal setting. It
              addresses the deeper patterns that determine whether your actions feel coherent and purposeful or
              scattered and forced. When those patterns shift, so does everything built on top of them.
            </p>
            <Link
              to="/blog/how-to-improve-leadership-communication"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Explore how to improve leadership communication <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- WHO SHOULD CHOOSE THIS SELF ALIGNMENT COACHING JOURNEY? --- */}
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
                Self Alignment Coaching
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who Should Choose This Self Alignment Coaching Journey?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              MAYA is for individuals who are progressing — but feel something is off. This is for inflection
              moments, not crisis moments. It works for two kinds of people specifically:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start pb-20">
            {[
              {
                image: maya1,
                title: "Leaders and Teams in Motion",
                description: "Leaders strengthening presence and communication, and teams seeking alignment and execution rhythm. Translating purpose into performance.",
                step: "01",
              },
              {
                image: maya2,
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

      {/* --- HOW DOES THIS MAYA WORK? --- */}
      <section className="section relative bg-card/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Journey</span>
              <h2 className="mb-8">
                How does this MAYA —{" "}
                <span className="text-primary italic">Self Alignment Coaching work?</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: Clock, label: "24-hour guided journey" },
                  { icon: Users, label: "1:1 or small cohort" },
                  { icon: Award, label: "Certified Success369 facilitator" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground/90 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Each MAYA session is structured around your specific misalignment, not a generic curriculum. This is
                identity and purpose coaching that adapts to where you are, not where a programme assumes you should
                be. Sessions run as guided 1:1 or small cohort journeys, facilitated by a certified Success369
                facilitator.
              </p>
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
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200"
                  alt="Finding direction and alignment"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-card border border-primary/20 backdrop-blur-xl shadow-xl max-w-[200px]">
                <p className="text-primary font-display text-3xl font-bold mb-1">24 hrs</p>
                <p className="text-muted-foreground text-xs leading-tight font-medium">Guided realignment, structured to your pace</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <FAQSection
        title="Frequently Asked Questions About MAYA Self Alignment Coaching"
        items={[
          {
            question: "What is self alignment coaching?",
            answer: "Self alignment coaching is an organized way of determining the discrepancy that exists between your true nature and the manner in which you project yourself in all your activities and relations. This is different from performance coaching, which is based on production since self alignment coaching works at the level of identity — so that results become a natural consequence of coherence, not just effort."
          },
          {
            question: "How is MAYA different from other life coaching?",
            answer: "Most forms of coaching involve goal setting, habitual practices, and accountability. MAYA is identity coaching and involves deeper work that addresses unseen patterns and misalignments that make progress seem more difficult than it needs to be. If you have gone through traditional coaching but there is still an issue that you know is unresolved, MAYA is tailored for you."
          },
          {
            question: "What is the duration of the MAYA self alignment coaching journey?",
            answer: "MAYA is a 24 hours guided realignment journey, for people running in a busy schedule we customize the program accordingly. It is structured across sessions with a certified Success369 facilitator in 1:1 or small cohort format. The timeline is intentional. Real alignment takes more than a single session to surface, understand, and integrate into how you actually show up day to day."
          },
          {
            question: "Do I need prior coaching experience to join MAYA?",
            answer: "None at all. MAYA is designed for people who feel ready to move but are not sure what is holding them back. Whether you have tried other programs before or this is your first time working with a coach or facilitator, the process starts from where you are, not where it assumes you should be."
          },
        ]}
      />

      <GlobalCTA
        title={
          <h2 className="text-white">
            Ready to Begin Your <span className="text-primary italic">Self Alignment Coaching</span> Journey?
          </h2>
        }
        description="Take the first step toward closing the gap between who you are and how you show up."
        ctaText="Begin the MAYA Journey"
        ctaHref="/apply/maya"
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default ProgramMaya;
