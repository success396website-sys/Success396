import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

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
      "This Cookie Policy explains how Success369 Private Limited (“Success369”, “we”, “our”, or “us”) uses cookies and similar technologies when you visit the Success369 website.",
      "Cookies help websites function efficiently, improve user experience, and provide insights into how visitors interact with the site.",
      "By continuing to use the Success369 website, you consent to the use of cookies as described in this policy, subject to the choices available to you."
    ],
  },
  {
    title: "2. What Are Cookies?",
    content: [
      "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. These files help websites remember preferences, browsing sessions, and analytics data to improve functionality and performance."
    ],
  },
  {
    title: "3. Types of Cookies We May Use",
    content: [
      "Essential Cookies: Necessary for the website to function properly, enabling features like navigation, security, and form submissions.",
      "Analytics Cookies: Help us understand visitor interaction, such as pages visited and time spent, to improve website usability.",
      "Functional Cookies: Remember choices you make, like language preferences or UI settings, for a more personalized experience.",
      "Third-Party Cookies: Placed by third-party services like analytics platforms or embedded media, governed by their own privacy policies."
    ],
  },
  {
    title: "4. Why We Use Cookies",
    content: [
      "Cookies help us ensure functionality, understand user interaction, improve performance, and provide a smoother browsing experience."
    ],
  },
  {
    title: "5. Cookie Consent",
    content: [
      "When you visit for the first time, a cookie banner allows you to choose whether to accept or manage non-essential cookies. Many privacy laws require this consent before placing tracking or analytics cookies."
    ],
  },
  {
    title: "6. Managing or Disabling Cookies",
    content: [
      "You can manage or disable cookies through your browser settings. Please note that disabling essential cookies may affect how the website functions."
    ],
  },
  {
    title: "7. Third-Party Services",
    content: [
      "We use trusted third-party services that may collect limited technical information like IP addresses and browsing behavior. We do not control how these providers use such information."
    ],
  },
  {
    title: "8. Updates to This Cookie Policy",
    content: [
      "This policy may be updated periodically to reflect changes in technology or legal requirements. The latest version will always be published on this page."
    ],
  },
  {
    title: "9. Contact",
    content: [
      "If you have questions about this policy, please contact Success369 Private Limited at support@success369.org."
    ],
  },
];

const CookiePolicy = () => {
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
              Cookie <span className="text-glow text-primary italic font-normal">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Transparency about how we use cookies to improve your digital journey and ensure platform stability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
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

export default CookiePolicy;
