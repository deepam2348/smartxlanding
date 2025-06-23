import HeroSection from "../components/HeroSection";
import PartnerLogos from "../components/PartnerLogos";
import AboutAlgoTrade from "../components/AboutAlgoTrade";
import HowItWorks from "../components/HowItWorks";
import SystemStats from "../components/SystemStats";
import TestimonialsSection from "../components/TestimonialsSection";
import StrategyCarousel from "../components/StrategyCarousel";
import CallToAction from "../components/CallToAction";
import TickerTape from "../components/TickerTape";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerTape />
      <PartnerLogos />
      <AboutAlgoTrade />
      <HowItWorks />
      <SystemStats />
      <TestimonialsSection />
      <StrategyCarousel />
      <CallToAction />
    </>
  );
}
