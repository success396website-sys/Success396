import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  tagline: string;
  story: string;
  outcome: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajeevettan",
    role: "Success369 journey",
    tagline: "I stopped second-guessing every decision.",
    story: "A senior professional came in feeling capable, but constantly uncertain. Every decision felt heavy. Every choice felt reversible. Through clarity work, priorities became obvious. Decisions stopped competing with each other.",
    outcome: "Confidence replaced overthinking. Action became calmer and more decisive.",
    initials: "RK",
  },
  {
    name: "SEnergy Leader",
    role: "Success369 journey",
    tagline: "We were performing — but pulling in different directions.",
    story: "A leadership team was achieving results, but something felt off. Meetings were productive, yet misalignment showed up in execution. By addressing underlying assumptions and expectations, conversations shifted. Trust improved. Direction aligned.",
    outcome: "Less friction. Clearer roles. Stronger execution as a team.",
    initials: "SE",
  },
  {
    name: "Startup Founder",
    role: "Success369 journey",
    tagline: "I realised I was chasing someone else’s definition of success.",
    story: "An entrepreneur had momentum, visibility, and growth — but no sense of fulfilment. Progress felt impressive from the outside and empty on the inside. Reframing success around identity and values changed how decisions were made.",
    outcome: "Success began to feel personal, meaningful, and sustainable.",
    initials: "SF",
  },
];

const AUTO_ROTATE_MS = 6000;

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (paused) {
      setProgress(0);
      return;
    }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / AUTO_ROTATE_MS, 1));
      if (elapsed >= AUTO_ROTATE_MS) {
        next();
        return;
      }
      id = requestAnimationFrame(tick);
    };
    let id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, paused, next]);

  // Reset progress on slide change
  useEffect(() => {
    setProgress(0);
  }, [active]);

  const t = testimonials[active];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[120px] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Real Stories
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-[1.1]">
            Voices of <br />
            Transformation
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            True impact isn't just about results—it's about the fundamental shift in how you experience your journey.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Display - Dynamic slide */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.4 }
                }}
                className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Visual Accent: Progress Border at Top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-muted/20">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    style={{ scaleX: progress, transformOrigin: "left" }}
                  />
                </div>

                {/* Massive Decorative Quote Icon */}
                <Quote className="absolute -top-10 -right-10 h-64 w-64 text-primary/5 rotate-12 pointer-events-none" />

                {/* Content Layout */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Quote className="h-8 w-8 text-primary mb-6" />
                  </motion.div>

                  <div className="mb-6 lg:mb-8">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-foreground leading-snug mb-4"
                    >
                      {t.tagline}
                    </motion.h3>

                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-base md:text-lg text-muted-foreground/90 italic font-light"
                    >
                      {t.story}
                    </motion.p>
                  </div>

                  {/* Outcome Highlight - Premium Card */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="group relative rounded-2xl p-5 sm:p-6 mb-8 border border-border/50 bg-secondary/50 overflow-hidden transition-all duration-700 hover:border-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="relative z-10 text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-2 flex items-center gap-2">
                       <span className="h-1 w-1 rounded-full bg-primary" />
                       The Outcome
                    </p>
                    <p className="relative z-10 text-base md:text-lg text-foreground font-semibold tracking-tight">
                      {t.outcome}
                    </p>
                  </motion.div>

                  {/* Participant Meta */}
                  <div className="flex items-center gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-[1px]"
                    >
                      <div className="h-full w-full rounded-2xl bg-card flex items-center justify-center">
                        <span className="font-display text-lg font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                          {t.initials}
                        </span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="font-display text-base sm:text-lg font-bold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs sm:text-sm text-primary/80 font-medium uppercase tracking-widest">
                        {t.role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls - Centered below card */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="group h-14 w-14 rounded-full border border-border/50 bg-card/40 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-500"
                aria-label="Previous story"
              >
                <ChevronLeft className="h-5 w-5 transition-transform duration-500 group-hover:-translate-x-1" />
              </button>

              <div className="flex gap-2 mx-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="group h-14 w-14 rounded-full border border-border/50 bg-card/40 backdrop-blur-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-500"
                aria-label="Next story"
              >
                <ChevronRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
