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
    title: "1. Introduction",
    content: [
      "These Terms of Use (“Terms”) govern your access to and use of the Success369 website, digital platform, programs, content, and related services.",
      "The website and services are operated by Success369 Private Limited (“Success369”, “we”, “our”, or “us”).",
      "By accessing or using the Success369 website or services, you agree to comply with these Terms. If you do not agree, you should not use the platform."
    ],
  },
  {
    title: "2. About Success369",
    content: [
      "Success369 is a personal and professional development platform provideing coaching journeys, educational content, digital tools, publications, workshops, and community initiatives designed to help individuals and organisations pursue meaningful growth."
    ],
  },
  {
    title: "3. Eligibility",
    content: [
      "You must be at least 18 years old to use the Success369 platform. By using this website, you confirm that your provided information is accurate and you are legally capable of entering into this agreement."
    ],
  },
  {
    title: "4. Platform Services",
    content: [
      "Success369 provides services including coaching sessions, guided journeys, workshops, podcasts, books, and digital frameworks. Certain services may require registration, scheduling, or payment."
    ],
  },
  {
    title: "5. Intellectual Property Rights",
    content: [
      "All materials on the Success369 platform—including the Success369 Architecture, coaching methodologies, books, podcasts, and website design—are the exclusive property of Success369 Private Limited or its licensors.",
      "Users may not reproduce, distribute, or commercially exploit any Success369 content without prior written permission."
    ],
  },
  {
    title: "6. Framework Protection Clause",
    content: [
      "The frameworks and methodologies used within the Success369 platform are proprietary. Users may not replicate the Success369 methodology, create derivative programs, or represent Success369 concepts as their own."
    ],
  },
  {
    title: "7. Educational and Coaching Nature of Services",
    content: [
      "Success369 provides educational guidance and coaching programs. We do not provide legal, financial, medical, or psychological advice. Users remain responsible for their own decisions and outcomes."
    ],
  },
  {
    title: "8. Events, Podcasts and Media Participation",
    content: [
      "Some webinars and events may be recorded for educational or promotional purposes. By participating, you acknowledge that portions of discussions may be published. Participants who do not wish to appear should notify organizers beforehand."
    ],
  },
  {
    title: "9. User Conduct",
    content: [
      "Users agree to use the platform respectfully. Misuse, hacking, impersonation, or distribution of harmful content is strictly prohibited. We reserve the right to terminate access for users who violate these rules."
    ],
  },
  {
    title: "10. Community Participation",
    content: [
      "Participants in community discussions are expected to maintain respectful dialogue and avoid harassment. Failure to comply may result in removal from the community."
    ],
  },
  {
    title: "11. Payments and Program Enrollment",
    content: [
      "Pricing and payment terms for programs will be communicated at registration. Refunds and cancellations are governed by our separate Refund & Cancellation Policy."
    ],
  },
  {
    title: "12. Third-Party Links",
    content: [
      "The website may contain links to third-party platforms. Success369 is not responsible for the content or privacy practices of these external sites."
    ],
  },
  {
    title: "13. Limitation of Liability",
    content: [
      "The Success369 platform is provided “as is”. We shall not be liable for personal decisions made by users, indirect losses, or damages arising from the use of the website."
    ],
  },
  {
    title: "14. Changes to the Platform",
    content: [
      "Success369 may modify, update, or discontinue any part of the website or services at any time."
    ],
  },
  {
    title: "15. Updates to These Terms",
    content: [
      "We may update these Terms periodically. Continued use of the website after updates indicates acceptance of the revised Terms."
    ],
  },
  {
    title: "16. Governing Law and Jurisdiction",
    content: [
      "These Terms are governed by the laws of India. Any disputes shall fall under the jurisdiction of the courts in Bangalore, Karnataka, India."
    ],
  },
  {
    title: "17. Contact Information",
    content: [
      "For questions regarding these Terms, please contact Success369 Private Limited at support@success369.org."
    ],
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
            <motion.h1 custom={1} variants={fadeUp} className="mb-8 font-light">
              Terms of <span className="text-glow text-primary italic font-normal">Use</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Important information about using the Success369 platform and our professional services.
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
              transition={{ duration: 0.6, delay: i * 0.04 }}
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

export default TermsConditions;
