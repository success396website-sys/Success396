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
      "This Disclaimer applies to the use of the Success369 website, content, programs, events, publications, and related services.",
      "By accessing or using the Success369 website or participating in its programs or events, you acknowledge that you have read and understood this Disclaimer."
    ],
  },
  {
    title: "2. Educational and Informational Purpose",
    content: [
      "All content provided through the Success369 platform—including website articles, coaching programs, podcasts, books, videos, and events—is intended for educational and informational purposes only.",
      "The information shared on the platform is designed to support personal reflection, learning, and development. It should not be interpreted as professional advice tailored to your individual circumstances."
    ],
  },
  {
    title: "3. No Professional Advice",
    content: [
      "Success369 content does not constitute legal, financial, investment, medical, or psychological therapy/counseling advice.",
      "If you require advice in these areas, you should consult a qualified professional licensed in the relevant field."
    ],
  },
  {
    title: "4. Coaching Relationship",
    content: [
      "Participation in Success369 programs or coaching sessions does not establish a professional therapist–client, lawyer–client, financial advisor–client, or doctor–patient relationship.",
      "Success369 provides development coaching and educational frameworks, not professional services regulated by professional licensing bodies."
    ],
  },
  {
    title: "5. Personal Responsibility",
    content: [
      "By using the Success369 platform, you acknowledge that you are responsible for your own decisions, actions, and results.",
      "Outcomes may vary depending on individual circumstances, effort, and external factors. Success369 cannot guarantee specific personal, professional, or financial outcomes."
    ],
  },
  {
    title: "6. No Guarantees of Results",
    content: [
      "Individual results will vary. Any testimonials, examples, or success stories shared through the platform are illustrative and should not be interpreted as guarantees of similar outcomes."
    ],
  },
  {
    title: "7. Podcasts, Events, and Media Content",
    content: [
      "Views expressed by guest speakers or participants in podcasts and events represent their personal perspectives and do not necessarily reflect the views of Success369.",
      "Success369 is not responsible for opinions expressed by third-party contributors."
    ],
  },
  {
    title: "8. Accuracy of Information",
    content: [
      "While reasonable efforts are made to provide accurate and useful information, Success369 makes no guarantees regarding the completeness, accuracy, or timeliness of content."
    ],
  },
  {
    title: "9. External Links and Third-Party Resources",
    content: [
      "The Success369 website may contain links to third-party websites or resources for convenience. Success369 does not control or endorse the content, policies, or practices of external websites."
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Success369 shall not be liable for any loss or damage arising from reliance on information provided on the website, participation in programs, or temporary technical issues."
    ],
  },
  {
    title: "11. Intellectual Property",
    content: [
      "All frameworks, methodologies, and materials provided through the Success369 platform remain the intellectual property of Success369 Private Limited unless otherwise stated."
    ],
  },
  {
    title: "12. Acceptance of This Disclaimer",
    content: [
      "By accessing the Success369 website or participating in any service, you acknowledge that you understand and agree to this Disclaimer."
    ],
  },
  {
    title: "13. Contact",
    content: [
      "For questions regarding this Disclaimer, please contact Success369 Private Limited at support@success369.org.",
      "Registered Office: Jayanagar 9th Block, Bangalore, India"
    ],
  },
];

const Disclaimer = () => {
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
              Disclaimer <span className="text-glow text-primary italic font-normal">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Clarifying the educational nature and intended use of Success369 content.
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

export default Disclaimer;
