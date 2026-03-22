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
    title: "1. A Different Kind of Community",
    content: [
      "Success369 is not designed as a social network. It is a thinking space. A building space. A discipline-driven environment for individuals and organisations committed to meaningful achievement.",
      "People enter this ecosystem for different reasons: to find clarity, make a critical decision, rebuild alignment, design their next chapter, or build something that endures.",
      "But everyone who enters shares one trait: a refusal to settle for accidental success. The Success369 Community exists to support that commitment."
    ],
  },
  {
    title: "2. The Standard We Expect",
    content: [
      "Participation in the Success369 ecosystem requires a level of responsibility, seriousness, and mutual respect.",
      "This community is built for people who: think independently, speak honestly, engage respectfully, value disciplined thinking, and contribute constructively.",
      "If you are here only to consume motivation, this environment may feel demanding. If you are here to build something meaningful, you are in the right place."
    ],
  },
  {
    title: "3. Our Values in Practice",
    content: [
      "Proven Excellence: We value rigor over noise. Ideas shared within this community should aim to advance understanding, not dilute it.",
      "Radical Honesty: Clarity is respect. We welcome honest disagreement but do not welcome manipulation, exaggeration, or intellectual dishonesty.",
      "Integrity Always: Trust is the foundation of the Success369 ecosystem. Members are expected to engage ethically, respect commitments, and acknowledge the work of others.",
      "Deep Empowerment: Success369 does not create dependency. It builds capability. This community encourages individuals to think independently and take ownership of their decisions.",
      "Absolute Privacy: Respecting confidentiality is essential. What is shared within the community must be treated with discipline, discretion, and respect."
    ],
  },
  {
    title: "4. How We Engage With Each Other",
    content: [
      "Healthy communities require clear expectations. Members of the Success369 ecosystem are expected to engage with respect and professionalism. Constructive disagreement is welcome. Disrespect is not."
    ],
  },
  {
    title: "5. What Does Not Belong Here",
    content: [
      "To protect the integrity of the community, the following behaviours are not permitted: harassment, intimidation, discrimination, spam, self-promotion, or unauthorized copying of Success369 intellectual property."
    ],
  },
  {
    title: "6. Protecting the Learning Environment",
    content: [
      "Success369 reserves the right to take appropriate action when behaviour violates this Charter, including removing content, issuing warnings, or terminating access."
    ],
  },
  {
    title: "7. A Community of Builders",
    content: [
      "Success369 is not a passive audience. It is a community of individuals who are actively designing their lives, organisations, and contributions to the world."
    ],
  },
  {
    title: "8. The Responsibility We Share",
    content: [
      "The Success369 Community exists to support people who are committed to engineering meaningful success. When these standards are upheld, the community becomes a shared architecture for growth."
    ],
  },
  {
    title: "9. Contact",
    content: [
      "For concerns related to community conduct or violations of this Charter, please contact:",
      "Success369 Private Limited\nEmail: support@success369.org\nRegistered Office: Jayanagar 9th Block, Bangalore, India"
    ],
  },
];

const CommunityCharter = () => {
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
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">Community</p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>
            <motion.h1 custom={1} variants={fadeUp} className="mb-8 font-light">
              Community <span className="text-glow text-primary italic font-normal">Charter</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              The Culture of the Success369 Ecosystem. Built for builders, thinkers, and seekers of clarity.
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

export default CommunityCharter;
