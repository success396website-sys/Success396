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
              <div
                className="group block rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 transition-all duration-500 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:hidden" />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="leading-tight text-primary italic">
                      Coming Soon
                    </h2>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters + Search + Grid */}
      <section className="section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          {/* Search + Filters */}
          {/* Search + Filters hidden while content is coming soon */}

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
                  <div
                    className="block h-full rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
 
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-primary italic mb-0">
                        Coming Soon
                      </h3>
                    </div>
                  </div>
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
