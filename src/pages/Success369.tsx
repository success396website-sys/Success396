import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import GlobalCTA from "@/components/GlobalCTA";

const Success369Page = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Success 369 | Clarity. Congruence. Catalysis.</title>
        <meta name="description" content="Discover the philosophy behind Success 369 and our mission to facilitate sustainable success." />
      </Helmet>
      <Navbar />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-gradient">Success 369</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Success 369 is a premium, cinematic web experience designed to facilitate sustainable success through clarity and alignment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-secondary/30 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Clarity</h3>
              <p>Aligning who you are with what you do.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/30 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Congruence</h3>
              <p>Steady progress that feels deeply fulfilling.</p>
            </div>
            <div className="p-8 rounded-3xl bg-secondary/30 backdrop-blur-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Catalysis</h3>
              <p>Accelerating transformation through action.</p>
            </div>
          </div>
        </div>
      </div>
      <GlobalCTA kind="button" />
      <Footer />
    </main>
  );
};

export default Success369Page;
