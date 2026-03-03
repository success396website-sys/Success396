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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl bg-background/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 md:p-8">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cookie size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Cookie Settings</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your cinematic experience, analyze site usage, and assist in our marketing efforts.
                  </p>
                </div>
                <button 
                  onClick={handleDismiss}
                  className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss cookie notice"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <CTAButton
                    variant="shimmer"
                    size="sm"
                    onClick={handleAccept}
                    className="flex-1 justify-center py-3"
                  >
                    Accept All
                  </CTAButton>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 flex-1 sm:flex-none"
                  >
                    Decline
                  </button>
                </div>
                <div className="text-center">
                  <Link 
                    to="/cookie-policy" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Read our Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
