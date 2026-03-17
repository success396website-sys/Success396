import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const sections = [
  {
    title: "Shipping Coverage",
    content: "We ship the Success369 book and related physical materials within the United Kingdom and internationally. Shipping availability and costs may vary depending on your location. International orders may be subject to customs duties and import taxes, which are the responsibility of the buyer.",
  },
  {
    title: "Processing Time",
    content: "Orders are typically processed within 1–3 business days. You will receive an email confirmation with tracking information once your order has been dispatched. Please note that processing times may be slightly longer during peak periods or promotional events.",
  },
  {
    title: "Delivery Timeframes",
    content: "UK Standard Delivery: 3–5 business days. UK Express Delivery: 1–2 business days. International Delivery: 7–21 business days depending on destination. These timeframes are estimates and may vary due to factors beyond our control, including customs clearance and local postal services.",
  },
  {
    title: "Shipping Costs",
    content: "Shipping costs are calculated at checkout based on your location and selected delivery method. We occasionally offer free shipping promotions — check our website or subscribe to our newsletter for the latest offers.",
  },
  {
    title: "Order Tracking",
    content: "Once your order is dispatched, you will receive a tracking number via email. You can use this to monitor your delivery status through the carrier's website. If you have any issues with tracking, please contact us at support@success369.org.",
  },
  {
    title: "Damaged or Lost Items",
    content: "If your order arrives damaged or is lost in transit, please contact us within 7 days of the expected delivery date. We will arrange a replacement or full refund at no additional cost. Please retain any packaging and take photos of any damage to help us process your claim quickly.",
  },
  {
    title: "Digital Products",
    content: "E-books and digital resources are delivered electronically via email. You will receive a download link immediately upon purchase confirmation. Digital products do not require physical shipping and are not subject to delivery timeframes.",
  },
];

const ShippingPolicy = () => {
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
              Shipping <span className="text-glow text-primary">Policy</span>
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Everything you need to know about how we deliver to you.
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

export default ShippingPolicy;
