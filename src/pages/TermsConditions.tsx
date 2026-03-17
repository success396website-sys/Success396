import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing and using the Success369 website, booking any session, or purchasing any product or service, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    title: "Services Offered",
    content: "Success369 provides transformation journeys (MAYA, GITA, SARVAM, SHAKTI), free introductory sessions, events, workshops, and published materials including the Success369 book. All services are subject to availability and may be modified at our discretion.",
  },
  {
    title: "Booking & Payment",
    content: "Session bookings are confirmed only upon receipt of full payment or completion of the registration process. All prices are displayed in the applicable currency at the time of booking. We reserve the right to change pricing at any time, though confirmed bookings will be honoured at the original price.",
  },
  {
    title: "Intellectual Property",
    content: "All content on this website — including text, images, logos, frameworks, methodologies, and the Success369 brand — is the intellectual property of Success369 and Ivory Books Ltd. No content may be reproduced, distributed, or used without prior written permission.",
  },
  {
    title: "User Conduct",
    content: "You agree to use our website and services respectfully and lawfully. You must not submit false information, attempt to interfere with the website's functionality, or use our services for any purpose that is unlawful, harmful, or in violation of these terms.",
  },
  {
    title: "Limitation of Liability",
    content: "Success369 provides transformation and development experiences. While we are committed to the quality and integrity of our offerings, we do not guarantee specific outcomes. Our services are not a substitute for professional medical, psychological, or legal advice. To the fullest extent permitted by law, Success369 shall not be liable for any indirect, incidental, or consequential damages.",
  },
  {
    title: "Confidentiality",
    content: "All session content, conversations, and materials shared during Success369 programmes are confidential. Participants agree not to disclose any information about other participants or the specific methodologies shared during sessions without prior consent.",
  },
  {
    title: "Governing Law",
    content: "These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "Changes to Terms",
    content: "We reserve the right to update these Terms & Conditions at any time. Continued use of our website and services after changes are posted constitutes acceptance of the revised terms.",
  },
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible">
            <motion.div custom={0} variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">Legal</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="mb-8">
              Terms & <span className="text-glow text-primary">Conditions</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Please read these terms carefully before using our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative p-8 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h3 className="mb-3">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground/60 text-sm text-center pt-8"
          >
            Last updated: February 2026. For questions, contact support@success369.org.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
