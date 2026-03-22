import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>404 — Page Not Found | Success369</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-black text-primary/20 mb-4 select-none">404</h1>
          <h2 className="mb-4 text-3xl font-bold">Oops! Page not found</h2>
          <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
            The path <code className="text-primary">{location.pathname}</code> doesn't exist in our architecture.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30">
            Return to Home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
