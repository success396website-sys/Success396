import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Play } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import helga169 from "@/assets/maaya/review-helga-169.mp4";
import helga916 from "@/assets/maaya/review-helga-916.mp4";
import helgaPoster169 from "@/assets/maaya/poster-helga-169.webp";
import helgaPoster916 from "@/assets/maaya/poster-helga-916.webp";
import jacob169 from "@/assets/maaya/review-jacob-169.mp4";
import jacob916 from "@/assets/maaya/review-jacob-916.mp4";
import jacobPoster169 from "@/assets/maaya/poster-jacob-169.webp";
import jacobPoster916 from "@/assets/maaya/poster-jacob-916.webp";
import amir169 from "@/assets/maaya/review-amir-169.mp4";
import amir916 from "@/assets/maaya/review-amir-916.mp4";
import amirPoster169 from "@/assets/maaya/poster-amir-169.webp";
import amirPoster916 from "@/assets/maaya/poster-amir-916.webp";
import joan169 from "@/assets/maaya/review-joan-169.mp4";
import joan916 from "@/assets/maaya/review-joan-916.mp4";
import joanPoster169 from "@/assets/maaya/poster-joan-169.webp";
import joanPoster916 from "@/assets/maaya/poster-joan-916.webp";

interface Review {
  id: string;
  name: string;
  title: string;
  video169: string;
  video916: string;
  poster169: string;
  poster916: string;
}

const reviews: Review[] = [
  {
    id: "helga",
    name: "Helga Maria Foure Joopen",
    title: "Doctor in Management & Organizations, Germany",
    video169: helga169,
    video916: helga916,
    poster169: helgaPoster169,
    poster916: helgaPoster916,
  },
  {
    id: "jacob",
    name: "Jacob Kaleekal Mathew",
    title: "Head of Information Technology, Government Entity, India",
    video169: jacob169,
    video916: jacob916,
    poster169: jacobPoster169,
    poster916: jacobPoster916,
  },
  {
    id: "amir",
    name: "Amir Hosni Elderbi",
    title: "Sr Engineer, Site Project Support, ADNOC Refining, Canada",
    video169: amir169,
    video916: amir916,
    poster169: amirPoster169,
    poster916: amirPoster916,
  },
  {
    id: "joan",
    name: "Joan Wairimu Ng'ang'a",
    title: "Wellness Coach, FitnGlam, Kenya",
    video169: joan169,
    video916: joan916,
    poster169: joanPoster169,
    poster916: joanPoster916,
  },
];

// Phones get the vertical (9:16) cut, everything else the 16:9 cut. Only the
// one that is needed is ever downloaded, and only after the visitor clicks a card.
const isMobile = () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

const TurningPointsSection = () => {
  const [playing, setPlaying] = useState<{ review: Review; src: string } | null>(null);

  return (
    <section className="section relative bg-background overflow-hidden pb-28 sm:pb-36">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">Turning Points</p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Changes After MAAYA?
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground/90">
            <MapPin size={12} className="text-primary" />
            MAAYA Retreat, Kovalam
          </span>
        </motion.div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {reviews.map((review, index) => (
              <motion.figure
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="w-[68vw] max-w-[280px] shrink-0 snap-center md:w-auto md:max-w-none"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border/40 bg-black md:aspect-video">
                  <button
                    type="button"
                    onClick={() => setPlaying({ review, src: isMobile() ? review.video916 : review.video169 })}
                    aria-label={`Play ${review.name}'s MAAYA review`}
                    className="group absolute inset-0 block h-full w-full"
                  >
                    <picture>
                      <source media="(max-width: 767px)" srcSet={review.poster916} />
                      <img
                        src={review.poster169}
                        alt={`${review.name}, MAAYA Retreat participant`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </picture>
                    <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                      </span>
                    </span>
                  </button>
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-base font-semibold text-foreground">{review.name}</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{review.title}</p>
                </figcaption>
              </motion.figure>
          ))}
        </div>
      </div>

      {/* Pop-up player: opens when a review is clicked, closes with X, Esc or a click outside */}
      <Dialog open={playing !== null} onOpenChange={(open) => !open && setPlaying(null)}>
        <DialogContent className="w-[94vw] max-w-4xl gap-0 overflow-hidden border-border/40 bg-card p-0 sm:rounded-2xl">
          {playing && (
            <>
              <div className="px-5 py-4 pr-14">
                <DialogTitle className="mb-0 font-display text-lg font-semibold leading-snug text-foreground">{playing.review.name}</DialogTitle>
                <DialogDescription className="mt-1 text-sm text-muted-foreground">{playing.review.title}</DialogDescription>
              </div>
              <div className="bg-black">
                <video
                  key={playing.src}
                  src={playing.src}
                  controls
                  autoPlay
                  playsInline
                  className="mx-auto block max-h-[75vh] w-full"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TurningPointsSection;
