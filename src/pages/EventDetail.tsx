import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Building,
  Sparkles,
  Play,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allEvents } from "@/data/events-list";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = allEvents.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Event not found</h1>
          <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isUpcoming = event.status === "upcoming";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          {event.videoUrl ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={event.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container-custom pb-16 sm:pb-24 pt-32 w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            {/* Breadcrumb */}
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/events" className="hover:text-primary transition-colors">
                Events
              </Link>
              <span>/</span>
              <span className="text-foreground">{event.title}</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-primary/60" />
                <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                  {event.tag}
                </p>
                <span className="h-[1px] w-8 bg-primary/60" />
              </div>
              {isUpcoming ? (
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-400 bg-emerald-500/15 border border-emerald-500/20">
                  Upcoming
                </span>
              ) : (
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-muted-foreground bg-muted/50 border border-border/30">
                  Past Event
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-foreground/60 bg-card/40 backdrop-blur-sm border border-border/20">
                {event.type === "virtual" ? <Globe size={12} /> : <Building size={12} />}
                {event.type === "virtual" ? "Virtual" : event.type === "hybrid" ? "Hybrid" : "In-Person"}
              </span>
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeUp}
              className="mb-4"
            >
              {event.title}
            </motion.h1>

            {event.subtitle && (
              <motion.p
                custom={3}
                variants={fadeUp}
                className="text-primary font-display text-lg sm:text-xl font-medium mb-6"
              >
                {event.subtitle}
              </motion.p>
            )}

            <motion.p
              custom={4}
              variants={fadeUp}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              {event.description}
            </motion.p>

            {/* Details Grid */}
            <motion.div custom={5} variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: Calendar, label: event.date },
                { icon: Clock, label: event.time },
                { icon: MapPin, label: event.location },
                ...(event.spots ? [{ icon: Users, label: event.spots }] : []),
                ...(event.attendees ? [{ icon: Users, label: event.attendees }] : []),
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30"
                >
                  <item.icon size={16} className="text-primary shrink-0" />
                  <span className="text-foreground text-xs sm:text-sm font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            {isUpcoming && (
              <motion.div custom={6} variants={fadeUp} className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to={`/register/${event.slug}`}
                    className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-primary-foreground overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
                    <span className="relative flex items-center gap-2">
                      Register Now
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Long Description & Highlights */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
            {/* Left — About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">
                {isUpcoming ? "About This Event" : "Event Recap"}
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                {event.longDescription && <p>{event.longDescription}</p>}
                {event.recap && <p>{event.recap}</p>}
                {!event.longDescription && !event.recap && <p>{event.description}</p>}
              </div>

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Featured Speakers
                  </h3>
                  <div className="space-y-3">
                    {event.speakers.map((speaker) => (
                      <div
                        key={speaker.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border/30"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                          {speaker.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-foreground text-sm font-semibold">{speaker.name}</p>
                          <p className="text-muted-foreground text-xs">{speaker.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right — Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {event.highlights && event.highlights.length > 0 && (
                <div className="p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                    {isUpcoming ? "What You'll Experience" : "Highlights"}
                  </h3>
                  <ul className="space-y-4">
                    {event.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Registration Card */}
                  {isUpcoming && (
                    <div className="mt-8 pt-6 border-t border-border/20">
                      <p className="text-foreground font-display font-semibold mb-1">
                        Secure your spot
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.spots || "Limited availability"}
                      </p>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          to={`/register/${event.slug}`}
                          className="relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground overflow-hidden group"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
                          <span className="relative flex items-center gap-2">
                            Register Now
                            <ArrowRight size={16} />
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </div>
              )}

              {/* Event Image (for non-video events) */}
              {!event.videoUrl && (
                <div className="mt-6 rounded-2xl overflow-hidden border border-border/30">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Events */}
      <section className="section relative bg-background">
        <div className="relative container-custom text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Events
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetail;