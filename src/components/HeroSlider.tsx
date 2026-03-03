import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import model369 from "@/assets/Model 369.mp4";
import journey from "@/assets/Journey op 1.mp4";
import event from "@/assets/Events Video.mp4";
import book from "@/assets/Book.mp4";
import CTAButton from "./CTAButton";

interface Slide {
  video: string;
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    video: model369,
    tag: "Foundation",
    title: "Become your most aligned self to achieve your highest aspirations.",
    subtitle:
      "Align who you are, what you believe, and how you act—so progress feels steady, coherent, and deeply fulfilling.",
    cta: "Take a Free Session",
    ctaSecondary: "Watch Trailer",
    ctaHref: "/free-session",
  },
  {
    video: journey,
    tag: "Programs",
    title: "Distinct Journeys. One Shared Philosophy.",
    subtitle:
      "You don’t need to follow a fixed path. You choose the journey that fits your current need, not someone else’s timeline.",
    cta: "Explore Programs",
    ctaSecondary: "Learn More",
    ctaHref: "/programs",
  },
  {
    video: book,
    tag: "The Book",
    title: "The Book – Your Companion for Sustainable Success",
    subtitle: "You don't attend to follow the crowd. You show up for the conversation that meets you where you are.",
    cta: "Buy the Book",
    ctaSecondary: "See Details",
    ctaHref: "/book",
  },
  {
    video: event,
    tag: "Events",
    title: "Success369 Events – Inspire. Act. Achieve.",
    subtitle: "You don’t attend to follow the crowd. You show up for the conversation that meets you where you are.",
    cta: "Join the Event",
    ctaSecondary: "View Gallery",
    ctaHref: "/events",
  },
];

const SLIDE_DURATION = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
              >
                {slide.tag}
              </motion.span>

              {/* Title */}
              {current === 0 ? (
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-glow text-white leading-[1.1]"
                >
                  {slide.title}
                </motion.h1>
              ) : (
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-glow text-white leading-[1.1]"
                >
                  {slide.title}
                </motion.h2>
              )}

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <CTAButton 
                  href={slide.ctaHref}
                  size="md"
                  variant="shimmer"
                >
                  {slide.cta}
                </CTAButton>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute right-4 sm:right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:gap-3">
        <button
          onClick={prev}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={next}
          className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-10 sm:bottom-12 left-4 sm:left-6 right-16 sm:right-6 z-20">
        <div className="flex max-w-md items-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button key={index} onClick={() => goTo(index)} className="group relative flex-1">
              <div className="slider-progress h-1">
                <motion.div
                  className="slider-progress-fill"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: index === current ? progress / 100 : index < current ? 1 : 0,
                  }}
                  transition={{ duration: 0.05, ease: "linear" }}
                />
              </div>
              <span className="mt-2 hidden sm:block text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {slides[index].tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 sm:bottom-12 right-4 sm:right-6 z-20">
        <span className="font-display text-xs sm:text-sm tabular-nums text-white/70">
          <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
          {" / "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default HeroSlider;