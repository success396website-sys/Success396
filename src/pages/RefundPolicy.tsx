import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  {
    title: "Refund Eligibility",
    content: "We want you to be fully satisfied with your Success369 experience. If for any reason you are not satisfied with a paid programme or product, you may request a refund within 14 days of purchase or booking confirmation, provided the session or programme has not yet commenced.",
  },
  {
    title: "Book Purchases",
    content: "Physical books may be returned within 14 days of delivery in their original, unused condition for a full refund. Digital/e-book purchases are non-refundable once the download link has been accessed. Shipping costs for returns are the responsibility of the buyer unless the item arrived damaged or defective.",
  },
  {
    title: "Programme & Session Refunds",
    content: "For MAYA, GITA, SARVAM, and SHAKTI programmes: cancellations made more than 7 days before the scheduled start date are eligible for a full refund. Cancellations made within 7 days of the start date may receive a 50% refund or a credit toward a future programme, at our discretion. Once a programme has begun, no refunds will be issued.",
  },
  {
    title: "Free Sessions",
    content: "Free introductory sessions carry no financial obligation. If you need to reschedule or cancel a free session, please provide at least 24 hours' notice so we can offer the slot to someone else.",
  },
  {
    title: "Events & Workshops",
    content: "Event tickets may be refunded up to 7 days before the event date. Within 7 days of the event, tickets are non-refundable but may be transferred to another person. If Success369 cancels an event, all ticket holders will receive a full refund.",
  },
  {
    title: "How to Request a Refund",
    content: "To request a refund, please email support@success369.org with your order number, name, and reason for the refund. We aim to process all refund requests within 5–10 business days. Refunds will be issued to the original payment method.",
  },
  {
    title: "Exceptions",
    content: "We reserve the right to refuse a refund if we believe the policy is being abused or if the terms above are not met. In cases of dispute, we will work in good faith to reach a fair resolution.",
  },
];

const RefundPolicy = () => {
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
              Refund <span className="text-glow text-primary">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Our commitment to fairness and transparency in all transactions.
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

export default RefundPolicy;
