import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
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


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      let currentActiveIndex = 0;
      for (const h of post.headings) {
        const el = document.getElementById(`heading-${h.index}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the heading is above or near the top of the viewport (with a 160px buffer for the navbar)
          if (rect.top <= 160) {
            currentActiveIndex = h.index;
          }
        }
      }
      setActiveIndex(currentActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to capture initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
    const el = document.getElementById(`heading-${index}`) || document.getElementById(`paragraph-${index}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const Sidebar = () => {
    // Find the active heading index in the Table of Contents
    const activeHeading = post.headings
      .filter((h) => h.index <= activeIndex)
      .reduce((prev, curr) => (curr.index > prev.index ? curr : prev), { index: -1 });

    return (
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
                  activeHeading.index === h.index
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
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle || `${post.title} — Success369 Insights`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt || post.content[0]?.slice(0, 160)} />
        <meta property="og:title" content={post.metaTitle || `${post.title} | Success369`} />
        <meta property="og:description" content={post.metaDescription || post.excerpt || post.content[0]?.slice(0, 160)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://success369.org/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription || post.excerpt,
            image: post.image,
            datePublished: new Date(`${post.date} UTC`).toISOString().slice(0, 10),
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Success369",
              logo: { "@type": "ImageObject", url: "https://success369.org/favicon.png" },
            },
            mainEntityOfPage: `https://success369.org/blog/${post.slug}`,
            articleSection: post.category,
          })}
        </script>
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
              {post.content.map((paragraph, i) => {
                const heading = post.headings.find((h) => h.index === i);
                return (
                  <div key={i} className="flex flex-col">
                    {heading && (
                      <h2
                        id={`heading-${i}`}
                        className="text-2xl sm:text-3xl font-bold font-display text-foreground mt-12 mb-6 text-glow scroll-mt-28"
                      >
                        {heading.link ? (
                          <a
                            href={heading.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-300 underline"
                          >
                            {heading.label}
                          </a>
                        ) : (
                          heading.label
                        )}
                      </h2>
                    )}
                    <p
                      id={`paragraph-${i}`}
                      className="text-foreground/85 text-base sm:text-lg leading-relaxed scroll-mt-28"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  </div>
                );
              })}
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
