import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Headphones, Mic, Play, ExternalLink, Youtube, Sparkles, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import model369Video from "@/assets/Model 369.mp4";
import { fadeUp } from "@/lib/animations";
const podcastCover1 = "https://images.unsplash.com/photo-1478737270239-2fccd27ee086?auto=format&fit=crop&q=80&w=800";
const podcastCover2 = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800";

// fadeUp imported from @/lib/animations

const podcasts = [
  {
    title: "The Success369 Podcast",
    host: "with the Success369 Team",
    image: podcastCover1,
    description:
      "The Success369 Podcast brings together thought leaders, coaches, and visionaries to explore powerful ideas in personal growth, clarity, and sustainable success.",
    longDescription:
      "Join us every week as we unpack transformational frameworks, share real stories of aligned growth, and challenge the conventional narratives around success. This podcast is your weekly companion for building a life of clarity, congruence, and catalysis.",
    platforms: [
      { label: "Apple Podcasts", href: "https://podcasts.apple.com/podcast/success369" },
      { label: "Spotify", href: "https://open.spotify.com/show/success369" },
      { label: "Google Podcasts", href: "https://podcasts.google.com/feed/success369" },
      { label: "YouTube", href: "https://www.youtube.com/@the369leader" },
    ],
  },
  {
    title: "Aligned Leaders",
    host: "with Success369 Coaches",
    image: podcastCover2,
    description:
      "Plug into the minds of leaders who are rewriting the rules of high performance at work—through alignment, not force.",
    longDescription:
      "Aligned Leaders explores how organisations and teams can create cultures of sustainable growth. Each episode features deep conversations with founders, executives, and coaches who lead with clarity and purpose.",
    platforms: [
      { label: "Apple Podcasts", href: "https://podcasts.apple.com/podcast/aligned-leaders" },
      { label: "Spotify", href: "https://open.spotify.com/show/aligned-leaders" },
      { label: "YouTube", href: "https://www.youtube.com/@the369leader" },
    ],
  },
];

const featuredEpisodes = [
  {
    title: "1st Episode by Ajay and Praveen",
    podcast: "The Success369 Podcast",
    id: "ZatkdgdW7pY",
    description: "Deep dive into the core philosophy of Success369 with the creators themselves."
  },
  {
    title: "2nd Episode by Renuka Methil",
    podcast: "Success369 Series",
    id: "eg7rowfo19U",
    description: "Insights on leadership and alignment with Renuka Methil."
  },
  {
    title: "Episode 1 by Marco Landi",
    podcast: "Success369 Series",
    id: "jca2VitiUxc",
    description: "International perspectives on business and human potential."
  },
  {
    title: "Episode 2 by Divya S Iyer",
    podcast: "Success369 Series",
    id: "JhBuOrz3GOc",
    description: "Exploring purpose and performance with Divya S Iyer."
  }
];

const Podcast = () => {
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
        <title>Podcast — Success369 Audio Experiences</title>
        <meta name="description" content="Tune into the Success369 Podcast network for insights on personal growth, clarity, and sustainable success from leaders and visionaries." />
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
              Success369 Podcast Network
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-4 sm:mb-6 text-glow text-white"
            >
              Personal Growth At <br />
              <span className="italic text-primary text-glow font-light">Your Fingertips</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Use Success369 Podcasts to gain clarity, build alignment, and elevate your personal and professional growth in every area of life.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <CTAButton href="#episodes" size="lg" variant="shimmer" className="px-10">
                Explore Shows
              </CTAButton>
              <CTAButton 
                href="https://www.youtube.com/@the369leader" 
                target="_blank"
                rel="noopener noreferrer"
                size="lg" 
                variant="outline" 
                className="px-10 border-white/10 text-white hover:text-white hover:border-primary/50"
              >
                Watch on YouTube
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
                Watch Latest Episodes
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </div>
            <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Visual <span className="italic font-normal">Transformation.</span></h2>
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
                src="https://www.youtube.com/embed/ZatkdgdW7pY"
                title="Success369 Featured Episode"
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
              href="https://www.youtube.com/@the369leader" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs group"
             >
                Subscribe on YouTube <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </section>

      {/* Podcast Shows - Hidden for now
      <section id="shows" className="section relative overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          {podcasts.map((podcast, idx) => (
            <motion.div
              key={podcast.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className={`relative flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-20 items-center group`}
            >
              <span className={`absolute -top-12 ${idx % 2 === 0 ? "-right-8" : "-left-8"} font-display text-[12rem] font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-4`}>
                0{idx + 1}
              </span>
              <div className="w-full max-w-[320px] shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="relative w-full aspect-square rounded-2xl object-cover border border-border/30 shadow-2xl"
                  />
                </div>
              </div>

              <div className="relative flex-1 space-y-8 z-10">
                <div>
                  <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-tight">
                    {podcast.title}
                  </h2>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] opacity-60 italic">{podcast.host}</p>
                </div>

                <p className="text-foreground/90 leading-relaxed">{podcast.description}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {podcast.longDescription}
                </p>

                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-3">
                    Listen here:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {podcast.platforms.map((platform) => (
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
      */}

      {/* Featured Episodes */}
      <section id="episodes" className="section relative">
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
              Featured Episodes
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start with these powerful conversations that capture the essence of the Success369 philosophy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {featuredEpisodes.map((ep, i) => (
              <motion.div
                key={ep.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="group space-y-6"
              >
                {/* YouTube Embed */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-border/30 bg-black shadow-2xl group-hover:border-primary/40 transition-colors duration-500">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${ep.id}`}
                    title={ep.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary px-3 py-1 rounded-full bg-primary/10">
                      {ep.podcast}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                    {ep.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN AS A GUEST --- */}
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
                <Mic size={32} className="text-primary" />
              </div>
              <h2 className="text-foreground mb-6">Have a story worth <span className="italic text-primary">sharing?</span></h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                We're always looking for aligned leaders and visionaries to join our conversations. If you're building something that matters, we want to hear from you.
              </p>
              <CTAButton 
                onClick={() => setShowGuestForm(true)}
                size="lg"
                variant="shimmer"
                className="mx-auto"
              >
                Apply to be a Guest
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
            Never Miss <span className="text-primary italic">an Episode</span>
          </h2>
        }
        description="Subscribe to our podcasts and get weekly insights on clarity, alignment, and sustainable success delivered straight to your ears."
        ctaText="Subscribe on YouTube"
        ctaHref="https://www.youtube.com/@the369leader"
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
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2">Guest Application</p>
                <h3 className="text-foreground text-xl font-bold">Share Your Story</h3>
                <p className="text-muted-foreground text-sm">Join us on the podcast to discuss clarity, alignment, and sustainable success.</p>
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
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Why would you be a great guest? *</label>
                  <textarea
                    value={guestForm.story}
                    onChange={(e) => setGuestForm({...guestForm, story: e.target.value})}
                    placeholder="Tell us about your journey to aligned success..."
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

export default Podcast;
