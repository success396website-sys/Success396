import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Check, Music } from "lucide-react";
import logo from "@/assets/logo.png";
import CTAButton from "@/components/CTAButton";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "The Book", href: "/book" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Podcast", href: "/podcast" },
  { label: "Round tables", href: "/round-tables" },
];

const connectLinks = [
  { label: "Take a Session", href: "/free-session" },
  { label: "Contact Us", href: "/contact" },
  { label: "Instagram", href: "https://www.instagram.com/thesuccess369/", icon: Instagram, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/success369", icon: Linkedin, external: true },
  { label: "YouTube", href: "https://www.youtube.com/@the369leader", icon: Youtube, external: true },
  { label: "Spotify", href: "https://open.spotify.com/show/7yxUgOvL9kXUpZo3ufjfrl?si=a1Z8ueEIT-eE89f9hRT_5g", icon: Music, external: true },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Community Charter", href: "/community-charter" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#110e11] to-[#0d0c0d]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative container-custom pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center group mb-6">
              <div className="h-[80px] w-auto flex items-center justify-center transition-all duration-300">
                <img 
                  src={logo} 
                  alt="Success369" 
                  className="h-full w-auto object-contain transition-all duration-500" 
                />
              </div>
            </Link>
            <p className="text-white/80 text-base mb-6">
              Build sustainable success with clarity and alignment.
            </p>

            <div className="mb-8">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="newsletter"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-32 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary/50 transition-all duration-300"
                    />
                    <CTAButton
                      type="submit"
                      variant="shimmer"
                      size="sm"
                      className="absolute right-1 top-1 bottom-1 px-4 rounded-md"
                    >
                      Subscribe
                    </CTAButton>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-primary text-sm font-medium py-2.5"
                  >
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    Success! You're on the list.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="text-white/70 text-sm">
              Success369 exists to help individuals, leaders, teams, and organisations build success with clarity, alignment, and purpose—so growth is meaningful and sustainable.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm transition-colors duration-200 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-sm hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {link.icon && <link.icon size={14} className="group-hover:scale-110 transition-transform" />}
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/70 text-sm hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Publisher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-6 text-sm tracking-wider uppercase">
              Publisher & Book Details
            </h4>
            <div className="text-white/70 text-base space-y-1">
              <p>Success369 —</p>
              <p>Your Companion for</p>
              <p>Sustainable Success</p>
              <p className="mt-4 font-bold text-primary/80">Publisher: Ivory Books Ltd.</p>
              <p className="text-sm font-bold text-white/60">ISBN: 978-1-9193819-2-3</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Success369. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {policyLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white/50 text-xs hover:text-primary underline underline-offset-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
