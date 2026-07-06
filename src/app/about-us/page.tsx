"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface PillarItem {
  id: number;
  bgClass: string;
  title: string;
  text: string;
}

const PILLARS: PillarItem[] = [
  {
    id: 1,
    bgClass: "bg-[#423d60]",
    title: "Pure and Organic",
    text: "We source the finest ingredients directly from nature, ensuring that every product is free from harmful pesticides and chemicals. From farm to table, we guarantee the purity and authenticity of our offerings.",
  },
  {
    id: 2,
    bgClass: "bg-[#7a531e]",
    title: "A Culinary Adventure",
    text: "Elevate your culinary experience with our diverse range of organic food products. Whether you're a seasoned chef or a home cook, Super Food Bharat brings you flavors that inspire and ingredients that empower your kitchen creations.",
  },
  {
    id: 3,
    bgClass: "bg-[#6e2d31]",
    title: "Sustainable Practices",
    text: "We are committed to sustainability. Our eco-friendly packaging reflects our dedication to reducing our environmental footprint. Join us on a journey towards a greener, healthier planet.",
  },
  {
    id: 4,
    bgClass: "bg-[#4e5d42]",
    title: "Empowering Women Farmers",
    text: "By choosing Super Food Bharat, you not only prioritize your well-being but also contribute to the empowerment of Women farmers, fostering a cycle of positivity that resonates from farm to fork.",
  },
];

interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2021",
    title: "Rooted in Wellness",
    subtitle: "Brand Inception & Idea",
    description: "Super Food Bharat was born in the foothills of Uttarakhand with a single vision: to bring clean, unadulterated heritage grains and lotus seeds back to urban dining tables.",
    image: "/images/blog_leaf.png"
  },
  {
    year: "2022",
    title: "Socio-Economic Alliance",
    subtitle: "Empowering Bihar's Harvesters",
    description: "Partnered with self-help groups representing 200+ women farmers in Bihar, securing ethical direct sourcing contracts that eliminated middlemen completely.",
    image: "/images/farm_to_fork_sowing.png"
  },
  {
    year: "2024",
    title: "Slow-Roasting Facility",
    subtitle: "Modernizing Traditional Convection",
    description: "Inaugurated our eco-conscious manufacturing unit in Dehradun, combining ancient clay-pot convection methods with modern strict-hygiene packaging standards.",
    image: "/images/farm_to_fork_cooking.png"
  },
  {
    year: "2026",
    title: "Worldwide Health Mission",
    subtitle: "D2C Scaling & Export",
    description: "Successfully delivered guilt-free nutrition to over 100,000 homes in India, while initiating exports of specialized flavored Makhanas to international markets.",
    image: "/images/farm_to_fork_team.png"
  }
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aarav Sharma",
    role: "Co-Founder & CEO",
    bio: "Agronomist & visionary. Aarav has spent over a decade working alongside farmer cooperatives to build robust, ethical agricultural supply chains across India.",
    initials: "AS",
    color: "bg-[#3b592d]"
  },
  {
    name: "Dr. Meera Iyer",
    role: "Chief Nutrition Officer",
    bio: "Pioneering researcher in ancient Indian superfoods. Dr. Meera ensures that our slow-roasting techniques preserve maximum vitamins, calcium, and prebiotic integrity.",
    initials: "MI",
    color: "bg-[#7ca832]"
  },
  {
    name: "Sunita Devi",
    role: "Farmer Co-op Coordinator",
    bio: "Leading our ground operations in Bihar, Sunita coordinates and trains women farmers in organic cultivation, quality sorting, and ecological waste disposal.",
    initials: "SD",
    color: "bg-[#e8a324]"
  }
];

interface HarvestStep {
  step: string;
  title: string;
  detail: string;
  icon: string;
}

const HARVEST_STEPS: HarvestStep[] = [
  {
    step: "01",
    title: "Pond Sowing & Diving",
    detail: "Harvesting begins in freshwater wetlands. Local harvesters dive to gather raw black seeds from the muddy beds of lotus crops, utilizing techniques passed down through generations.",
    icon: "🤿"
  },
  {
    step: "02",
    title: "Sun Drying & Cleansing",
    detail: "Seeds are washed thoroughly to remove pond silt, then spread evenly on bamboo mats under natural sunlight to dry, reducing moisture to optimal levels for popping.",
    icon: "☀️"
  },
  {
    step: "03",
    title: "Seed Shell Tempering",
    detail: "Dried seeds undergo heat tempering and curing over several days. This hardens the black outer shells, making them ready to withstand intense pressure.",
    icon: "🪵"
  },
  {
    step: "04",
    title: "Mallet Popping",
    detail: "The tempered seeds are dry-roasted in small iron pans and immediately popped by hand using a wooden mallet. The black shell splits apart, revealing the raw white puff.",
    icon: "🔨"
  },
  {
    step: "05",
    title: "Olive Oil Roasting",
    detail: "Raw puffs are transported to our clean Dehradun facility. Here, they are slow-roasted in extra virgin olive oil or ghee and dusted with organic spices before packaging.",
    icon: "🌿"
  }
];

interface EcoPromise {
  title: string;
  description: string;
  icon: string;
}

const ECO_PROMISES: EcoPromise[] = [
  {
    title: "Water Conscious",
    description: "Lotus seeds grow in natural, non-irrigated wetlands, conserving millions of liters of farm groundwater compared to wheat or paddy cultivation.",
    icon: "💧"
  },
  {
    title: "Zero Pesticides",
    description: "Our farming cooperatives employ organic bio-compost, avoiding synthetic chemical run-offs and maintaining natural aquatic biodiversity.",
    icon: "🍃"
  },
  {
    title: "Carbon-Light Roasting",
    description: "By moving from wood-fire roasting to advanced hot-air convection ovens, we reduce carbon emissions during manufacturing by 65%.",
    icon: "⚡"
  },
  {
    title: "Recyclable Packs",
    description: "Our retail bags use mono-polymer materials that are easily recyclable, reducing landfill waste and minimizing our plastic footprint.",
    icon: "♻️"
  }
];

export default function AboutUsPage() {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  return (
    <>
      {/* Header */}
      <Header />

      <main className="flex-1 bg-[#faf8f5]">
        {/* Banner Section */}
        <div className="w-full bg-[#3b592d] text-white py-20 px-4 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,168,50,0.15),transparent_50%)]"></div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <span className="text-[10px] font-black tracking-widest text-[#7ca832] uppercase bg-[#7ca832]/10 px-3 py-1 rounded-full border border-[#7ca832]/25">
              Our Philosophy & Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-serif tracking-tight">
              About Super Food Bharat
            </h1>
            <p className="text-xs sm:text-sm text-zinc-200/90 max-w-xl mx-auto leading-relaxed font-medium">
              We want to be the change agent in our community by persuading people that living a healthier lifestyle is simple, tasty, and sustainable.
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          
          {/* Breadcrumb Path */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest pb-4 border-b border-zinc-200/60">
            <a href="/" className="hover:text-[#7ca832] transition-colors">Home</a>
            <span>/</span>
            <span className="text-zinc-800">About Us</span>
          </div>

          {/* Section 1: Our Story / Farm Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-[40%_60%_50%_50%_/_50%_60%_40%_50%] border-4 border-[#7ca832]/25 shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="/images/farm_philosophy.png"
                  alt="Super Food Bharat Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side: Philosophy Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                  The Journey of Purity
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1e251f] tracking-tight leading-tight font-serif">
                  Organic and Green, <br />
                  that's Our Dream!
                </h2>
                <div className="w-20 h-0.5 bg-[#7ca832] opacity-80 mt-4"></div>
              </div>

              <div className="space-y-5 text-sm text-zinc-600 leading-relaxed font-medium">
                <p>
                  At Super Food Bharat, we are passionate about providing you with food that not only nourishes your body but also delights your taste buds. Our products are carefully chosen to ensure that they meet the highest standards of quality, purity, and sustainability.
                </p>
                <p>
                  It is our mission to persuade people that living a healthier lifestyle is not difficult to maintain, and that the quality of their nutritious food does not have to come at the expense of taste. We work hard to give them the energy they need to get through the day. At the same time, we ensure that they enjoy their journey while learning about the years of industrial damage caused by contaminated and tampered food.
                </p>
              </div>
            </div>
          </div>

          {/* Sourcing Process Section (New Educational Component) */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Traditional Cultivation
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                How Makhana Is Cultivated
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                The painstaking traditional steps of sourcing and processing the water lily crop.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {HARVEST_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white border border-zinc-100 rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden text-left"
                >
                  <div className="absolute top-4 right-4 text-3xl font-black text-zinc-100 select-none">
                    {step.step}
                  </div>
                  <div className="space-y-4">
                    <span className="text-2xl block select-none">{step.icon}</span>
                    <h3 className="text-xs font-black text-zinc-950 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Empowering Women Farmers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#fafbfa] rounded-3xl p-8 lg:p-12 border border-zinc-100">
            {/* Left Side: Text */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-3">
                <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                  Socio-Economic Sourcing
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight font-serif">
                  Empowering the Roots: <br />
                  Our Women Farmers
                </h2>
                <div className="w-20 h-0.5 bg-[#7ca832] opacity-80 mt-4"></div>
              </div>

              <div className="space-y-5 text-sm text-zinc-600 leading-relaxed font-medium">
                <p>
                  We believe that the heart of every nutritious meal lies in the hands of the dedicated farmers who cultivate our food. Our commitment to providing you with all-natural and organic products goes hand in hand with supporting local farmers practicing sustainable agriculture.
                </p>
                <p>
                  By establishing direct relationships with women farmer cooperatives in rural communities, we eliminate middlemen, ensuring they receive fair compensation for their labor. This not only uplifts their families economically but also helps preserve traditional, eco-friendly farming practices.
                </p>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-[60%_40%_40%_60%_/_40%_60%_40%_60%] border-4 border-[#e8a324]/20 shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <img
                  src="/images/women_farmers.png"
                  alt="Women Farmers Empowerment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Timeline Milestones Section */}
          <div className="space-y-8 bg-white border border-zinc-100 rounded-3xl p-8 lg:p-12">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Our Evolution
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Our Sourcing Journey
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Click on the years below to view how we expanded our farm operations and impact over time.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            {/* Interactive Timeline Tabs */}
            <div className="flex justify-center items-center gap-2 sm:gap-6 border-b border-zinc-100 pb-6 max-w-xl mx-auto">
              {MILESTONES.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`text-sm sm:text-base font-extrabold px-4 sm:px-6 py-2.5 rounded-full border transition-all cursor-pointer ${
                    activeMilestone === idx
                      ? "bg-[#3b592d] text-white border-[#3b592d] shadow-sm"
                      : "bg-[#faf8f5] text-zinc-600 border-zinc-200 hover:border-[#3b592d] hover:text-[#3b592d]"
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            {/* Timeline content block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
              <div className="md:col-span-5 flex justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-zinc-100 relative group select-none bg-zinc-50">
                  <img
                    src={MILESTONES[activeMilestone].image}
                    alt={MILESTONES[activeMilestone].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-xs font-black uppercase text-white tracking-widest bg-[#3b592d] px-3 py-1 rounded-sm">
                    {MILESTONES[activeMilestone].subtitle}
                  </span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4 text-left">
                <span className="text-xs font-black text-[#7ca832] uppercase tracking-wider">
                  Milestone - {MILESTONES[activeMilestone].year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 font-serif leading-tight">
                  {MILESTONES[activeMilestone].title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                  {MILESTONES[activeMilestone].description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest">
                  <span>✓ 100% Traceable</span>
                  <span>•</span>
                  <span>✓ Direct Sourcing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Meet the Team */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                The People Behind The Crunch
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Our Core Team
              </h2>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-zinc-100 rounded-3xl p-6 flex flex-col items-center text-center space-y-4 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center font-serif text-xl font-bold border-2 border-white shadow-md`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-zinc-950 uppercase tracking-tight">
                      {member.name}
                    </h3>
                    <span className="text-[10px] font-bold text-[#7ca832] uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Promise Section (New Eco/Sustainability Component) */}
          <div className="bg-[#f0f4ef] border border-zinc-200/50 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#3b592d] uppercase font-sans">
                Ecological Commitment
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Our Sustainability Promise
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Snacking that respects the biosphere, conserves clean water, and supports nature.
              </p>
              <div className="w-16 h-0.5 bg-[#3b592d] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ECO_PROMISES.map((promise) => (
                <div
                  key={promise.title}
                  className="bg-white p-6 rounded-2xl flex flex-col space-y-3 shadow-xs text-left"
                >
                  <span className="text-3xl select-none">{promise.icon}</span>
                  <h3 className="text-xs font-black text-zinc-900 uppercase tracking-wider">
                    {promise.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Brand Pillars Grid */}
          <div className="space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Our Foundation
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                The Four Pillars of Super Food Bharat
              </h2>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`${pillar.bgClass} p-8 text-white rounded-3xl flex flex-col justify-start space-y-4 min-h-[280px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <span className="text-4xl font-serif font-black opacity-60 leading-none">
                    {pillar.id}.
                  </span>
                  <h3 className="text-base font-extrabold uppercase tracking-wider font-serif">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-200/80 leading-relaxed font-medium">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications & Trust Badges */}
          <div className="space-y-8 bg-[#f5f8f3]/80 border border-[#7ca832]/10 rounded-3xl p-8 text-center">
            <div className="space-y-2 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Verified Credentials
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 font-serif tracking-tight">
                Certified Premium Quality
              </h3>
              <div className="w-12 h-0.5 bg-[#3b592d] mx-auto opacity-80"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-4">
              {[
                { title: "USDA Organic", subtitle: "100% Certified Natural", icon: "🌱" },
                { title: "FSSAI Registered", subtitle: "Strict Hygiene Standard", icon: "🛡️" },
                { title: "India Organic", subtitle: "Traceable Sourcing", icon: "🇮🇳" },
                { title: "Non-GMO Project", subtitle: "Zero Adulteration", icon: "🔬" },
                { title: "ISO 22000", subtitle: "Food Safety Quality", icon: "⚙️" },
              ].map((badge) => (
                <div key={badge.title} className="flex flex-col items-center space-y-1 min-w-[120px]">
                  <span className="text-3xl select-none">{badge.icon}</span>
                  <h4 className="text-xs font-black text-zinc-900 uppercase tracking-tight">
                    {badge.title}
                  </h4>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
                    {badge.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
