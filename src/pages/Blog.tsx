import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Clock, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import CTAButton from "@/components/CTAButton";
import { blogPosts, categories, type BlogCategory } from "@/data/blog";

type FilterType = "All" | BlogCategory;

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [search, setSearch] = useState("");
  // Hero slider shows only the 3 newest posts (by date), so a new post
  // automatically replaces the oldest one.
  const featuredList = [...blogPosts]
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 3);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredList.length);
    setProgress(0);
  }, [featuredList.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + featuredList.length) % featuredList.length);
    setProgress(0);
  }, [featuredList.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (6000 / 50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activePost = featuredList[currentSlide];

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const allFilters: FilterType[] = ["All", ...categories];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog — Insights for Sustainable Growth | Success369</title>
        <meta name="description" content="Explore perspectives on clarity, congruence, and catalysis — the three pillars of lasting transformation." />
        <link rel="canonical" href="https://success369.org/blog" />
      </Helmet>
      <Navbar />

      {/* --- HERO SLIDER (Identical structure to Home Page Hero Slider) --- */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={activePost.image}
              alt={activePost.title}
              className="h-full w-full object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-28 sm:pb-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                {/* Tag */}
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-3 sm:mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md"
                >
                  {activePost.category} • {activePost.readTime}
                </motion.span>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-glow text-white leading-[1.1] font-bold font-display"
                >
                  {activePost.title}
                </motion.h1>

                {/* Subtitle / Excerpt */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="mb-8 sm:mb-10 max-w-2xl text-lg sm:text-xl text-white/90 font-light line-clamp-2"
                >
                  {activePost.excerpt}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                >
                  <CTAButton 
                    href={`/blog/${activePost.slug}`}
                    size="md"
                    variant="shimmer"
                  >
                    Read Article
                  </CTAButton>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute right-4 sm:right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:gap-3">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary"
            aria-label="Previous Article"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-primary/20 hover:text-primary"
            aria-label="Next Article"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-10 sm:bottom-12 left-4 sm:left-6 right-16 sm:right-6 z-20">
          <div className="flex max-w-md items-center gap-2 sm:gap-3">
            {featuredList.map((post, index) => (
              <button key={post.slug} onClick={() => goToSlide(index)} className="group relative flex-1">
                <div className="slider-progress h-1">
                  <motion.div
                    className="slider-progress-fill"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: index === currentSlide ? progress / 100 : index < currentSlide ? 1 : 0,
                    }}
                    transition={{ duration: 0.05, ease: "linear" }}
                  />
                </div>
                <span className="mt-2 hidden sm:block text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 truncate max-w-[100px]">
                  {post.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-10 sm:bottom-12 right-4 sm:right-6 z-20">
          <span className="font-display text-xs sm:text-sm tabular-nums text-white/70">
            <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
            {" / "}
            {String(featuredList.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Filters + Search + Grid */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          {/* Search + Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-12">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {allFilters.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    filter === tab
                      ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_-3px_hsl(var(--primary)/0.4)]"
                      : "bg-card/40 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/45"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card/40 border border-border/40 hover:border-primary/30 focus:border-primary/50 focus:outline-none rounded-full py-2.5 pl-11 pr-5 text-sm transition-colors text-foreground"
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Search size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">We couldn't find any articles matching "{search}".</p>
              <button
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                className="px-6 py-2.5 rounded-full bg-card border border-border/50 hover:border-primary/50 text-sm font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
 
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="text-primary font-semibold uppercase tracking-wider">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <GlobalCTA
        kind="form"
        title="Meaningful insights, delivered without noise."
        description="Get weekly perspectives on clarity, congruence, and catalysis — the three pillars of lasting transformation."
        showPillars={true}
      />


      <Footer />
    </div>
  );
};

export default Blog;
