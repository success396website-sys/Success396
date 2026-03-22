import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
      <Helmet>
        <title>Checkout — Launching Soon | Success369</title>
        <meta name="description" content="Our secure order processing system is launching soon." />
      </Helmet>
      <Navbar />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Subtle background glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container-custom w-full max-w-4xl px-6 py-32 md:py-48 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter">
              Launching <br />
              <span className="text-glow text-primary italic font-light">Soon.</span>
            </h1>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
