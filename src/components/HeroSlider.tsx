import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import model369 from "@/assets/Model 369.mp4";
import journey from "@/assets/Journey op 1.mp4";
import event from "@/assets/Events Video.mp4";
import book from "@/assets/Book.mp4";
import success369video from "@/assets/Success 369.mp4";
import maayaVideo from "@/assets/maaya/hero-loop.mp4";
import maayaPoster from "@/assets/maaya/hero-poster.webp";
import model369Poster from "@/assets/posters/model369.webp";
import journeyPoster from "@/assets/posters/journey.webp";
import bookPoster from "@/assets/posters/book.webp";
import success369Poster from "@/assets/posters/success369.webp";
import CTAButton from "./CTAButton";

interface Slide {
  video?: string;
  poster?: string;
  youtubeId?: string;
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary?: string;
  ctaHref: string;
}

const slides: Slide[] = [
  {
    video: model369,
    poster: model369Poster,
    tag: "Foundation",
    title: "Become your most aligned self to achieve your highest aspirations.",
    subtitle:
      "Align who you are, what you believe, and how you act—so progress feels steady, coherent, and deeply fulfilling.",
    cta: "Take a Session",
    ctaSecondary: "Watch Trailer",
    ctaHref: "/take-a-session",
  },
  {
    video: success369video,
    poster: success369Poster,
    tag: "Success 369",
    title: "Clarity for Individuals. Direction for Leaders. Alignment for Organisations.",
    subtitle:
      "Success369 helps individuals, professionals, leaders, and organisations align identity, purpose, and action—so growth feels clear, meaningful, and built to last.",
    cta: "Explore Success 369",
    ctaSecondary: "Watch Trailer",
    ctaHref: "/success-369",
  },
  {
    video: journey,
    poster: journeyPoster,
    tag: "Programs",
    title: "Distinct Journeys. One Shared Philosophy.",
    subtitle:
      "You don’t need to follow a fixed path. You choose the journey that fits your current need, not someone else’s timeline.",
    cta: "Explore Programs",
    ctaSecondary: "Learn More",
    ctaHref: "/programs",
  },
  {
    video: maayaVideo,
    poster: maayaPoster,
    tag: "MAAYA",
    title: "Not broken. Just misaligned.",
    subtitle: "A guided retreat to bring who you are and how you act back into sync.",
    cta: "Begin the MAAYA Journey",
    ctaHref: "/maaya",
  },
  {
    video: book,
    poster: bookPoster,
    tag: "The Book",
    title: "The Book – Your Companion for Sustainable Success",
    subtitle: "You don't attend to follow the crowd. You show up for the conversation that meets you where you are.",
    cta: "Buy the Book",
    ctaSecondary: "See Details",
    ctaHref: "/book",
  },
  {
    youtubeId: "NQqF1np5eow",
    tag: "Podcast",
    title: "Dr. Kiran Bedi: The Woman Who Refused to Be Controlled",
    subtitle: "Listen to inspiring conversations on leadership, courage, and self-determination on the Success369 Podcast.",
    cta: "Explore Podcast",
    ctaSecondary: "Watch Episode",
    ctaHref: "/podcast",
  },
];

const SLIDE_DURATION = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // The first video is large, so it only starts downloading once the page
  // has loaded; until then the poster image above it is what is shown.
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const start = () => setTimeout(() => setVideoReady(true), 200);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 overflow-hidden"
        >
          {slide.youtubeId ? (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.youtubeId}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
                title={slide.title}
                className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover scale-150 sm:scale-125 opacity-80"
                allow="autoplay; encrypted-media"
              />
            </div>
          ) : (
            <>
              {slide.poster && (
                <img
                  src={slide.poster}
                  alt=""
                  decoding="async"
                  {...{ fetchpriority: "high" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <video
                src={videoReady ? slide.video : undefined}
                autoPlay
                loop
                muted
                playsInline
                className="relative h-full w-full object-cover"
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
          {/* initial={false}: the first slide's text is visible straight away (it is
              also what search engines and the largest-paint measurement see); the
              entrance animation plays when the slide changes. */}
          <AnimatePresence mode="wait" initial={false}>
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
      <div className="absolute bottom-10 sm:bottom-12 sm:mb-6 left-4 sm:left-6 right-16 sm:right-6 z-20">
        <div className="flex max-w-md items-start gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button key={index} onClick={() => goTo(index)} aria-label={`Go to slide ${index + 1}: ${slides[index].tag}`} className="group relative flex-1 before:absolute before:inset-x-0 before:-inset-y-3">
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
              <span className="pointer-events-none absolute left-0 top-full mt-2 hidden whitespace-nowrap text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
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
