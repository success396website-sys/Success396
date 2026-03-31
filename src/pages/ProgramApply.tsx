import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle2, Send, Sparkles, BookOpen, Target, Eye, Zap, Heart, Clock, Users, Globe } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { submitToFormspree } from "@/lib/form-helpers";
import { trackLead } from "@/lib/pixel";

const programDetails: Record<string, {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  icon: typeof BookOpen;
  duration: string;
  format: string;
  groupSize: string;
  features: string[];
}> = {
  GITA: {
    name: "GITA",
    fullName: "GITA — Clarity Before Action",
    tagline: "PAUSE",
    description: "A guided clarity session for those at a decision point, designed to reveal your next direction with confidence.",
    icon: Eye,
    duration: "3-hour guided session",
    format: "Online or In-Person",
    groupSize: "1:1 or small group",
    features: ["Self-understanding assessment", "Direction clarity mapping", "Confident decision framework", "Personalised next-step plan"],
  },
  MAYA: {
    name: "MAYA",
    fullName: "MAYA — Face What's Real",
    tagline: "CONFRONT",
    description: "A deep-dive journey into the patterns, beliefs, and illusions that silently hold you back from authentic success.",
    icon: Heart,
    duration: "6-week journey",
    format: "Online or In-Person",
    groupSize: "Cohort-based",
    features: ["Pattern recognition sessions", "Belief system audit", "Emotional intelligence deepening", "Breakthrough coaching calls"],
  },
  SARVAM: {
    name: "SARVAM",
    fullName: "SARVAM — Build the System",
    tagline: "BUILD",
    description: "The architecture journey — designing and implementing the systems, habits, and structures that make your success sustainable.",
    icon: Target,
    duration: "12-week intensive",
    format: "Hybrid",
    groupSize: "Small cohort",
    features: ["Personal operating system design", "Habit architecture framework", "Productivity system setup", "Accountability partnerships"],
  },
  SHAKTI: {
    name: "SHAKTI",
    fullName: "SHAKTI — Lead & Scale",
    tagline: "LEAD",
    description: "The leadership accelerator — stepping into your power to lead teams, organisations, and movements with aligned authority.",
    icon: Zap,
    duration: "Ongoing mentorship",
    format: "In-Person & Virtual",
    groupSize: "By invitation",
    features: ["Executive leadership coaching", "Organisational alignment", "Legacy design framework", "Global leader network access"],
  },
};

const applySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  currentRole: z.string().trim().min(1, "Please share your current role").max(200),
  experience: z.string().default("mid"),
  motivation: z.string().trim().min(10, "Please share why you'd like to join").max(1000),
});

type ApplyFormValues = z.infer<typeof applySchema>;

const ProgramApply = () => {
  const { program } = useParams<{ program: string }>();
  const programKey = program?.toUpperCase() || "";
  const details = programDetails[programKey];
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: { name: "", email: "", phone: "", currentRole: "", experience: "mid", motivation: "" },
  });

  if (!details) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Program not found</h1>
          <p className="text-muted-foreground mb-8">The program you're looking for doesn't exist.</p>
          <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            <ArrowLeft size={16} /> View All Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ProgramIcon = details.icon;

  const onSubmit = async (data: ApplyFormValues) => {
    const success = await submitToFormspree({ program: details.name, ...data }, `Program Application: ${details.name}`);
    
    if (success) {
      trackLead(`${details.name} Application`);
      setSubmitted(true);
      toast.success(`Application for ${details.name} submitted! We'll review and get back to you.`);
    } else {
      toast.error("Failed to submit application. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Apply for {details.name} — {details.tagline} | Success369</title>
        <meta name="description" content={`Apply for the ${details.fullName} program. ${details.description}`} />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[140px]" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">{details.tagline}</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="mb-4 sm:mb-6">
              Apply for <br />
              <span className="text-primary italic">{details.name}</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              {details.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program Info + Form */}
      <section className="relative pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            {/* Left — Program Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30 sticky top-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <ProgramIcon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{details.name}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Clock, label: details.duration },
                    { icon: Globe, label: details.format },
                    { icon: Users, label: details.groupSize },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground/80 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border/30">
                  <p className="text-xs uppercase tracking-wider text-primary/60 font-bold mb-4">What You'll Gain</p>
                  <ul className="space-y-3">
                    {details.features.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/program-${details.name.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium mt-6 hover:gap-3 transition-all"
                >
                  <ArrowLeft size={14} /> Learn more about {details.name}
                </Link>
              </div>
            </motion.div>

            {/* Right — Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={36} className="text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h2>
                  <p className="text-muted-foreground text-lg mb-2">We've received your application for:</p>
                  <p className="text-primary font-semibold text-lg mb-6">{details.fullName}</p>
                  <p className="text-muted-foreground mb-8">Our team will review your application and reach out soon.</p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Browse All Programs
                  </Link>
                </motion.div>
              ) : (
                <div className="p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Apply for {details.name}</h3>
                      <p className="text-muted-foreground text-sm">Tell us about yourself</p>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+91 98765 43210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="currentRole" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Role / Occupation *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Product Manager at TechCorp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="experience" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="early">Early Career (0–3 years)</option>
                              <option value="mid">Mid Career (3–10 years)</option>
                              <option value="senior">Senior / Leadership (10+ years)</option>
                              <option value="executive">Executive / C-Suite</option>
                              <option value="entrepreneur">Entrepreneur / Founder</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="motivation" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Why do you want to join {details.name}? *</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={4}
                              placeholder={`What drew you to ${details.name}? What are you hoping to achieve?`}
                              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <Button type="submit" size="lg" className="w-full gap-2 uppercase tracking-wider font-bold text-base h-14 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500">
                        <Send size={18} /> Submit Application
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramApply;
