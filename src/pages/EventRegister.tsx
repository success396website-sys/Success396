import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, Calendar, MapPin, Clock, Users, CheckCircle2, Send, Sparkles } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allEvents } from "@/data/events-list";
import { fadeUp } from "@/lib/animations";

const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  attendees: z.string().default("1"),
  specialRequirements: z.string().trim().max(500).optional().or(z.literal("")),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const EventRegister = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = allEvents.find((e) => e.slug === slug);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", phone: "", attendees: "1", specialRequirements: "" },
  });

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Event not found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Link to="/events" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const onSubmit = (data: RegisterFormValues) => {
    console.log("📋 Event Registration:", { event: event.title, ...data });
    setSubmitted(true);
    toast.success("Registration successful! You'll receive a confirmation email shortly.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Register — {event.title} | Success369</title>
        <meta name="description" content={`Register for ${event.title}. ${event.description}`} />
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
              <p className="font-display text-xs uppercase tracking-[0.4em] text-primary font-bold">Event Registration</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="mb-4 sm:mb-6">
              Register for <br />
              <span className="text-primary italic">{event.title}</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              {event.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Event Info + Form */}
      <section className="relative pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">
            {/* Left — Event Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30 sticky top-28">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Event Details</h3>
                
                {/* Event Image */}
                <div className="rounded-2xl overflow-hidden mb-6 border border-border/30">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Calendar, label: event.date },
                    { icon: Clock, label: event.time },
                    { icon: MapPin, label: event.location },
                    ...(event.spots ? [{ icon: Users, label: event.spots }] : []),
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground/80 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                {event.highlights && (
                  <div className="pt-6 border-t border-border/30">
                    <p className="text-xs uppercase tracking-wider text-primary/60 font-bold mb-4">What You'll Experience</p>
                    <ul className="space-y-3">
                      {event.highlights.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium mt-6 hover:gap-3 transition-all"
                >
                  <ArrowLeft size={14} /> Back to event details
                </Link>
              </div>
            </motion.div>

            {/* Right — Registration Form */}
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">You're Registered!</h2>
                  <p className="text-muted-foreground text-lg mb-2">We've received your registration for:</p>
                  <p className="text-primary font-semibold text-lg mb-6">{event.title}</p>
                  <p className="text-muted-foreground mb-8">A confirmation email with all the details will be sent to you shortly.</p>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Browse More Events
                  </Link>
                </motion.div>
              ) : (
                <div className="p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/30">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">Register Now</h3>
                      <p className="text-muted-foreground text-sm">Secure your spot today</p>
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

                      <FormField control={form.control} name="attendees" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Attendees</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                              {[1, 2, 3, 4, 5].map(n => (
                                <option key={n} value={String(n)}>{n} {n === 1 ? "person" : "people"}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="specialRequirements" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Requirements (optional)</FormLabel>
                          <FormControl>
                            <textarea
                              {...field}
                              rows={3}
                              placeholder="Any dietary needs, accessibility requirements, or questions?"
                              className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <Button type="submit" size="lg" className="w-full gap-2 uppercase tracking-wider font-bold text-base h-14 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500">
                        <Send size={18} /> Register Now
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

export default EventRegister;
