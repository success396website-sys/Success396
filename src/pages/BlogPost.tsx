import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ctaItems = [
  { label: "Read the Book", description: "Dive deeper into the Success369 framework", href: "#", icon: BookOpen },
  { label: "Explore Journeys", description: "Find your transformational path", href: "#", icon: Sparkles },
  { label: "Take a Session", description: "Experience Success369 coaching firsthand", href: "#", icon: ArrowRight },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const setRef = useCallback((el: HTMLParagraphElement | null, i: number) => {
    paragraphRefs.current[i] = el;
  }, []);

  useEffect(() => {
    if (!post) return;
    const observers: IntersectionObserver[] = [];
    paragraphRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  const handleTocClick = (index: number) => {
    const el = paragraphRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const Sidebar = () => (
    <>
      {/* Table of Contents */}
      <nav className="mb-8">
        <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Table of Contents
        </h3>
        <ul className="space-y-1">
          {post.headings.map((h) => (
            <li key={h.index}>
              <button
                onClick={() => handleTocClick(h.index)}
                className={`text-left w-full text-sm py-1.5 px-3 rounded-lg transition-all duration-300 ${
                  activeIndex === h.index
                    ? "text-primary bg-primary/10 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/60"
                }`}
              >
                {h.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Cards */}
      <div className="space-y-3">
        {ctaItems.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className="group block p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
          >
            <cta.icon size={18} className="text-primary mb-2" />
            <h4 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
              {cta.label}
            </h4>
            <p className="text-muted-foreground text-xs leading-relaxed">{cta.description}</p>
          </a>
        ))}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} — Success369 Insights</title>
        <meta name="description" content={post.excerpt || post.content[0]?.slice(0, 160)} />
        <meta property="og:title" content={`${post.title} | Success369`} />
        <meta property="og:description" content={post.excerpt || post.content[0]?.slice(0, 160)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-32 w-full">
          <motion.div initial="hidden" animate="visible">
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-primary/60" />
              <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
                {post.category}
              </p>
              <span className="h-[1px] w-8 bg-primary/60" />
            </motion.div>

            <motion.h1
              custom={2}
              variants={fadeUp}
              className="mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary/60" />
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary/60" />
                {post.readTime}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{post.author}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content with Sidebar */}
      <section className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
        <div className="relative container-custom">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar - Mobile: normal flow, Desktop: sticky */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Sidebar />
            </aside>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-6"
            >
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  ref={(el) => setRef(el, i)}
                  id={`section-${i}`}
                  className="text-foreground/85 text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section relative">
          <div className="container-custom">
            <h2 className="mb-8 text-center">
              More in {post.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {related.map((r, i) => (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to={`/blog/${r.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-semibold tracking-wider uppercase">{r.category}</span>
                      <h3 className="font-display text-base font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <span className="text-muted-foreground text-xs">{r.readTime}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <section className="section relative bg-background/50">
        <div className="container-custom text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors">
            <ArrowLeft size={16} />
            Back to All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
