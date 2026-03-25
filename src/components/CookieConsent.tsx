import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";
import CTAButton from "./CTAButton";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    } else if (consent === "accepted") {
      // If already accepted, initialize the pixel
      if (typeof (window as any).initializeMetaPixel === "function") {
        (window as any).initializeMetaPixel();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    if (typeof (window as any).initializeMetaPixel === "function") {
      (window as any).initializeMetaPixel();
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="bg-card/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">Your Privacy Matters</h4>
                  <p className="text-white/60 text-xs leading-relaxed">
                    We use cookies and similar technologies (like Meta Pixel) to improve your experience and measure our growth. 
                    May we use them to enhance your journey with us?
                  </p>
                </div>
                <button 
                  onClick={() => setShow(false)}
                  className="text-white/30 hover:text-white transition-colors"
                  aria-label="Dismiss cookie consent banner"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <CTAButton 
                  onClick={handleAccept}
                  size="sm" 
                  variant="shimmer" 
                  className="flex-1 rounded-xl py-2"
                >
                  Accept All
                </CTAButton>
                <button 
                  onClick={handleDecline}
                  className="text-white/60 text-xs font-medium hover:text-white transition-colors px-4 py-2"
                >
                  Decline
                </button>
              </div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -z-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
