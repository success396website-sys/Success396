import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [settings, setSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-v4");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = (type: "all" | "selected") => {
    const finalSettings = type === "all" 
      ? { essential: true, analytics: true, marketing: true }
      : settings;
      
    localStorage.setItem("cookie-consent-v4", JSON.stringify({
      ...finalSettings,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-[100] md:max-w-[440px]"
        >
          <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    <Cookie size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Your Cookie Privacy</h3>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed">
                We use cookies to improve your experience and analyze our traffic. By clicking “Accept All”, you consent to our use of cookies as outlined in our Policy.
              </p>

              {/* Preferences Accordion */}
              <div className="space-y-4">
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary/80 hover:text-primary transition-colors"
                >
                  {showSettings ? "Hide" : "Customize"} Preferences
                  <ChevronDown size={14} className={`transition-transform duration-300 ${showSettings ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-3"
                    >
                      <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5">
                        <Label className="text-xs text-white/70">Essential (Required)</Label>
                        <span className="text-[10px] text-primary/60 font-bold uppercase">Always On</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer" onClick={() => setSettings(s => ({...s, analytics: !s.analytics}))}>
                        <Label className="text-xs text-white/70">Performance & Analytics</Label>
                        <Checkbox checked={settings.analytics} onCheckedChange={(v) => setSettings(s => ({...s, analytics: !!v}))} />
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer" onClick={() => setSettings(s => ({...s, marketing: !s.marketing}))}>
                        <Label className="text-xs text-white/70">Personalization</Label>
                        <Checkbox checked={settings.marketing} onCheckedChange={(v) => setSettings(s => ({...s, marketing: !!v}))} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => handleSave("all")}
                  className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-11"
                >
                  Accept All
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleSave("selected")}
                  className="flex-1 rounded-full border-white/10 hover:bg-white/5 text-white/70 font-bold h-11"
                >
                  Save Selection
                </Button>
              </div>

              <div className="text-center pt-2">
                <Link to="/cookie-policy" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                  Read Full Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
