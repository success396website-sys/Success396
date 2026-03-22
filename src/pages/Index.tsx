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
        <meta property="og:title" content="Success369 — Build Success That Is Aligned" />
        <meta property="og:description" content="Build sustainable success with clarity and alignment. Explore specialized journeys for leaders and organisations." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
