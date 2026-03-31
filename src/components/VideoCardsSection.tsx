import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import gitaVideo from "../assets/gita.mp4";
import mayaVideo from "../assets/maya.mp4";
import sarvamVideo from "../assets/sarvam.mp4";
import shaktiVideo from "../assets/shakti.mp4";
import CTAButton from "./CTAButton";
import { trackViewContent } from "@/lib/pixel";

interface VideoCard {
  title: string;
  description: string;
  cta: string;
  videoUrl: string;
  href: string;
  pixelName: string;
}

const videoCards: VideoCard[] = [
  {
    title: "MAYA-Realigning Unseen Patterns",
    description:
      "For those who are capable and progressing, yet feel misaligned.",
    cta: "Begin the MAYA Journey",
    videoUrl: mayaVideo,
    href: "/program-maya",
    pixelName: "MAYA Program",
  },
  {
    title: "GITA-Clarity Before Action",
    description:
      "For moments when decisions matter and clarity is essential.",
    cta: "Begin the GITA Journey",
    videoUrl: gitaVideo,
    href: "/program-gita",
    pixelName: "GITA Program",
  },
  {
    title: "SARVAM-The Architecture for Sustainable Success",
    description:
      "For those ready to commit to long-term, holistic success.",
    cta: "Begin the SARVAM Journey",
    videoUrl: sarvamVideo,
    href: "/program-sarvam",
    pixelName: "SARVAM Program",
  },
  {
    title: "SHAKTI-Activating Aligned Momentum",
    description:
      "For situations where clarity and alignment already exist, but momentum is lacking.",
    cta: "Begin the SHAKTI Journey",
    videoUrl: shaktiVideo,
    href: "/program-shakti",
    pixelName: "SHAKTI Program",
  },
];

const VideoCardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeIndex]);

  const handleCardHover = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const activeCard = videoCards[activeIndex];

  return (
    <section id="showcase" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
              Programs
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
Distinct Journeys. One Shared Philosophy          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
Success369 offers flexible, stand-alone journeys rooted in clarity, alignment, and sustainable success. Choose the path that fits your current needs on your timeline, not someone else's.          </p>
        </motion.div>

        {/* ── DESKTOP layout: video + cards overlaid (md and up) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="hidden md:block relative aspect-[16/9] rounded-xl overflow-hidden border border-border"
        >
          {/* Background video */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                src={activeCard.videoUrl}
                muted
                loop
                playsInline
                autoPlay
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Text content — bottom left */}
          <div className="absolute bottom-32 left-0 p-10 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-white mb-4">{activeCard.title}</h3>
                <CTAButton
                  to={activeCard.href}
                  size="md"
                  variant="shimmer"
                  className="mt-4"
                  onClick={() => trackViewContent(activeCard.pixelName)}
                >
                  {activeCard.cta}
                </CTAButton>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail cards — bottom row */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
            <div className="grid grid-cols-4 gap-3">
              {videoCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => handleCardHover(index)}
                  className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 backdrop-blur-md ${
                    activeIndex === index
                      ? "border-2 border-primary/70 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] bg-black/40"
                      : "border border-white/10 bg-black/20 hover:border-primary/30 hover:bg-black/30"
                  }`}
                >
                  <div className="flex items-center gap-3 p-3">
                    <div className="relative h-12 w-16 shrink-0 rounded overflow-hidden">
                      <video
                        src={card.videoUrl}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-0" : "opacity-80"
                      }`}>
                        <Play className="h-3 w-3 text-white/90 ml-0.5" />
                      </div>
                    </div>
                    <p className={`font-display text-xs font-semibold leading-tight line-clamp-2 transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-white/80"
                    }`}>
                      {card.title}
                    </p>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── MOBILE layout: stacked video + 2-col card grid (below md) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="md:hidden flex flex-col gap-4"
        >
          {/* Video panel */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <video
                  src={activeCard.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-white text-xl font-bold mb-2 leading-snug">
                    {activeCard.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 font-light">
                    {activeCard.description}
                  </p>
                  <CTAButton
                    to={activeCard.href}
                    size="sm"
                    variant="shimmer"
                    onClick={() => trackViewContent(activeCard.pixelName)}
                  >
                    {activeCard.cta}
                  </CTAButton>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 2×2 thumbnail card grid */}
          <div className="grid grid-cols-2 gap-3">
            {videoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveIndex(index)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "border-2 border-primary/70 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)] bg-black/60"
                    : "border border-white/10 bg-black/30"
                }`}
              >
                {/* Thumbnail strip */}
                <div className="relative h-24 w-full overflow-hidden">
                  <video
                    src={card.videoUrl}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/30 ${
                    activeIndex === index ? "opacity-0" : "opacity-100"
                  }`}>
                    <div className="rounded-full bg-black/60 p-2 backdrop-blur-sm">
                      <Play className="h-4 w-4 text-white/90 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card text */}
                <div className="p-3">
                  <p className={`font-display text-xs font-semibold leading-snug line-clamp-2 transition-colors duration-300 ${
                    activeIndex === index ? "text-primary" : "text-white/80"
                  }`}>
                    {card.title}
                  </p>
                </div>

                {/* Active bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCardsSection;
