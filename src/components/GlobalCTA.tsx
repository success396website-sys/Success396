import React, { useState, isValidElement, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Heart, Target, Check, LucideIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";
import { submitToFormspree } from "@/lib/form-helpers";

const pillars = [
  { icon: Zap, label: "Clarity" },
  { icon: Heart, label: "Congruence" },
  { icon: Target, label: "Catalysis" },
];

interface GlobalCTAProps {
  title?: React.ReactNode;
  description?: string;
  kind?: "button" | "form";
  ctaText?: string;
  ctaHref?: string;
  variant?: "shimmer" | "primary" | "secondary" | "outline";
  showPillars?: boolean;
  className?: string;
  id?: string;
  icon?: LucideIcon;
}

const GlobalCTA = ({
  title = "Stay Connected",
  description = "Meaningful insights delivered without noise or pressure.",
  kind = "button",
  ctaText = "Get Started",
  ctaHref = "#",
  variant = "primary",
  showPillars = true,
  className,
  id = "newsletter",
  icon: Icon = ArrowRight,
}: GlobalCTAProps) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const success = await submitToFormspree({ email, whatsapp }, "Newsletter Signup: Global CTA");
      if (success) {
        setSubmitted(true);
      }
    }
  };

  const promises = [
    "No spam",
    "No selling without context",
    "No constant messaging",
    "Just clarity, shared when it’s meaningful."
  ];

  return (
    <section id={id} className={cn("relative py-12 md:py-16 overflow-hidden bg-black", className)}>
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-60 transition-opacity duration-1000"
          onCanPlay={(e) => (e.currentTarget.className = "h-full w-full object-cover opacity-100 transition-opacity duration-1000")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-custom">
        {/* Pillar icons - much smaller and tighter */}
        {showPillars && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-4"
          >
            {pillars.map(({ icon: PillarIcon, label }, i) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <PillarIcon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-[8px] font-display uppercase tracking-widest text-primary/60">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 max-w-2xl mx-auto"
        >
          <div className="mb-2">
            {typeof title === "string" ? (
               <h2 className="text-2xl md:text-3xl font-display font-bold mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-tight">
                {title}
               </h2>
            ) : (
               isValidElement<{ className?: string }>(title) ? cloneElement(title, { 
                 className: cn(
                   "text-2xl md:text-3xl font-display font-bold mb-1 uppercase tracking-tight", 
                   title.props.className
                 ) 
               }) : title
            )}
          </div>
          {description && (
            <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto font-light leading-snug">
              {description}
            </p>
          )}
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          {kind === "form" ? (
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form-container" className="space-y-4">
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary/40 transition-all"
                      />
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="WhatsApp (optional)"
                        className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-primary/40 transition-all"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2 justify-center">
                      <Checkbox 
                        id="terms" 
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        className="border-white/20 data-[state=checked]:bg-primary h-3.5 w-3.5"
                      />
                      <Label 
                        htmlFor="terms" 
                        className="text-white/40 text-[9px] font-normal cursor-pointer"
                      >
                        I accept the <Link to="/terms-conditions" className="text-primary/70">Terms</Link> & <Link to="/privacy-policy" className="text-primary/70">Privacy Policy</Link>
                      </Label>
                    </div>

                    <CTAButton
                      type="submit"
                      disabled={!agreed || !email}
                      variant="primary"
                      size="sm"
                      className="w-full rounded-lg py-3 text-xs"
                    >
                      Subscribe
                    </CTAButton>
                  </motion.form>

                  {/* Ultra-compact Footer Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5 text-[9px]">
                    <div className="flex gap-3">
                      {["No spam", "No noise", "Just clarity"].map((p, i) => (
                        <span key={i} className="text-white/30 flex items-center gap-1">
                          <div className="w-0.5 h-0.5 rounded-full bg-primary/30" /> {p}
                        </span>
                      ))}
                    </div>
                    <Link to="/take-a-session" className="text-primary/80 hover:text-primary font-bold transition-colors uppercase tracking-wider flex items-center gap-1">
                      Take a Session <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center rounded-2xl bg-black/50 backdrop-blur-md border border-primary/30 p-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="h-10 w-10 text-primary" />
                  </motion.div>
                  <h3 className="mb-3 uppercase tracking-[0.2em] text-2xl text-white font-display">
                    Welcome to the Journey
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Check your inbox — your first insight is on its way.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <div className="flex justify-center">
              <CTAButton
                href={ctaHref.startsWith("/") ? undefined : ctaHref}
                to={ctaHref.startsWith("/") ? ctaHref : undefined}
                variant={variant}
                size="md"
                className="px-8"
                icon={Icon}
              >
                {ctaText}
              </CTAButton>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
