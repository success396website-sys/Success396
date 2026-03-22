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
    title: "1. Introduction",
    content: [
      "This Refund & Cancellation Policy explains the terms under which refunds, cancellations, and rescheduling requests are handled for services and products offered by Success369 Private Limited (“Success369”, “we”, “our”, or “us”).",
      "This policy applies to all paid services including coaching sessions, programs (GITA, MAYA, SHAKTI, SARVAM), workshops, events, digital courses, and physical products sold through the Success369 website.",
      "By purchasing or enrolling in any Success369 product or service, you acknowledge and agree to this policy."
    ],
  },
  {
    title: "2. General Policy",
    content: [
      "Success369 programs and services require significant preparation and allocation of resources. Purchases are considered a commitment to participate. Refunds may only be issued under the specific conditions described in this policy, and are generally not issued for change of mind or personal circumstances."
    ],
  },
  {
    title: "3. Coaching Programs and Learning Journeys",
    content: [
      "Cancellation More Than 7 Days Before Start: Success369 may issue a refund after deducting administrative or processing charges.",
      "Cancellation Within 7 Days of Start: Success369 may offer a partial refund or credit toward a future program.",
      "After Program Has Started: Once the program has started or sessions have begun, no refunds will be issued because coaching slots are reserved and materials have been prepared."
    ],
  },
  {
    title: "4. Digital Courses and Online Content",
    content: [
      "Once access to digital materials (recorded sessions, member platforms, downloads) has been granted, fees paid are generally non-refundable."
    ],
  },
  {
    title: "5. Workshops, Seminars, and Events",
    content: [
      "More than 7 Days Before: Refund after deduction of administrative charges.",
      "3–7 Days Before: Partial refund or program credit may be offered.",
      "Less than 72 Hours: No refund will be issued.",
      "No-shows without prior cancellation are not eligible for refunds."
    ],
  },
  {
    title: "6. Consultation and Session Cancellations",
    content: [
      "Cancellations must be made at least 24 hours before the scheduled session. If a cancellation occurs within less than 24 hours, the session may be treated as completed and no refund will be issued."
    ],
  },
  {
    title: "7. Rescheduling Requests",
    content: [
      "Rescheduling is subject to availability and operational considerations. Success369 reserves the right to approve or decline rescheduling requests."
    ],
  },
  {
    title: "8. Physical Book Orders",
    content: [
      "Success369 may sell books through the website using authorized payment processors like Razorpay or Stripe. Books are shipped through authorized logistics partners."
    ],
  },
  {
    title: "9. Cancellation of Book Orders",
    content: [
      "Customers may request cancellation before the order has been shipped for a full refund. Once shipped, the return process must be followed."
    ],
  },
  {
    title: "10. Damaged or Incorrect Items",
    content: [
      "If you receive a damaged or incorrect item, notify us within 48 hours with your order number and photographs of the issue. Upon verification, we may offer a replacement or a refund."
    ],
  },
  {
    title: "11. Returns for Physical Books",
    content: [
      "Returns accepted within 7 days of delivery if the book is unused, undamaged, and original packaging is intact."
    ],
  },
  {
    title: "12. Return Shipping",
    content: [
      "Unless the product is defective or incorrectly delivered, the customer is responsible for return shipping costs."
    ],
  },
  {
    title: "13. Lost Shipments",
    content: [
      "If a shipment is confirmed lost by our courier partner, we will issue a replacement product or a full refund."
    ],
  },
  {
    title: "14. Refund Processing",
    content: [
      "Approved refunds will be processed to the original payment method. Processing typically takes 7–10 business days depending on banking systems."
    ],
  },
  {
    title: "15. Chargebacks",
    content: [
      "Please contact us before initiating a chargeback. Unauthorized chargebacks may result in suspension of platform access."
    ],
  },
  {
    title: "16. Cancellation by Success369",
    content: [
      "If we cancel a program or event, participants will be offered rescheduling, credit, or a full refund."
    ],
  },
  {
    title: "17. Exceptional Circumstances",
    content: [
      "Emergency requests (e.g., medical issues) may be reviewed on a case-by-case basis at the sole discretion of Success369."
    ],
  },
  {
    title: "18. Policy Updates",
    content: [
      "The latest version of this policy will always be available on the Success369 website."
    ],
  },
  {
    title: "19. Contact",
    content: [
      "For refund or cancellation requests, please contact:",
      "Success369 Private Limited\nEmail: support@success369.org\nRegional Office: Jayanagar 9th Block, Bangalore, India"
    ],
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
            <motion.h1 custom={1} variants={fadeUp} className="mb-8 font-light">
              Refund & <span className="text-glow text-primary italic font-normal">Cancellation</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto font-light">
              Our commitment to transparency and fairness in all Success369 transactions.
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

export default RefundPolicy;
