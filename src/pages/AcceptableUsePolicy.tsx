import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      "This Acceptable Use Policy explains the rules that apply when using the Success369 website, digital platform, learning programs, community spaces, and related services.",
      "By accessing or using the Success369 platform, you agree to use the platform responsibly and in accordance with this policy. This policy is part of the Success369 Terms of Use."
    ],
  },
  {
    title: "2. Purpose of This Policy",
    content: [
      "Success369 is a platform designed to support personal growth, learning, reflection, and meaningful conversations.",
      "This policy exists to ensure that the platform remains safe and respectful for all users, digital resources are used responsibly, intellectual property is protected, and the integrity of the learning environment is maintained."
    ],
  },
  {
    title: "3. Permitted Use of the Platform",
    content: [
      "You may use the Success369 platform to access educational content, participate in coaching sessions, join community activities, attend webinars/events, and access learning materials.",
      "All use must be lawful, respectful, and aligned with the purpose of personal learning and development."
    ],
  },
  {
    title: "4. Prohibited Activities",
    content: [
      "Illegal Activities: You may not use the platform to violate laws, promote illegal activities, or distribute unlawful content.",
      "Harassment or Harmful Behaviour: You must not harass, threaten, or intimidate other users, or post discriminatory/hateful content.",
      "Misuse of Platform Resources: You must not attempt to hack, disrupt systems, introduce malware, or gain unauthorized access. Attempts to reverse-engineer platform software are strictly prohibited.",
      "Intellectual Property Violations: You may not copy, distribute, or reproduce Success369 content without permission, or infringe on others' copyrights.",
      "Spam and Commercial Misuse: Users must not send spam, promote unrelated products, or conduct unauthorized marketing."
    ],
  },
  {
    title: "5. User Content and Community Participation",
    content: [
      "Contributions must be respectful and constructive. Users are responsible for the content they post. Success369 reserves the right to remove any content that violates this policy."
    ],
  },
  {
    title: "6. Protection of Platform Integrity",
    content: [
      "Users must not engage in actions that may harm the functioning or integrity of the platform, including attempting to overload systems, interfere with security, or scrape data without authorization."
    ],
  },
  {
    title: "7. Monitoring and Enforcement",
    content: [
      "Success369 may monitor platform usage to ensure compliance. Violations may result in content removal, restricted access, account termination, or reporting to authorities."
    ],
  },
  {
    title: "8. Reporting Violations",
    content: [
      "If you believe someone is violating this policy, please report it to support@success369.org. We will review reported issues and take appropriate action."
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "Success369 may update this policy periodically. Continued use of the platform after updates constitutes acceptance of the revised policy."
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For questions about this Acceptable Use Policy, please contact:",
      "Success369 Private Limited\nEmail: support@success369.org\nRegistered Office: Jayanagar 9th Block, Bangalore, India"
    ],
  },
];

const AcceptableUsePolicy = () => {
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
              Acceptable <span className="text-glow text-primary italic font-normal">Use Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Guidelines for a respectful, safe, and productive Success369 digital environment.
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

export default AcceptableUsePolicy;
