import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import { blogPosts, categories, type BlogCategory } from "@/data/blog";
import { fadeUp } from "@/lib/animations";

// fadeUp imported from @/lib/animations

type FilterType = "All" | BlogCategory;

const Blog = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [search, setSearch] = useState("");
  const featured = blogPosts.find((p) => p.featured);

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
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[200px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Leadership & Thought Leadership
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="mb-8"
            >
              Insights for{" "}
              <span className="text-primary text-glow">sustainable growth</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            >
              Explore perspectives on clarity, congruence, and catalysis — the three pillars of
              lasting transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section bg-background/50 relative overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/15 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                      Featured
                    </span>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-3">
                      {featured.category}
                    </span>
                    <h2 className="group-hover:text-primary transition-colors duration-300 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                      <span>{featured.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters + Search + Grid */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          {/* Search + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-card/60 border border-border/40 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {allFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    filter === f
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card/40 text-muted-foreground hover:text-foreground border border-border/30 hover:border-primary/30"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

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
                      <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase text-primary bg-primary/15 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-border/20">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight size={14} />
                        </span>
                      </div>
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