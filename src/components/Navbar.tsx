import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Newspaper,
  BookOpen,
  Sparkles,
  Flame,
  Infinity,
  Layout,
  Info,
  Star,
  Calendar,
  MessageSquare,
  Users,
} from "lucide-react";
import logo from "@/assets/logo.webp";
import logoLight from "@/assets/logo-light.webp";
import CTAButton from "@/components/CTAButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/* ------------------------------------------------------------------ */
/*  NAV DATA                                                          */
/* ------------------------------------------------------------------ */

type NavLink = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: "Foundation", hasDropdown: true },
  { label: "Programs", hasDropdown: true },
  { label: "The Book", href: "/book" },
  { label: "Arena", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

const foundationSections = [
  { label: "Success 396", description: "Clarity. Congruence. Catalysis.", icon: Star, href: "/success-396" },
  { label: "About Us", description: "Our story and mission", icon: Info, href: "/about-us" },
];

const programSections = [
  { label: "Program Overview", description: "Our transformation path", icon: Layout, href: "/programs" },
  { label: "Maya", description: "The illusion of separation", icon: Sparkles, href: "/program-maya" },
  { label: "Gita", description: "Eternal wisdom for life", icon: BookOpen, href: "/program-gita" },
  { label: "Sarvam", description: "Universal consciousness", icon: Infinity, href: "/program-sarvam" },
  { label: "Shakti", description: "Inner power and energy", icon: Flame, href: "/program-shakti" },
];

const arenaSections = [
  { label: "Events", description: "Join our live sessions", icon: Calendar, href: "/events" },
  { label: "Podcasts", description: "The Audio Experience", icon: Globe, href: "/podcast" },
  { label: "Round tables", description: "Expert discussions", icon: Users, href: "/round-tables" },
  { label: "Blogs", description: "Insights & Articles", icon: Newspaper, href: "/blog" },
];

/* Map dropdown label → its sub-links */
const dropdownMap: Record<string, typeof foundationSections> = {
  Foundation: foundationSections,
  Programs: programSections,
  Arena: arenaSections,
};

/* Map dropdown label → route prefixes that mark it "active" */
const dropdownActiveRoutes: Record<string, string[]> = {
  Foundation: ["/success-396", "/about-us"],
  Programs: ["/programs", "/program-maya", "/program-gita", "/program-sarvam", "/program-shakti"],
  Arena: ["/events", "/podcast", "/round-tables", "/blog"],
};

/* ------------------------------------------------------------------ */
/*  UNDERLINE (animated indicator under active / hovered links)       */
/* ------------------------------------------------------------------ */

const Underline = ({ active }: { active: boolean }) => (
  <span
    className={`
      absolute -bottom-0.5 left-1/2 -translate-x-1/2
      h-[2px] rounded-full bg-primary
      transition-all duration-300
      ${active ? "w-5" : "w-0 group-hover:w-5"}
    `}
  />
);

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                            */
/* ------------------------------------------------------------------ */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => setMounted(true), []);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ---- Helpers ---- */

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/" && location.pathname !== "/") return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  const isDropdownActive = (label: string) => {
    const routes = dropdownActiveRoutes[label] ?? [];
    return routes.some(
      (path) => location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  /* Pages with a dark hero background */
  const isDarkHeroPage = [
    "/", "/programs", "/book", "/events", "/podcast", "/round-tables",
    "/program-maya", "/program-gita", "/program-sarvam", "/program-shakti",
  ].includes(location.pathname);

  // Condition to show the light mode logo (has dark text and colorful circle)
  // We should use the white logo if we are in dark mode OR if we are at the top of a dark hero page
  const isLightMode = mounted && (resolvedTheme === "light" || theme === "light");
  const shouldUseLightLogo = isLightMode && (scrolled || !isDarkHeroPage);

  const navTextClass = (active: boolean) =>
    active
      ? "text-primary"
      : scrolled
        ? "text-muted-foreground hover:text-foreground"
        : isDarkHeroPage
          ? "text-white/90 hover:text-white"
          : "text-foreground/80 hover:text-foreground";

  const themeToggleExtra =
    !scrolled && isDarkHeroPage
      ? "!text-white !border-white/20 !bg-black/20 hover:!bg-black/40"
      : "";

  /* ---- Mobile accordion toggle ---- */
  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  /* ================================================================ */
  /*  RENDER                                                          */
  /* ================================================================ */

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────────── */}
      <header
        className={`
          fixed top-0 inset-x-0 z-50
          transition-[background,box-shadow,border-color] duration-400
          ${
            scrolled
              ? "bg-background/95 backdrop-blur-md dark:backdrop-blur-2xl border-b border-border/50 shadow-sm"
              : isDarkHeroPage
                ? "bg-gradient-to-b from-black/60 to-transparent"
                : "bg-transparent"
          }
        `}
      >
        {/* Consistent max-width container with equal horizontal padding */}
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* ── Logo ── */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={shouldUseLightLogo ? logoLight : logo}
              alt="Success396"
              className="h-16 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* ── Desktop Nav (centered) ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              /* ---- Dropdown link ---- */
              if (link.hasDropdown) {
                const active = isDropdownActive(link.label);
                const sections = dropdownMap[link.label] ?? [];

                return (
                  <DropdownMenu key={link.label} modal={false}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`
                          group relative inline-flex items-center gap-1
                          rounded-md px-3 py-2 text-[15px] font-semibold leading-none
                          outline-none transition-colors duration-200
                          ${navTextClass(active)}
                        `}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className="opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180"
                        />
                        <Underline active={active} />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                      align="center"
                      sideOffset={12}
                      className="w-[240px] rounded-xl border-border/50 bg-background/95 p-3 shadow-2xl backdrop-blur-2xl"
                    >
                      {sections.map((sub) => (
                        <DropdownMenuItem key={sub.href} asChild className="cursor-pointer rounded-lg p-0 focus:bg-transparent">
                          <Link
                            to={sub.href}
                            className="group/item flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-muted/60"
                          >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                              <sub.icon size={16} />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-sm font-semibold transition-colors group-hover/item:text-primary">
                                {sub.label}
                              </span>
                              <span className="text-xs leading-snug text-muted-foreground">
                                {sub.description}
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              /* ---- Normal link ---- */
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href!}
                  className={`
                    group relative
                    rounded-md px-3 py-2 text-[15px] font-semibold leading-none
                    transition-colors duration-200
                    ${navTextClass(active)}
                  `}
                >
                  {link.label}
                  <Underline active={active} />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop right side ── */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle className={themeToggleExtra} />
            <CTAButton
              to="/contact"
              size="md"
              variant="shimmer"
              className="px-5 py-2 text-[14px]"
            >
              Join our community
            </CTAButton>
          </div>

          {/* ── Mobile right side ── */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className={themeToggleExtra} />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`p-2 transition-colors ${
                !scrolled && isDarkHeroPage ? "text-white" : "text-foreground"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU (fullscreen overlay) ────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background/95 px-5 pt-[88px] backdrop-blur-xl sm:px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1 pb-6">
              {navLinks.map((link, i) => {
                const active = link.hasDropdown
                  ? isDropdownActive(link.label)
                  : isActive(link.href);
                const isExpanded = mobileExpanded === link.label;
                const sections = link.hasDropdown ? (dropdownMap[link.label] ?? []) : [];

                return (
                  <div key={link.label}>
                    {/* Top-level item */}
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      {link.hasDropdown ? (
                        <button
                          onClick={() => toggleMobileSection(link.label)}
                          className={`
                            flex w-full items-center justify-between
                            border-b border-border/30 py-4
                            text-xl font-display font-semibold
                            ${active ? "text-primary" : "text-foreground"}
                          `}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={link.href!}
                          onClick={() => setMobileOpen(false)}
                          className={`
                            block w-full border-b border-border/30 py-4
                            text-xl font-display font-semibold
                            ${active ? "text-primary" : "text-foreground"}
                          `}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>

                    {/* Expandable sub-links */}
                    <AnimatePresence initial={false}>
                      {link.hasDropdown && isExpanded && (
                        <motion.div
                          key={`${link.label}-sub`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1.5 py-3 pl-2">
                            {sections.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-muted/60"
                              >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                  <sub.icon size={15} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold">{sub.label}</span>
                                  <span className="text-xs text-muted-foreground">{sub.description}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="pb-10">
              <CTAButton
                to="/contact"
                size="md"
                variant="shimmer"
                className="w-full"
              >
                Join our community
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
