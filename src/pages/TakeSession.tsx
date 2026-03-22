import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Sparkles, Heart, Users, Compass, CheckCircle2, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";
import { submitToFormspree } from "@/lib/form-helpers";

// fadeUp imported from @/lib/animations

const sessionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  phone: z.string().trim().max(20, "Phone must be under 20 characters").optional().or(z.literal("")),
  message: z.string().trim().max(500, "Message must be under 500 characters").optional().or(z.literal("")),
});

type SessionFormValues = z.infer<typeof sessionSchema>;

const infoSections = [
  {
    icon: Sparkles,
    title: "What the Session Is",
    content: "A warm, unhurried conversation — not a sales call, not an assessment, not a pitch. It's a space for you to explore what's present for you right now, ask questions, and get a sense of whether the Success369 approach resonates with where you are in your life and leadership.",
  },
  {
    icon: Users,
    title: "Who It's For",
    content: "Anyone curious about the Success369 Journeys. Whether you've read the book, been referred by a colleague, or simply feel drawn to something deeper — this session is your first contact point. No prerequisites, no expectations.",
  },
  {
    icon: Heart,
    title: "What to Expect",
    content: "A 30-minute conversation that's entirely about you. We'll listen to what's alive for you, share a little about how the Journeys work, and help you sense which path — if any — might be right for your next step. There's no pressure, no obligation, and no follow-up you don't want.",
  },
  {
    icon: Compass,
    title: "How It Helps You Choose",
    content: "By the end of the session, you'll have a clearer sense of whether MAYA, GITA, SARVAM, or SHAKTI matches your current needs. Or you might realise it's not the right time — and that's equally valuable. The session exists to serve your clarity, not our pipeline.",
  },
];

const TakeSession = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<SessionFormValues>({
    resolver: zodResolver(sessionSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: SessionFormValues) => {
    const success = await submitToFormspree(data, "Session Request: Take a Session");
    
    if (success) {
      setSubmitted(true);
      toast.success("Your session request has been received! We'll be in touch soon.");
    } else {
      toast.error("Failed to send request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Take a Session — Your First Step | Success369</title>
        <meta name="description" content="Book a 30-minute session with Success369. No pitch, no pressure — just a warm conversation to explore what's next for your journey." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[140px]" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                First Contact
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-8"
            >
              Take a
              <br />
              <span className="text-glow text-primary">Session</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            >
              No pitch. No pressure. Just a warm, honest conversation to explore what's alive for you — and whether a Success369 Journey is the right next step.
            </motion.p>

            <motion.div custom={3} variants={fadeUp}>
              <a
                href="#booking"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-primary-foreground bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
              >
                Take a Session
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info sections */}
      <section className="section bg-card/10 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="container-custom space-y-16">
          {infoSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <section.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">{section.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Book Your Session</span>
            <h2 className="mb-4">
              Ready to begin?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2">Request Received!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => { setSubmitted(false); form.reset(); }}
                  className="rounded-full"
                >
                  Submit Another Request
                </Button>
              </motion.div>
            ) : (
              <>
                <h3 className="mb-6">Take a Session</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="bg-background/50 border-border/50 focus:border-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                className="bg-background/50 border-border/50 focus:border-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 ..."
                              className="bg-background/50 border-border/50 focus:border-primary/50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything you'd like us to know?</FormLabel>
                          <FormControl>
                            <textarea
                              rows={4}
                              placeholder="Optional — share what's on your mind or what drew you here..."
                              className="flex w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full rounded-full h-12 text-sm font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-primary-foreground"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Take a Session
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TakeSession;
