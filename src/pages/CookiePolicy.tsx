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
    title: "What Are Cookies?",
    content: "Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit our website. They help the site recognize your device and store some information about your preferences or past actions.",
  },
  {
    title: "How We Use Cookies",
    content: "We use cookies to provide basic website functionality, improve your browsing experience, and analyze how our visitors interact with our content. This allows us to make the site more intuitive and ensure a smooth 'cinematic' user experience.",
  },
  {
    title: "Essential Cookies",
    content: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you, such as setting your privacy preferences or logging into secure areas.",
  },
  {
    title: "Performance & Analytics",
    content: "We use performance cookies, primarily via Google Analytics, to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.",
  },
  {
    title: "Managing Your Preferences",
    content: "You can change your cookie settings at any time by clicking the 'Cookie Settings' link in the footer or by adjusting your browser settings. Please note that disabling essential cookies may affect the functionality of certain parts of the website.",
  },
  {
    title: "Third-Party Cookies",
    content: "In some cases, we use cookies provided by trusted third parties. For example, our site may include embedded video content or social media sharing buttons that set their own cookies to track engagement.",
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
            <motion.h1 custom={1} variants={fadeUp} className="mb-8">
              Cookie <span className="text-glow text-primary">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Transparency about how we use cookies to improve your digital journey.
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
            Last updated: March 2026. For questions, contact support@success369.org.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
