import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import { 
  Building2, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Gem,
  Lock,
  Search,
  BookOpen,
  ArrowRight,
  Globe
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const values = [
  {
    icon: Gem,
    title: "Proven Excellence",
    content: "We do not experiment with lives. Every framework, system, and recommendation we offer is grounded in tested principles, disciplined thinking, and validated experience. We stand only behind what we trust."
  },
  {
    icon: Search,
    title: "Radical Honesty",
    content: "We believe clarity is respect. No inflated promises. No convenient narratives. We communicate with candour, precision, and transparency — even when the truth is demanding."
  },
  {
    icon: ShieldCheck,
    title: "Integrity Always",
    content: "Success without ethics is failure in disguise. We uphold the highest moral and professional standards in every decision, partnership, and engagement."
  },
  {
    icon: Zap,
    title: "Deep Empowerment",
    content: "We do not create dependency. We strengthen capability. Our role is to equip ambitious individuals and organisations to think clearly, act decisively, and lead responsibly."
  },
  {
    icon: Lock,
    title: "Absolute Privacy",
    content: "Trust is foundational. We safeguard every personal and organisational detail with strict confidentiality and disciplined stewardship. Nothing is shared without explicit consent."
  }
];

const ecosystemItems = [
  "Strategic consulting and enterprise advisory",
  "AI-driven platforms and digital systems",
  "Publishing and intellectual property",
  "Immersive experiences and leadership forums",
  "Performance tools and productivity systems",
  "Venture incubation and strategic investments",
  "Global communities and collaborative networks"
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | Success369 - Engineering Success</title>
        <meta name="description" content="Success369 is a philosophy-led, systems-driven enterprise headquartered in Bengaluru, India. We architect meaningful success through disciplined execution." />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] hidden dark:block" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">Success369 Architecture</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            
            <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl mb-8 leading-tight">
              Stop Chasing Success. <br />
              <span className="text-glow text-primary">Start Engineering It.</span>
            </motion.h1>
            
            <motion.p custom={2} variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Success369 Limited is a philosophy-led, systems-driven enterprise headquartered in Bengaluru, India — the innovation capital of a nation in motion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold">We were not formed to motivate. <span className="text-primary">We were formed to architect.</span></h2>
                <div className="h-1 w-20 bg-primary/40 rounded-full" />
              </div>
              
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Meaningful success is not accidental. It is aligned. Structured. Earned.
                </p>
                <p>
                  In a world flooded with ambition yet fractured by noise, clarity is rare. Discipline is optional. Alignment is exceptional. We exist to restore it.
                </p>
                <p>
                  As India writes its next chapter of growth, we choose to be active participants — working with ambitious individuals and institutions across the breadth and depth of the nation, helping them convert aspiration into disciplined execution and sustainable achievement.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square max-w-md mx-auto group"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-6 blur-2xl group-hover:rotate-3 transition-transform duration-1000 hidden dark:block" />
              <div className="absolute inset-0 bg-accent/5 rounded-[2.5rem] -rotate-3 blur-3xl group-hover:-rotate-1 transition-transform duration-1000 hidden dark:block" />
              
              <div className="relative h-full w-full bg-card/80 dark:bg-card/40 backdrop-blur-2xl border border-border/50 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-center gap-10 overflow-hidden shadow-2xl shadow-black/5 dark:shadow-none transition-all duration-500 group-hover:border-primary/30">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse hidden dark:block" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] hidden dark:block" />
                
                {[
                  { icon: Building2, label: "Headquartered", value: "Bengaluru, India" },
                  { icon: Target, label: "Vision", value: "From India to the World" },
                  { icon: Cpu, label: "Innovation", value: "AI-Enabled Systems" }
                ].map((item, i) => (
                  <div key={item.label} className="flex items-center gap-6 group/item">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-all duration-500 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white shadow-lg shadow-primary/5">
                      <item.icon size={26} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-0.5 transition-colors group-hover/item:text-primary">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OS Section */}
      <section className="py-24 bg-card/50 dark:bg-card/30 border-y border-border/50 dark:border-white/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">We Don't Just Inspire. <span className="text-primary">We Build the System.</span></h2>
            <p className="text-muted-foreground text-lg">
              Success369 is building the operating system for meaningful success — a unified architecture that blends strategy, leadership, performance science, and AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="text-primary font-mono">01.</span> Uncompromising
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No fluff. No motivational dependency. No vague philosophy. Only clarity, structure, and results.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="text-primary font-mono">02.</span> Grounded
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We integrate strategy, leadership, performance science, governance thinking, and AI-enabled systems into one disciplined framework.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-foreground">
                <span className="text-primary font-mono">03.</span> Scalable
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designed for individuals. Structured for organisations. Built for scale. Grounded in integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Ambitious */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -left-12 -top-12 w-32 h-32 bg-primary/20 blur-[80px] hidden dark:block" />
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Built for the <br /><span className="text-primary">Ambitious.</span></h2>
              <div className="flex flex-wrap gap-3">
                {["Founders", "Executives", "Operators", "High-agency individuals", "Uncompromising organisations"].map(item => (
                  <span key={item} className="px-4 py-2 rounded-full bg-card border border-border text-xs sm:text-sm font-medium text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-8 bg-card p-10 rounded-3xl border border-border backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl hidden dark:block" />
              <p className="text-xl text-foreground font-medium italic relative z-10">
                "If you want comfort — this isn't for you. If you want transformation — welcome."
              </p>
              <div className="space-y-4 text-muted-foreground relative z-10">
                <p>One integrated architecture. Multiple evolving expressions.</p>
                <p>Built to scale. Built to endure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-card/50 dark:bg-card/30 relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">We're Building an <span className="text-primary">Ecosystem.</span></h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              The Success369 Journeys (GITA, MAYA, SARVAM, SHAKTI) are the beginning — not the boundary. We are building a broader ecosystem that expands across:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ecosystemItems.map((item, idx) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border group hover:bg-card-hover transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our <span className="text-primary">Values.</span></h2>
            <p className="text-muted-foreground">The architecture of our character.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors hidden dark:block" />
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <GlobalCTA
        title={
          <h2 className="font-display text-5xl sm:text-8xl font-bold mb-12 leading-[0.9] text-white">
            A Movement. From India <br />
            <span className="italic text-primary text-glow">to the World.</span>
          </h2>
        }
        description="Success369 is redefining what success means — and how it is built. It is your life. Design it. Build it. Live it."
        ctaText="Get Started"
        ctaHref="/take-a-session"
        showPillars={true}
      />

      <Footer />
    </div>
  );
};

export default AboutUs;
