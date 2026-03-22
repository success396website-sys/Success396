import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
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
    title: "1. Company Information",
    content: [
      "This website and the Success369 platform are operated by Success369 Private Limited.",
      "Registered Office: “KOKARYA, Business Synergy Center, Nagananda Commercial Complex, No. 07/3, 15/1, 185/2, 185/A, Second Floor, 18th Main Road, Jayanagar 9th Block, Bangalore, Karnataka, India – 560041.",
      "Email: support@success369.org"
    ],
  },
  {
    title: "2. About the Platform",
    content: [
      "Success369 is a philosophy-led, systems-driven platform provideing personal development journeys, coaching programs, leadership tools, digital learning content, podcasts, roundtables, and community experiences through the Success369 website and related digital platforms."
    ],
  },
  {
    title: "3. Governing Law",
    content: [
      "This website and all services provided through the Success369 platform are governed by the laws of India.",
      "Any disputes arising in connection with the use of the website or services shall be subject to the jurisdiction of the courts located in Bengaluru, Karnataka, India, unless otherwise required by applicable consumer protection laws."
    ],
  },
  {
    title: "4. Compliance with Data Protection Laws",
    content: [
      "Success369 is committed to protecting user privacy and handling personal data responsibly. Our data protection practices are designed to align with India’s Digital Personal Data Protection Act, 2023 (DPDP Act), applicable provisions under the Information Technology Act, and relevant international data protection frameworks where applicable.",
      "Users can learn more about how their data is handled in our Privacy Policy."
    ],
  },
  {
    title: "5. Grievance Redressal",
    content: [
      "If you have any concerns, complaints, or questions related to personal data usage, privacy rights, platform usage, or purchases, you may contact us.",
      "Email: support@success369.org",
      "We aim to respond to all inquiries and grievances within a reasonable timeframe, as expected under India’s data protection framework."
    ],
  },
  {
    title: "6. Intellectual Property Notice",
    content: [
      "All content available on the Success369 website—including text, frameworks, programs, methodologies, graphics, videos, course materials, and publications—is the intellectual property of Success369 Private Limited, unless otherwise stated.",
      "Unauthorized reproduction, distribution, or commercial use of any material from this website is strictly prohibited without prior written permission."
    ],
  },
  {
    title: "7. Third-Party Services",
    content: [
      "The Success369 website may integrate with third-party services including payment gateways (Razorpay/Stripe), analytics tools, and logistics providers for shipping physical products. These third-party services operate under their own terms and privacy policies."
    ],
  },
  {
    title: "8. Website Availability",
    content: [
      "While Success369 strives to ensure continuous availability, we do not guarantee uninterrupted access. The platform may occasionally be unavailable due to maintenance, technical upgrades, network disruptions, or circumstances beyond our control."
    ],
  },
  {
    title: "9. Updates to This Notice",
    content: [
      "Success369 may update this Contact & Legal Notice from time to time. Any changes will be reflected by updating the Last Updated date at the top of this page."
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For any inquiries regarding the Success369 platform, please contact:",
      "Success369 Private Limited\nEmail: support@success369.org\nRegistered Office: Jayanagar 9th Block, Bangalore, India"
    ],
  },
];

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Legal Notice | Success369</title>
        <meta name="robots" content="noindex" />
      </Helmet>
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
              Contact & <span className="text-glow text-primary italic font-normal">Legal Notice</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Essential company information, governing laws, and compliance details for Success369.
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

export default LegalNotice;
