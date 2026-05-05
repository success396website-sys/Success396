import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { BookOpen, Target, Dna, Calendar, User, BookOpenCheck, Users, Check, ArrowRight, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { ShakthiRegisterPopup, useShakthiRegister } from "@/components/ShakthiRegisterPopup";

const hooks = [
  { title: "Brilliant in your head.", em: "Forgettable out loud.", sub: <>Your thinking is sharp. The way it is landing is not. <strong>The Unfiltered Voice</strong> is a focused <strong>6-hour programme</strong> that closes the gap between what you think and how you are heard — through <strong>personality-aligned communication.</strong></> },
  { title: "The idea was yours.", em: "Someone else got the credit.", sub: <>Not because your idea was weaker. Because it did not land the way it deserved to. <strong>The Unfiltered Voice</strong> teaches you to communicate with the precision and presence your thinking already deserves. <strong>Harvard ManageMentor content included.</strong></> },
  { title: "You know what you want to say.", em: "But it never comes out the way you meant it.", sub: <><strong>The Unfiltered Voice</strong> is a focused <strong>6-hour communication programme</strong> that teaches you to communicate as yourself. Louder. Polished. <strong>And precisely you.</strong></> },
];

const curriculum = [
  { num: "01", title: "Discover your Communication Brand", desc: "Every person has a natural communication identity. Before we change anything, we identify yours. Calm. Direct. Warm. Analytical. Your brand is not a weakness — it is the architecture everything else builds on." },
  { num: "02", title: "Align communication to who you are", desc: "We do not fix you. We sharpen what is already there. A calm communicator learns to bring warmth without performing energy. A direct communicator learns to bring connection without losing edge." },
  { num: "03", title: "Body language and tone", desc: "How you show up physically and vocally — and how to make both work with you, not against you. Subtle shifts that change how people receive what you say before you finish the sentence." },
  { num: "04", title: "Public speaking and stage presence", desc: "How to speak in front of a group from your own centre — not a borrowed style. Practical tools for managing nervousness and showing up with authority in any room, any size." },
  { num: "05", title: "Listening as a communication skill", desc: "The half of communication nobody trains. Active, intentional listening that changes the quality of every conversation you have — and how people respond to you after." },
  { num: "06", title: "Harvard ManageMentor guided modules", desc: "Two hours of structured Harvard ManageMentor content — world-class frameworks on communication made immediately practical. Woven into the programme, not added on.", tag: true },
];

const forYouItems = [
  "You leave meetings having not said what you meant to say",
  "You have good ideas that do not land the way you intend",
  "Your thinking is strong but your delivery lets you down",
  "You want to communicate more clearly without changing who you are",
  "You are stepping into a bigger role and need your communication to match",
  "You are tired of generic communication advice that does not fit your style",
];

const pillars = [
  { icon: BookOpen, title: "World-class content from Harvard ManageMentor", desc: "Success369 holds a licence to incorporate curated content from Harvard ManageMentor — the professional skill development platform of Harvard Business School, trusted by thousands of organisations globally. This is not generic material repurposed for a workshop. It is world-class research on communication, leadership, and human behaviour — brought into The Unfiltered Voice and made immediately applicable to how you show up in your work and life. You are not just practising a skill. You are learning from the same frameworks that organisations worldwide use to develop their best people." },
  { icon: Target, title: "Focused, specific skill development", desc: "Most training programmes try to cover everything — and end up changing nothing. The Unfiltered Voice does one thing: communication. Every hour of the programme is focused on this single skill, gone deep. You will not leave with a list of concepts to remember. You will leave with a specific, practised capability you can use in the next conversation you have. Six hours. Three sessions. One skill that actually shifts. This is what focused skill development means — and it is the opposite of everything you have tried before that did not stick." },
  { icon: Dna, title: "Personality-aligned communication", desc: "Every other communication programme starts from the outside — posture, eye contact, voice projection, frameworks to memorise. The Unfiltered Voice starts from the inside. We begin by identifying your natural communication identity: how you think, how you process, how you naturally express. Then we build your communication skill on top of that — not instead of it. A calm communicator does not need to become high-energy. A direct communicator does not need to become warm. They need to learn how to bring what is missing without abandoning what already works. This is personality-aligned communication. And this is what makes The Unfiltered Voice different from every programme that left you sounding like someone else." },
];

const ShakthiV2 = () => {
  const [currentHook, setCurrentHook] = useState(0);
  const switchHook = useCallback((i: number) => setCurrentHook(i), []);
  const { formData, updateField, popupOpen, setPopupOpen, handleSubmit } = useShakthiRegister();
  useEffect(() => {
    const t = setInterval(() => setCurrentHook(p => (p + 1) % 3), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>The Unfiltered Voice — Shakthi V2 | Success369</title>
        <meta name="description" content="Shakthi — The Unfiltered Voice. A 6-hour personality-aligned communication programme by Success369." />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen w-full bg-black flex flex-col pt-20">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, hsl(324 100% 46% / 0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, hsl(324 100% 46% / 0.08) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative flex-1 flex items-center z-10 py-12 md:py-20">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                Shakthi &nbsp;·&nbsp; The Unfiltered Voice
              </span>
            </motion.div>

            <div className="max-w-2xl">
              <div className="relative min-h-[200px]">
                {hooks.map((hook, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: i === currentHook ? 1 : 0, y: i === currentHook ? 0 : 24 }} transition={{ duration: 0.5 }} className={`${i === currentHook ? "block" : "hidden"}`}>
                    <h1 className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-glow leading-[1.2] sm:leading-[1.1]">{hook.title}<span className="block italic text-white/50">{hook.em}</span></h1>
                    <p className="mb-8 sm:mb-10 max-w-lg text-base sm:text-xl text-white/90 font-light">{hook.sub}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3 items-center mb-6">
                {[0, 1, 2].map(i => (
                  <button key={i} onClick={() => switchHook(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentHook ? "bg-primary scale-125" : "bg-white/20 hover:bg-white/40"}`} />
                ))}
              </div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="#register" className="inline-block bg-primary text-white px-9 py-4 text-sm font-semibold uppercase tracking-wider rounded-lg border-2 border-primary hover:bg-primary/80 transition-all hover:-translate-y-0.5">Register Now — ₹3,000</a>
                <a href="#free-session" className="inline-block text-white/85 px-9 py-4 text-sm font-medium uppercase tracking-wider rounded-lg border border-white/30 hover:border-white/70 hover:text-white transition-all hover:-translate-y-0.5">Take a Free Session</a>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-10 pt-8 border-t border-white/10 flex gap-4 md:gap-6 flex-wrap items-center">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-3 py-1.5 rounded">★ Harvard ManageMentor Content Included</span>
                {["Cohort of 15–25", "2 Hours × 3 Sessions", "In-Person & Online"].map(t => (
                  <span key={t} className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-white/45 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" />{t}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TENSION */}
      <div className="bg-primary py-10 px-6 text-center">
        <p className="text-white text-xl md:text-2xl italic max-w-3xl mx-auto font-light leading-relaxed">"Most communication training teaches you how to speak. The Unfiltered Voice teaches you how to speak as yourself."</p>
      </div>

      {/* PILLARS */}
      <section className="py-24 bg-card/50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Why Shakthi</span>
            <h2>3 things that make<br />Shakthi special.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mt-2 px-1">Three things that set The Unfiltered Voice apart from every communication programme you have come across.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-card/60 border border-border/30 hover:border-primary/40 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <p.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 p-6 sm:p-7 rounded-2xl border-l-4 border-primary bg-primary/5 mx-1">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed"><strong className="text-foreground">Harvard ManageMentor content included.</strong> Shakthi features curated content from Harvard ManageMentor — developed by Harvard Business School, the gold standard in management education globally.</p>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Programme Content</span>
            <h2>What the 6 hours cover</h2>
          </motion.div>
          <div className="flex gap-4 flex-wrap mb-12">
            {[
              { icon: Calendar, label: "2 Hours × 3 Sessions" },
              { icon: User, label: "Facilitated by Coach — 4 Hours" },
              { icon: BookOpenCheck, label: "Harvard ManageMentor — 2 Hours" },
              { icon: Users, label: "Cohort of 15–25" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card border border-border/30 text-sm font-medium">
                <c.icon size={16} className="text-primary" />{c.label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {curriculum.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative p-8 pl-16 rounded-2xl bg-card/40 border border-border/20 hover:border-primary/30 transition-all">
                <span className="absolute left-5 top-8 text-3xl font-bold text-primary/15">{item.num}</span>
                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                {item.tag && <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded">Harvard ManageMentor Content</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BATCH FORMAT */}
      <section className="py-24 bg-card/50">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">How It Runs</span>
            <h2>2 hours. 3 sessions.<br />One complete skill.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { session: "Session 1", title: "Communication Brand + Body Language", desc: "Identify your natural communication identity. Understand your strengths and the specific adjustments that will make them sharper.", badge: "2 Hours" },
              { session: "Session 2", title: "Public Speaking + Listening", desc: "Build presence for groups and 1-on-1. Develop listening as a deliberate skill that transforms how people engage with you.", badge: "2 Hours" },
              { session: "Session 3", title: "Harvard ManageMentor + Commitment", desc: "Apply Harvard ManageMentor frameworks to your specific communication gaps. Leave with a personal commitment you will actually keep.", badge: "2 Hours · HMM Content" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{s.session}</p>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">{s.badge}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm italic mt-10 p-6 rounded-xl border border-border/20">Sessions are held on consecutive weeks. You attend all three. Each one builds directly on the last. Small cohort — maximum 25 participants.</p>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Is This For You</span>
            <h2>This is for you if —</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forYouItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-6 rounded-2xl bg-card/40 border border-border/20 hover:border-primary/30 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-7 rounded-2xl border-l-4 border-border bg-card/30">
            <p className="text-muted-foreground text-sm leading-relaxed italic"><strong className="text-foreground not-italic">This is not just another public speaking performance course.</strong> It is about being understood — clearly, authentically, and entirely on your own terms.</p>
          </div>
        </div>
      </section>

      {/* FREE SESSION */}
      <section className="py-24 bg-card/50" id="free-session">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Try Before You Commit</span>
            <h2>Not sure yet?<br />Start with a free session.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mt-2">Before you register, experience it. Our free 45-minute taster session gives you a direct feel for the Shakthi approach.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { day: "Every Wednesday", time: "7:00 PM IST" },
              { day: "Every Sunday", time: "11:30 AM IST" },
            ].map((slot, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-card border border-border/30 border-t-4 border-t-primary hover:-translate-y-1 hover:shadow-xl transition-all">
                <p className="text-2xl font-bold mb-1">{slot.day}</p>
                <p className="text-xl font-semibold text-primary mb-3">{slot.time}</p>
                <p className="text-muted-foreground text-sm">45 minutes · Online</p>
                <p className="text-muted-foreground text-sm">Free · No commitment required</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-sm font-semibold uppercase tracking-wider rounded-lg hover:-translate-y-0.5 transition-all">Book Your Free Session <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section className="py-24 bg-card" id="register">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Secure Your Spot</span>
            <h2>Ready to close the gap?</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="p-8 rounded-3xl bg-background/50 border border-border/30">
              <h3 className="text-xl font-bold mb-6 pb-5 border-b border-border/20">Shakthi — The Unfiltered Voice</h3>
              {[
                ["Format", "2 Hours × 3 Sessions"],
                ["Total Duration", "6 Hours"],
                ["Cohort Size", "Max 25 Participants"],
                ["Delivery", "In-Person & Online"],
                ["Content", "Success369 + Harvard ManageMentor"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-3.5 border-b border-border/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Investment</span>
                <span className="text-2xl font-bold text-primary">₹3,000</span>
              </div>
              <p className="text-xs text-muted-foreground mt-6 leading-relaxed">Small cohort. Limited spots. Once full, registration closes until the next batch opens.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 px-1">Register — Secure Your Spot</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">First Name *</label><input type="text" placeholder="Your first name" value={formData.firstName} onChange={e => updateField("firstName", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors" /></div>
                <div className="px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Last Name *</label><input type="text" placeholder="Your last name" value={formData.lastName} onChange={e => updateField("lastName", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors" /></div>
              </div>
              <div className="mb-4 px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email Address *</label><input type="email" placeholder="your@email.com" value={formData.email} onChange={e => updateField("email", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors" /></div>
              <div className="mb-4 px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Phone Number *</label><input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => updateField("phone", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors" /></div>
              <div className="mb-4 px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Organisation / Company</label><input type="text" placeholder="Where do you work? (optional)" value={formData.organisation} onChange={e => updateField("organisation", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors" /></div>
              <div className="mb-6 px-1"><label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">How did you hear about Shakthi?</label><select value={formData.heardFrom} onChange={e => updateField("heardFrom", e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/30 text-foreground text-sm outline-none focus:border-primary transition-colors"><option value="">Select an option</option><option>Instagram</option><option>Friend or Colleague</option><option>Success369 Community</option><option>LinkedIn</option><option>Other</option></select></div>
              <div className="px-1"><button onClick={handleSubmit} className="w-full bg-primary text-white py-4 text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-primary/80 transition-all hover:-translate-y-0.5">Register Now — Pay ₹3,000</button></div>
              <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed px-1">Your registration details will be sent via email. Your spot is confirmed after payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="py-24 text-center">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">More Modules Coming</span>
            <h2>Communication is just the beginning.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">More Shakthi modules are in development. Each one follows the same principle — one skill, gone deep.</p>
          </motion.div>
          <div className="flex gap-3 flex-wrap justify-center mb-10">
            {["The Unfiltered Voice ✓ Available", "Networking", "Personal Branding", "Consistency", "Commitment", "Credibility"].map((tag, i) => (
              <span key={tag} className={`px-5 py-2.5 rounded-lg text-sm font-medium border ${i === 0 ? "border-primary text-primary bg-primary/5" : "border-border/30 text-muted-foreground"}`}>{tag}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto rounded-xl overflow-hidden border border-border/30 bg-card group focus-within:border-primary transition-colors">
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-4 bg-transparent text-foreground text-sm outline-none" />
            <button className="px-6 py-4 bg-foreground text-background text-sm font-semibold uppercase tracking-wider hover:bg-primary transition-colors flex items-center justify-center gap-2 shrink-0"><Bell size={14} /> Notify Me</button>
          </div>
        </div>
      </section>

      <ShakthiRegisterPopup open={popupOpen} onOpenChange={setPopupOpen} formData={formData} />
      <Footer />
    </div>
  );
};

export default ShakthiV2;
