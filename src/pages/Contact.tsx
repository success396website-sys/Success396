import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  Instagram, Linkedin, Youtube, ArrowRight,
} from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitToFormspree } from "@/lib/form-helpers";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  phone: z.string().trim().max(20, "Phone must be under 20 characters").optional().or(z.literal("")),
  subject: z.string().min(1, "Please select a subject"),
  profession: z.string().trim().min(1, "Work/Profession is required"),
  country: z.string().trim().min(1, "Country is required"),
  experience: z.string().trim().min(1, "Experience is required"),
  leadingTeam: z.string().min(1, "Please select an option"),
  message: z.string().trim().max(1000, "Message must be under 1000 characters").optional().or(z.literal("")),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const subjects = [
  "General Inquiry",
  "Program - MAYA",
  "Program - GITA",
  "Program - SARVAM",
  "Program - SHAKTI",
  "Take a Session",
  "Corporate Training",
  "Speaking Engagement",
  "Partnership",
  "Other",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "support@success369.org", href: "mailto:support@success369.org" },
  { icon: MapPin, label: "Corporate Office", value: "Success369 Private Limited, KOKARYA, Business Synergy Center, \"NAGANANDA COMMERCIAL COMPLEX\", NO.07/3, 15/1, 185/2, 185/A, SECOND FLOOR, 18TH MAIN ROAD, JAYANAGAR 9TH BLOCK, BENGALURU-560041" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thesuccess369/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/success369" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@the369leader" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get("subject");

  const getInitialSubject = () => {
    if (!subjectParam) return "";
    const matched = subjects.find(s => 
      s.toLowerCase().includes(subjectParam.toLowerCase())
    );
    return matched || "";
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: getInitialSubject(),
      profession: "",
      country: "",
      experience: "",
      leadingTeam: "" as ContactFormValues["leadingTeam"],
      message: "",
    },
  });

  // Also update if params change while component is mounted
  useEffect(() => {
    const newSubject = getInitialSubject();
    if (newSubject) {
      form.setValue("subject", newSubject);
    }
  }, [subjectParam, form]);

  const onSubmit = async (data: ContactFormValues) => {
    // Send to Formspree
    const success = await submitToFormspree(data, `Contact Form: ${data.subject}`);
    
    if (success) {
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch shortly.");
    } else {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Contact Us — Get in Touch | Success369</title>
        <meta name="description" content="Reach out to the Success369 team. Whether it's about our programs, book, events, or partnerships — we'd love to hear from you." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Let's Connect
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-primary via-pink-400 to-primary bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Thank you for the interest, before our team reaches you and discuss, please help us to understand you better.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="relative section pb-20">
        <div className="container-custom grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeUp}
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
                <h3 className="mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => { setSubmitted(false); form.reset(); }}
                  className="rounded-full"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                <h2 className="font-display text-xl font-semibold mb-6">Send a Message</h2>
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

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="profession"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work/Profession *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your profession"
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
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country you work *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your country"
                                className="bg-background/50 border-border/50 focus:border-primary/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience in years *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 5"
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
                        name="leadingTeam"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Are you leading a team? *</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background focus:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              >
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background focus:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select a subject</option>
                              {subjects.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
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
                          <FormLabel>Any specific challenge you currently face that you want to share with us?</FormLabel>
                          <FormControl>
                            <textarea
                              rows={5}
                              placeholder="Tell us about your challenges..."
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
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </>
            )}
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Info cards */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i + 1}
                variants={fadeUp}
                className="group relative rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-5 flex items-start gap-4 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={5}
              variants={fadeUp}
              className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-5"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group"
                  >
                    <s.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={6}
              variants={fadeUp}
              className="rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-64 bg-card/60 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Nagananda%20Commercial%20Complex%20Jayanagar%209th%20Block%20Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.3) contrast(1.1) invert(0.9) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Success369 Office Location"
                  className="absolute inset-0 z-0"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
