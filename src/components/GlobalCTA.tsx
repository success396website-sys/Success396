import React, { useState, isValidElement, cloneElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Heart, Target, Check, LucideIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import CTAButton from "./CTAButton";
import { cn } from "@/lib/utils";

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
  variant = "shimmer",
  showPillars = true,
  className,
  id = "newsletter",
  icon: Icon = ArrowRight,
}: GlobalCTAProps) => {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const promises = [
    "No spam",
    "No selling without context",
    "No constant messaging",
    "Just clarity, shared when it’s meaningful."
  ];

  return (
    <section id={id} className={cn("relative section overflow-hidden bg-black", className)}>
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
        {/* Pillar icons */}
        {showPillars && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-6 sm:gap-8 mb-10"
          >
            {pillars.map(({ icon: PillarIcon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <PillarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs font-display uppercase tracking-widest text-primary/70">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 max-w-4xl mx-auto"
        >
          <div className="mb-4">
            {typeof title === "string" ? (
               <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-tight">
                {title}
               </h2>
            ) : (
               isValidElement<{ className?: string }>(title) ? cloneElement(title, { 
                 className: cn(
                   "text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tight", 
                   title.props.className
                 ) 
               }) : title
            )}
          </div>
          {description && (
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          {kind === "form" ? (
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form-container" className="space-y-10">
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/60 text-[10px] uppercase tracking-widest ml-1">Email Address</Label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your primary email"
                          required
                          className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="text-white/60 text-[10px] uppercase tracking-widest ml-1">WhatsApp Number (optional)</Label>
                        <input
                          id="whatsapp"
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+00 00000 00000"
                          className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                        className="mt-1 border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label 
                        htmlFor="terms" 
                        className="text-white/50 text-[11px] leading-relaxed font-normal cursor-pointer hover:text-white/70 transition-colors"
                      >
                        I agree to receive communication from Success369 and accept the <Link to="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                      </Label>
                    </div>

                    <div className="pt-4">
                      <CTAButton
                        type="submit"
                        disabled={!agreed || !email}
                        variant="primary"
                        size="lg"
                        className="w-full rounded-xl py-6"
                      >
                        Subscribe
                      </CTAButton>
                    </div>
                  </motion.form>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-white/10">
                    <div className="space-y-4">
                      <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Our Promise</h4>
                      <ul className="space-y-3">
                        {promises.map((promise, i) => (
                          <li key={i} className="flex items-center gap-3 text-white/50 text-xs">
                            <div className="h-1 w-1 rounded-full bg-primary/40" />
                            {promise}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Prefer a Conversation Instead?</h4>
                      <p className="text-white/50 text-xs leading-relaxed">
                        If you’d rather talk than subscribe, that’s always welcome.
                      </p>
                      <div className="pt-2">
                        <Link 
                          to="/free-session" 
                          className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-semibold group"
                        >
                          Take a Free Session
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
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
                size="lg"
                className="px-10"
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
