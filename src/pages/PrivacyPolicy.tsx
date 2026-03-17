import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly, such as your name, email address, phone number, and any messages you submit through our contact or booking forms. We also automatically collect certain technical data when you visit our website, including your IP address, browser type, device information, and pages visited.",
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to respond to your enquiries, process session bookings, send you relevant updates about Success369 programmes and events (only with your consent), improve our website and services, and comply with legal obligations. We never sell your personal data to third parties.",
  },
  {
    title: "Data Storage & Security",
    content: "Your personal data is stored securely using industry-standard encryption and security measures. We retain your information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Access to personal data is restricted to authorised personnel only.",
  },
  {
    title: "Cookies & Tracking",
    content: "Our website uses essential cookies to ensure proper functionality and optional analytics cookies to help us understand how visitors use the site. You can manage your cookie preferences through your browser settings. We do not use cookies for advertising or profiling purposes.",
  },
  {
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal data at any time. You may also withdraw consent for marketing communications, request data portability, or lodge a complaint with your local data protection authority. To exercise any of these rights, please contact us at support@success369.org.",
  },
  {
    title: "Third-Party Services",
    content: "We may use trusted third-party services for hosting, analytics, and form processing. These providers are bound by data protection agreements and only process data on our behalf. We do not share your personal information with any third party for their own marketing purposes.",
  },
  {
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any significant changes will be communicated via our website. We encourage you to review this page periodically.",
  },
];

const PrivacyPolicy = () => {
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
              Privacy <span className="text-glow text-primary">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Your privacy matters to us. Here's how we collect, use, and protect your information.
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

export default PrivacyPolicy;
