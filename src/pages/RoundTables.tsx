import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Play, ExternalLink, ChevronRight, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import model369Video from "@/assets/Model 369.mp4";
import { fadeUp } from "@/lib/animations";
const rtCover1 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800";
const rtCover2 = "https://images.unsplash.com/photo-1515169067868-5387aecfd5ce?auto=format&fit=crop&q=80&w=800";

const roundTables = [
  {
    title: "The Success369 Round Table",
    host: "with Key Industry Leaders",
    image: rtCover1,
    description:
      "Our Round Tables bring together a select group of thinkers, innovators, and practitioners to debate, dissect, and map out the future of aligned success.",
    longDescription:
      "Join the conversation as top minds explore transformational frameworks, share unfiltered insights, and tackle complex challenges. This is your chance to step into a room where real growth strategies are forged.",
    platforms: [
      { label: "YouTube Live", href: "https://youtube.com/@success369" },
      { label: "LinkedIn Events", href: "https://linkedin.com/company/success369" },
      { label: "Watch Replays", href: "https://youtube.com/@success369" },
    ],
  },
  {
    title: "Pioneers Collective",
    host: "with Success369 Mentors",
    image: rtCover2,
    description:
      "Exclusive deep-dive discussions on building high-performance cultures, scaling businesses with clarity, and navigating modern transitions.",
    longDescription:
      "The Pioneers Collective is a curated series of discussions focused on organizational alignment and purpose-driven execution. Learn from executives and founders who lead from a place of clarity.",
    platforms: [
      { label: "YouTube Live", href: "https://youtube.com/@success369" },
      { label: "Watch Replays", href: "https://youtube.com/@success369" },
    ],
  },
];

const featuredDiscussions = [
  {
    title: "Navigating Scale with Clarity",
    series: "The Success369 Round Table",
    duration: "65 min",
    description: "Founders debate the friction points of rapid growth and how the GITA framework maintains alignment.",
  },
  {
    title: "Deconstructing Founder Burnout",
    series: "Pioneers Collective",
    duration: "58 min",
    description: "An open discussion on uncovering hidden MAYA patterns in high-stress business environments.",
  },
  {
    title: "The Role of Purpose in Performance",
    series: "The Success369 Round Table",
    duration: "75 min",
    description: "Industry leaders share case studies on how purpose-driven teams outperform metrics-only models.",
  },
  {
    title: "Building the Engine of Alignment",
    series: "Pioneers Collective",
    duration: "60 min",
    description: "Practical steps to implementing the SARVAM architecture inside scaling organizations.",
  },
  {
    title: "Hiring for Congruence",
    series: "The Success369 Round Table",
    duration: "50 min",
    description: "Debating new models of recruitment where energetic match matters as much as skill congruence.",
  },
  {
    title: "Transformation vs. Optimization",
    series: "Pioneers Collective",
    duration: "45 min",
    description: "Why tweaking systems isn't enough, and when a complete energetic transformation is required.",
  },
];

const RoundTables = () => {
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [guestForm, setGuestForm] = useState({ name: "", email: "", linkedin: "", story: "" });

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestForm.name || !guestForm.email || !guestForm.story) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Application submitted! Our team will reach out soon.");
    setShowGuestForm(false);
    setGuestForm({ name: "", email: "", linkedin: "", story: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Round Tables — Success369 Expert Discussions</title>
        <meta name="description" content="Engage in powerful discussions with thought leaders, founders, and visionaries about alignment, clarity, and sustainable success." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <video 
            src={model369Video}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
          {/* Hero Overlay System */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
        </div>

        <div className="relative z-20 container-custom w-full pb-28 sm:pb-32">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
            >
              Success369 Expert Series
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-4 sm:mb-6 text-glow text-white"
            >
              Minds Unveiling <br />
              <span className="italic text-primary text-glow font-light">Deep Realities</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Step into the room. Watch powerful collective discussions on alignment, building sustainable momentum, and transforming frameworks into action.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <CTAButton href="#series" size="lg" variant="shimmer" className="px-10">
                Explore The Series
              </CTAButton>
              <CTAButton href="#watch" size="lg" variant="outline" className="px-10 border-white/10 text-white hover:text-white hover:border-primary/50">
                Watch Highlights
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- NEW: YOUTUBE FEATURED SECTION --- */}
      <section id="watch" className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        <div className="relative container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 justify-center w-full">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">
                Watch Latest Discussions
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Collective <span className="italic font-normal">Wisdom.</span></h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group lg:max-w-5xl mx-auto"
          >
            {/* YouTube Embed Container */}
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/5lwI2eoGN6E"
                title="Success369 Featured Round Table"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Interactive Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px] -z-10 animate-pulse" />
          </motion.div>

          <div className="mt-12 text-center">
             <a 
              href="https://youtube.com/@success369" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs group"
             >
                Subscribe on YouTube <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Series Info */}
      <section id="series" className="section relative overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          {roundTables.map((rt, idx) => (
            <motion.div
              key={rt.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className={`relative flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-20 items-center group`}
            >
              {/* Background Number Pattern */}
              <span className={`absolute -top-12 ${idx % 2 === 0 ? "-right-8" : "-left-8"} font-display text-[12rem] font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4`}>
                0{idx + 1}
              </span>
              {/* Cover */}
              <div className="w-full max-w-[320px] shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={rt.image}
                    alt={rt.title}
                    className="relative w-full aspect-square rounded-2xl object-cover border border-border/30 shadow-2xl"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="relative flex-1 space-y-8 z-10">
                <div>
                  <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-tight">
                    {rt.title}
                  </h2>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] opacity-60 italic">{rt.host}</p>
                </div>

                <p className="text-foreground/90 leading-relaxed">{rt.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rt.longDescription}
                </p>

                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-3">
                    Watch Live & On-Demand:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {rt.platforms.map((platform) => (
                      <a
                        key={platform.label}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 group"
                      >
                        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        {platform.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.03] to-background" />

        <div className="relative container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Featured Discussions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start with these powerful round tables that dissect and map out the core components of aligned success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredDiscussions.map((ep, i) => (
              <motion.div
                key={ep.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="group bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Play size={16} className="text-primary ml-0.5" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-medium">{ep.series}</p>
                    <p className="text-xs text-muted-foreground">{ep.duration}</p>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-foreground mb-2 leading-snug">
                  {ep.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {ep.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN THE PANEL --- */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-12 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users size={32} className="text-primary" />
              </div>
              <h2 className="text-foreground mb-6">Want a seat at <span className="italic text-primary">the table?</span></h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                We continuously source aligned leaders and visionaries to join our panels. Bring your expertise to the Round Table.
              </p>
              <CTAButton 
                onClick={() => setShowGuestForm(true)}
                size="lg"
                variant="shimmer"
                className="mx-auto"
              >
                Apply for the Panel
              </CTAButton>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </section>

      <GlobalCTA
        title={
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-white uppercase tracking-wider">
            Join the <span className="text-primary italic">Discussion</span>
          </h2>
        }
        description="Never miss an upcoming Round Table. Subscribe to be notified when we go live with new expert panels and discussions."
        ctaText="Subscribe on YouTube"
        ctaHref="https://youtube.com/@success369"
        showPillars={false}
      />

      {/* --- GUEST APPLICATION MODAL --- */}
      <AnimatePresence>
        {showGuestForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setShowGuestForm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-background border border-border/50 rounded-3xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setShowGuestForm(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl leading-none"
              >
                ×
              </button>

              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">Panel Application</p>
                <h3 className="text-foreground text-xl font-bold">Join the Round Table</h3>
                <p className="text-muted-foreground text-sm">Join us as a panelist to discuss clarity, alignment, and sustainable success.</p>
              </div>

              <form onSubmit={handleGuestSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    value={guestForm.name}
                    onChange={(e) => setGuestForm({...guestForm, name: e.target.value})}
                    placeholder="Jane Doe"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Email Address *</label>
                  <input
                    type="email"
                    value={guestForm.email}
                    onChange={(e) => setGuestForm({...guestForm, email: e.target.value})}
                    placeholder="jane@example.com"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={guestForm.linkedin}
                    onChange={(e) => setGuestForm({...guestForm, linkedin: e.target.value})}
                    placeholder="https://linkedin.com/in/janedoe"
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">What perspective do you bring? *</label>
                  <textarea
                    value={guestForm.story}
                    onChange={(e) => setGuestForm({...guestForm, story: e.target.value})}
                    placeholder="Tell us about your area of expertise and experience..."
                    rows={4}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-[0.2em] transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default RoundTables;
