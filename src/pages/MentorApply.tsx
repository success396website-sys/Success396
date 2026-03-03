import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Send, Users, Sparkles, Heart, Briefcase, Globe, BookOpen, Award } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const mentorSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  expertise: z.string().trim().min(1, "Please share your area of expertise").max(200),
  yearsExperience: z.string().default("10-15"),
  linkedIn: z.string().trim().max(300).optional().or(z.literal("")),
  bio: z.string().trim().min(20, "Please write at least a few sentences about yourself").max(1500),
  philosophy: z.string().trim().min(10, "Please share your coaching philosophy").max(1000),
});

type MentorFormValues = z.infer<typeof mentorSchema>;

const MentorApply = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<MentorFormValues>({
    resolver: zodResolver(mentorSchema),
    defaultValues: { name: "", email: "", phone: "", expertise: "", yearsExperience: "10-15", linkedIn: "", bio: "", philosophy: "" },
  });

  const onSubmit = (data: MentorFormValues) => {
    console.log("📋 Mentor Application:", data);
    setSubmitted(true);
    toast.success("Mentor application submitted! Our team will review and connect with you.");
  };

  const values = [
    { icon: Heart, title: "Philosophy-Led", desc: "We lead with clarity, congruence, and catalysis — not hype." },
    { icon: Award, title: "Proven Experience", desc: "We look for mentors with deep, real-world leadership track records." },
    { icon: Users, title: "Community Focus", desc: "Our mentors don't just teach — they steward transformation." },
    { icon: Globe, title: "Global Reach", desc: "From India to the world — your impact extends across borders." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Join As Mentor — Applications Open | Success369</title>
        <meta name="description" content="Apply to join the Success369 mentorship team. We're looking for experienced leaders and coaches aligned with our philosophy of clarity, congruence, and catalysis." />
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
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">Mentor Application</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="mb-4 sm:mb-6">
              Join as a <br />
              <span className="text-primary italic">Mentor</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Are you an experienced leader or coach aligned with our philosophy? Join our team of stewards to guide others toward clarity and sustainable success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values + Form */}
      <section className="relative pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            {/* Left — What We Look For */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30 sticky top-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">What We Look For</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-widest">In Our Mentors</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  {values.map(item => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.title}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border/30">
                  <p className="text-xs uppercase tracking-wider text-primary/60 font-bold mb-4">Ideal Background</p>
                  <ul className="space-y-3">
                    {[
                      "10+ years of leadership or coaching experience",
                      "Track record of mentoring individuals or teams",
                      "Alignment with values of integrity and clarity",
                      "Passion for human potential and transformation",
                      "Strong communication and empathetic listening",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Application Received!</h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Thank you for your interest in becoming a Success369 mentor. Our team will review your application and reach out within 7 business days.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Back to Home
                  </Link>
                </motion.div>
              ) : (
                <div className="p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Mentor Application</h3>
                      <p className="text-muted-foreground text-sm">Tell us about your experience</p>
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

                      <FormField control={form.control} name="expertise" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Area of Expertise *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Executive Coaching, Leadership Development" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="yearsExperience" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years of Experience</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              <option value="5-10">5–10 years</option>
                              <option value="10-15">10–15 years</option>
                              <option value="15-20">15–20 years</option>
                              <option value="20+">20+ years</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="linkedIn" render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="bio" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Brief Bio / Background *</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={4}
                              placeholder="Share your professional background, key achievements, and relevant experience..."
                              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="philosophy" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Coaching / Mentoring Philosophy *</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={3}
                              placeholder="What drives your approach to mentoring? How do you define meaningful impact?"
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

export default MentorApply;
