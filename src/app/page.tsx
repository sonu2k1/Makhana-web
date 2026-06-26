import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { RunningTicker } from "@/components/home/RunningTicker";
import { FarmPhilosophy } from "@/components/home/FarmPhilosophy";
import { FarmVideo } from "@/components/home/FarmVideo";
import { WomenFarmers } from "@/components/home/WomenFarmers";
import { FarmToFork } from "@/components/home/FarmToFork";
import { FlavorExplorer } from "@/components/home/FlavorExplorer";
import { MakhanaMagic } from "@/components/home/MakhanaMagic";
import { VedicTurmeric } from "@/components/home/VedicTurmeric";
import { CalorieCalculator } from "@/components/home/CalorieCalculator";
import { FarmStats } from "@/components/home/FarmStats";
import { BlogAndPillars } from "@/components/home/BlogAndPillars";
import { TestimonialsAndMedia } from "@/components/home/TestimonialsAndMedia";

export default function Home() {
  return (
    <>
      {/* Dynamic Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Interactive Hero banner slider */}
        <Hero />

        {/* Text Marquee running ticker */}
        <RunningTicker />

        {/* Ghasphus Farm philosophy */}
        <FarmPhilosophy />

        {/* Live Farm video showcase */}
        <FarmVideo />

        {/* Women farmers empowerment */}
        <WomenFarmers />

        {/* Farm to fork supply chain visual */}
        <FarmToFork />

        {/* Interactive flavor catalog & shop */}
        <FlavorExplorer />

        {/* Wholesome stats details */}
        <MakhanaMagic />

        {/* Ghasphus Vedic Turmeric benefits */}
        <VedicTurmeric />

        {/* Portions-saving Calorie calculator chart */}
        <CalorieCalculator />

        {/* Ghasphus stats and banner */}
        <FarmStats />

        {/* Brand pillars and latest blog posts */}
        <BlogAndPillars />

        {/* Testimonials slider and media logos */}
        <TestimonialsAndMedia />
      </main>

      {/* Responsive footer */}
      <Footer />
    </>
  );
}
