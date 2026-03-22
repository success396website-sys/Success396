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
    title: "1. Introduction",
    content: [
      "Success369 Private Limited (“Success369”, “we”, “our”, or “us”) respects your privacy and is committed to protecting the personal information you share with us.",
      "This Privacy Policy explains how we collect, use, store, and protect your information when you access or interact with the Success369 website, programs, events, publications, podcasts, and digital services. Our goal is simple: to treat your information responsibly, transparently, and securely."
    ],
  },
  {
    title: "2. About Success369",
    content: [
      "Success369 Private Limited operates the Success369 platform and related services designed to support personal and professional development through structured frameworks, coaching programs, digital tools, and educational content.",
      "Registered Office:",
      "Success369 Private Limited\n“KOKARYA, Business Synergy Center\nNagananda Commercial Complex\nNo. 07/3, 15/1, 185/2, 185/A\nSecond Floor, 18th Main Road\nJayanagar 9th Block\nBangalore, Karnataka – 560041\nIndia",
      "For privacy inquiries you may contact: support@success369.org"
    ],
  },
  {
    title: "3. Information We Collect",
    content: [
      "We collect only the information necessary to operate the website and provide our services.",
      "Personal Information: When you interact with Success369, we may collect information such as your name, email address, phone number, city/country, professional/educational background, and information shared during consultations or program registration.",
      "You may provide this information when: contacting us through the website, registering for a program, booking a consultation session, or subscribing to updates.",
      "Website Usage Information: When you visit our website, technical information may automatically be collected, including IP address, browser type, device type, pages visited, and time spent on the site. This helps us improve the usability and performance of the website."
    ],
  },
  {
    title: "4. Events, Podcasts, and Media Participation",
    content: [
      "Success369 may organize or participate in webinars, workshops, live events, seminars, podcasts, roundtables, and recorded conversations.",
      "When you participate, limited information such as your name or participation details may be collected. Some sessions may be recorded for educational or promotional purposes.",
      "By participating, you acknowledge that recordings or excerpts may be used in Success369 educational content, podcasts, or media publications."
    ],
  },
  {
    title: "5. Educational Content and Publications",
    content: [
      "Success369 publishes educational materials including books, podcasts, digital learning resources, and coaching frameworks.",
      "Interactions related to these materials — such as registrations, downloads, or community engagement — may involve limited collection of personal information for communication and service delivery."
    ],
  },
  {
    title: "6. How We Use Your Information",
    content: [
      "Your information may be used to respond to inquiries, schedule consultations, provide information about programs or events, improve the website experience, communicate updates, and maintain website security.",
      "We do not sell personal information to third parties."
    ],
  },
  {
    title: "7. Cookies and Tracking Technologies",
    content: [
      "The Success369 website may use cookies or similar technologies to improve website functionality, understand visitor behavior, and support analytics tools. Details are explained in our Cookie Policy."
    ],
  },
  {
    title: "8. Data Protection and Security",
    content: [
      "We take reasonable measures to protect personal information from unauthorized access, misuse, or disclosure, including secure hosting infrastructure and restricted access.",
      "However, no internet-based system can guarantee absolute security."
    ],
  },
  {
    title: "9. Third-Party Services",
    content: [
      "Success369 may use trusted third-party providers for website hosting, analytics services, scheduling platforms, and communication tools. These providers process limited information solely to support our services."
    ],
  },
  {
    title: "10. Your Rights",
    content: [
      "Depending on applicable laws, you may have the right to request access to your personal data, request correction of inaccurate information, request deletion of your data, or withdraw consent for communications.",
      "Requests may be sent to: support@success369.org"
    ],
  },
  {
    title: "11. Children’s Privacy",
    content: [
      "Success369 services are primarily intended for adults and professionals. We do not knowingly collect personal information from individuals under 18 years of age without appropriate consent."
    ],
  },
  {
    title: "12. Policy Updates",
    content: [
      "This Privacy Policy may be updated from time to time to reflect improvements to our services or changes in legal requirements. Continued use of the website after updates indicates acceptance of the revised policy."
    ],
  },
  {
    title: "13. Contact",
    content: [
      "If you have questions about this Privacy Policy or how your information is handled, please contact:",
      "Success369 Private Limited\nBangalore, India\nEmail: support@success369.org"
    ],
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
            <motion.h1 custom={1} variants={fadeUp} className="mb-8 font-light">
              Privacy <span className="text-glow text-primary italic font-normal">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Your privacy matters to us. Here's how we collect, use, and protect your information at Success369.
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
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative p-8 rounded-3xl bg-card/10 backdrop-blur-sm border border-white/5"
            >
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <h3 className="mb-6 font-display text-xl font-bold tracking-tight text-foreground/90">{section.title}</h3>
              <div className="space-y-4">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed font-light whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground/60 text-sm text-center pt-8 font-light"
          >
            Effective Date: 02 March 2026. Last updated: 02 March 2026. <br />
            For questions, contact support@success369.org.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
