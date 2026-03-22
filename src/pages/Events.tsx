import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Globe, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import GlobalCTA from "@/components/GlobalCTA";
import { allEvents, stats } from "@/data/events-list";
import eventVideo from "@/assets/Events Video.mp4";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations

type FilterType = "all" | "upcoming" | "past";

const Events = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const featuredEvent = allEvents.find((e) => e.status === "upcoming" && e.videoUrl);
  const filteredEvents = allEvents.filter((e) => {
    if (filter === "all") return true;
    return e.status === filter;
  });

  const filters: { label: string; value: FilterType }[] = [
    { label: "All Events", value: "all" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Past Events", value: "past" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Events — Live Transformation Experiences | Success369</title>
        <meta name="description" content="Join Success369 live events — from free virtual masterclasses to life-changing in-person experiences that rewire how you grow." />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <video 
            src={eventVideo}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          />
          {/* Hero Overlay System (matched to home page) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10" />
        </div>

        <div className="relative z-20 container-custom w-full pb-28 sm:pb-32">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white"
            >
              Success369 Live Experiences
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-4 sm:mb-6 text-glow text-white"
            >
              Experience the magic of{" "}
              <span className="italic text-primary text-glow font-light">transformation</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mb-8 sm:mb-10 max-w-lg text-lg sm:text-xl text-white/90 font-light"
            >
              Some experiences don't just teach you — they rewire you. Join seekers, leaders, and visionaries who've discovered that the fastest path to growth isn't online. It's in the room.
            </motion.p>

            <motion.div custom={3} variants={fadeUp}>
              <CTAButton
                href="#events"
                size="lg"
                variant="shimmer"
                className="px-10"
              >
                Find your event
              </CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar hidden while content is coming soon */}

      {/* Events Listing */}
      <section id="events" className="relative section">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Discover all events
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              From free virtual masterclasses to life-changing in-person experiences, find the event that matches where you are on your journey.
            </p>

            {/* Filter Tabs hidden while content is coming soon */}
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, i) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/events/${event.slug}`}
                  className="group block h-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-primary italic mb-0">
                      Coming Soon
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA
        kind="form"
        title={
          <h2 className="text-white mb-4 uppercase tracking-wider">
            Don't miss <span className="text-primary italic">your moment</span>
          </h2>
        }
        description="Subscribe to get early access, exclusive discounts, and behind-the-scenes content from our upcoming events."
        showPillars={false}
      />

      <Footer />
    </div>
  );
};

export default Events;
