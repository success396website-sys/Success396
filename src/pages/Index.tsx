import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import JourneySection from "@/components/JourneySection";
import VideoCardsSection from "@/components/VideoCardsSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Success369 — Build Success That Is Aligned</title>
        <meta name="description" content="Success369 helps individuals, leaders, and organisations build sustainable success through clarity, congruence, and catalysis." />
        <link rel="canonical" href="https://success369.org" />
        <meta property="og:title" content="Success369 — Build Success That Is Aligned" />
        <meta property="og:description" content="Success369 helps individuals, leaders, and organisations build sustainable success through clarity, congruence, and catalysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://success369.org" />
        <meta property="og:image" content="https://success369.org/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success369 — Build Success That Is Aligned" />
        <meta name="twitter:description" content="Success369 helps individuals, leaders, and organisations build sustainable success through clarity, congruence, and catalysis." />
        <meta name="twitter:image" content="https://success369.org/og-image.png" />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Success369",
            "url": "https://success369.org",
            "logo": "https://success369.org/favicon.png",
            "description": "A philosophy-led, systems-driven enterprise headquartered in Bengaluru, India. We architect meaningful success through disciplined execution.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressCountry": "IN"
            },
            "sameAs": []
          })}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Success369",
            "url": "https://success369.org"
          })}
        </script>
      </Helmet>

      <Navbar />
      <HeroSlider />
      <JourneySection />
      <VideoCardsSection />
      <TrainersSection />
      <TestimonialsSection />
      <FAQSection />
      <GlobalCTA 
        kind="form" 
        title="STAY CONNECTED" 
        description="Stay updated with insights on clarity, alignment, and sustainable success."
        id="newsletter"
      />
      <Footer />
    </main>
  );
};

export default Index;
