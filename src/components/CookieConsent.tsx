import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Delay for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem("cookie-consent", "dismissed");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-8 md:max-w-md lg:max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black/80 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] p-8 md:p-10">
            {/* Artistic background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 blur-[100px] pointer-events-none rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 blur-[80px] pointer-events-none rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                      <Cookie size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-medium tracking-tight text-white italic">
                      Clarity Matters — <span className="text-primary font-bold not-italic">Even for Cookies</span>
                    </h3>
                  </div>
                  
                  <p className="text-sm md:text-base text-white/70 leading-relaxed font-light mb-8">
                    We use cookies to help the Success369 website function smoothly and to understand how visitors use our platform. Some cookies are essential. Others help us improve the experience. You can choose what works best for you.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <CTAButton
                      variant="shimmer"
                      size="md"
                      onClick={handleAccept}
                      className="flex-1 min-w-[200px] justify-center text-sm tracking-wide uppercase font-bold py-4"
                    >
                      Yes, Improve My Experience
                    </CTAButton>
                    <button
                      onClick={handleDecline}
                      className="flex-1 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                    >
                      No Thanks
                    </button>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/5">
                    <Link 
                      to="/cookie-policy"
                      className="text-xs uppercase tracking-widest text-primary/80 hover:text-primary font-bold transition-colors"
                    >
                      Cookie Settings
                    </Link>
                    
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
                      <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle dismiss button */}
            <button 
              onClick={handleDismiss}
              className="absolute top-6 right-6 p-2 text-white/20 hover:text-white/60 transition-colors"
              aria-label="Dismiss"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
