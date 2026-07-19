"use client";

import React, { useState } from "react";
import Image from "next/image";

interface JourneyStep {
  number: number;
  processLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  side: "left" | "right"; // Side where text/label appears relative to center line
}

const STEPS: JourneyStep[] = [
  {
    number: 1,
    processLabel: "1st Process",
    title: "Seed Harvest",
    subtitle: "Manual Sourcing from Wetlands",
    description:
      "Harvesters dive into deep lotus ponds (chaurs) in Bihar & Uttarakhand to harvest raw prickly water lily seeds from the muddy pond bed.",
    image: "/images/journey_seed_harvest.png",
    side: "right",
  },
  {
    number: 2,
    processLabel: "2nd Process",
    title: "Sun-Drying",
    subtitle: "Natural Moisture Evaporation",
    description:
      "Harvested black seeds are washed and spread evenly on traditional woven bamboo mats under natural direct sunlight for 4 to 6 days.",
    image: "/images/journey_sun_drying.png",
    side: "left",
  },
  {
    number: 3,
    processLabel: "3rd Process",
    title: "Roasting & Popping",
    subtitle: "High-Heat Clay Convection",
    description:
      "Seeds are roasted in heavy iron woks over controlled wood fire. When heated, they are swiftly struck with wooden hammers to pop into white Makhanas.",
    image: "/images/journey_roasting_popping.png",
    side: "right",
  },
  {
    number: 4,
    processLabel: "4th Process",
    title: "Sorting & Grading",
    subtitle: "Hand Selection by Women Farmers",
    description:
      "Popped Makhanas pass through manual sieve screens where skilled women harvesters hand-grade them into premium jumbo sizes and uniform shapes.",
    image: "/images/journey_sorting_grading.png",
    side: "left",
  },
  {
    number: 5,
    processLabel: "5th Process",
    title: "Polishing",
    subtitle: "Husk Removal & Whitening",
    description:
      "Gentle friction tumbling removes remaining dark seed coat husks, polishing the Makhanas to reveal their snow-white, spotless surface.",
    image: "/images/journey_polishing.png",
    side: "right",
  },
  {
    number: 6,
    processLabel: "6th Process",
    title: "Packaging",
    subtitle: "Nitrogen Flushed Sealing",
    description:
      "Pure polished Makhanas are packed into food-grade, nitrogen-flushed multi-layer pouches to preserve farm-fresh crunch and nutrients.",
    image: "/images/journey_packaging.png",
    side: "left",
  },
];

export const MakhanaJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#F9F7F1] relative overflow-hidden select-none">
      {/* Background Watermark Lotus Motifs */}
      <div className="absolute top-12 left-6 opacity-15 pointer-events-none">
        <svg className="w-32 h-32 text-[#15803D]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="12" />
          <path d="M50 15 C45 30 40 40 50 48 C60 40 55 30 50 15 Z" />
          <path d="M50 85 C45 70 40 60 50 52 C60 60 55 70 50 85 Z" />
          <path d="M15 50 C30 45 40 40 48 50 C40 60 30 55 15 50 Z" />
          <path d="M85 50 C70 45 60 40 52 50 C60 60 70 55 85 50 Z" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-6 opacity-15 pointer-events-none">
        <svg className="w-40 h-40 text-[#15803D]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="12" />
          <path d="M50 15 C45 30 40 40 50 48 C60 40 55 30 50 15 Z" />
          <path d="M50 85 C45 70 40 60 50 52 C60 60 55 70 50 85 Z" />
          <path d="M15 50 C30 45 40 40 48 50 C40 60 30 55 15 50 Z" />
          <path d="M85 50 C70 45 60 40 52 50 C60 60 70 55 85 50 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#15803D]/10 text-[#15803D] text-xs font-black uppercase tracking-widest border border-[#15803D]/20">
            <span>🌾 Traditional Farm-to-Fork Process</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F3822] tracking-tight uppercase font-serif">
            THE JOURNEY OF MAKHANA
          </h2>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="w-16 h-0.5 bg-[#15803D]/40 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-[#15803D] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-white" />
            </div>
            <div className="w-16 h-0.5 bg-[#15803D]/40 rounded-full" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Green Timeline Stem */}
          <div className="absolute left-1/2 top-4 bottom-12 -translate-x-1/2 w-1 bg-[#15803D] rounded-full hidden md:block" />

          {/* Timeline Process Steps */}
          <div className="space-y-16 sm:space-y-24">
            {STEPS.map((step) => {
              const isHovered = activeStep === step.number;
              const isTextLeft = step.side === "left";

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(step.number)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0 group"
                >
                  {/* Central Timeline Node (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
                    <div
                      className={`w-11 h-11 rounded-full bg-[#0F3822] border-4 border-[#F9F7F1] flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                        isHovered ? "scale-125 bg-[#15803D] ring-4 ring-[#15803D]/20" : ""
                      }`}
                    >
                      {/* Floral Lotus Icon in Node */}
                      <svg className="w-5 h-5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C10.5 5 9 8 12 11.5C15 8 13.5 5 12 2Z" />
                        <path d="M12 22C10.5 19 9 16 12 12.5C15 16 13.5 19 12 22Z" />
                        <path d="M2 12C5 10.5 8 9 11.5 12C8 15 5 13.5 2 12Z" />
                        <path d="M22 12C19 10.5 16 9 12.5 12C16 15 19 13.5 22 12Z" />
                        <circle cx="12" cy="12" r="2.5" className="fill-amber-400" />
                      </svg>
                    </div>
                  </div>

                  {/* Left Side Column */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isTextLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:order-2 md:text-left"
                    }`}
                  >
                    {isTextLeft ? (
                      /* Text Box on Left */
                      <div
                        className={`space-y-2 transition-all duration-300 ${
                          isHovered ? "translate-x-[-4px]" : ""
                        }`}
                      >
                        <span className="inline-block text-xs sm:text-sm font-extrabold text-[#15803D] uppercase tracking-wider">
                          {step.processLabel}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0F3822] font-serif tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-amber-700 font-extrabold tracking-wide uppercase">
                          {step.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-md ml-auto">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Image Card on Left */
                      <div className="relative group/img overflow-hidden rounded-3xl border-2 border-emerald-900/10 shadow-md bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] relative w-full overflow-hidden bg-amber-50">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                        </div>
                        {/* Process Number Floating Tag */}
                        <div className="absolute top-3 left-3 bg-[#0F3822]/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full border border-emerald-400/30">
                          {step.processLabel}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side Column */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isTextLeft ? "md:pl-14 md:order-2 md:text-left" : "md:pr-14 md:text-right"
                    }`}
                  >
                    {!isTextLeft ? (
                      /* Text Box on Right */
                      <div
                        className={`space-y-2 transition-all duration-300 ${
                          isHovered ? "translate-x-[4px]" : ""
                        }`}
                      >
                        <span className="inline-block text-xs sm:text-sm font-extrabold text-[#15803D] uppercase tracking-wider">
                          {step.processLabel}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0F3822] font-serif tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-amber-700 font-extrabold tracking-wide uppercase">
                          {step.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Image Card on Right */
                      <div className="relative group/img overflow-hidden rounded-3xl border-2 border-emerald-900/10 shadow-md bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] relative w-full overflow-hidden bg-amber-50">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                          />
                        </div>
                        {/* Process Number Floating Tag */}
                        <div className="absolute top-3 right-3 bg-[#0F3822]/90 backdrop-blur-md text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full border border-emerald-400/30">
                          {step.processLabel}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Lotus Wetland Decorative Banner */}
        <div className="mt-20 sm:mt-28 relative rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-900/10 bg-gradient-to-b from-[#1E5631] to-[#0A2613] p-8 sm:p-12 text-center text-white">
          {/* Animated Water Ripples Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(52,211,153,0.15),transparent_70%)] pointer-events-none" />

          {/* Floating Lotus Leaves SVG Illustration Art */}
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            {/* Lotus Flower Top Icon */}
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-800/60 border border-emerald-400/30 flex items-center justify-center text-pink-300 shadow-inner">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C10 7 7 10 12 14C17 10 14 7 12 3Z" fill="#F472B6" />
                <path d="M12 14C7 11 3 13 4 17C9 19 11 16 12 14Z" fill="#EC4899" />
                <path d="M12 14C17 11 21 13 20 17C15 19 13 16 12 14Z" fill="#EC4899" />
                <path d="M12 14C9 16 7 20 12 22C17 20 15 16 12 14Z" fill="#DB2777" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif tracking-tight text-emerald-100">
              Preserving 3,000 Years of Vedic Wetland Heritage
            </h3>

            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-medium">
              Every single seed harvested by Super Food Bharat supports sustainable aquatic ecosystems in Mithila and Uttarakhand, empowering over 500+ rural farming households with fair-trade livelihood.
            </p>

            {/* Floating Makhana Leaf Badges Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] font-black uppercase tracking-wider text-amber-300">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                🌿 100% Hand-Harvested
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                🔥 Wood-Fire Popped
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                ☀️ Sun-Dried Purity
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                🤝 Direct Farmer Fair-Trade
              </span>
            </div>
          </div>

          {/* Bottom Lotus Leaf Wave Floor */}
          <div className="mt-8 pt-6 border-t border-emerald-700/30 flex items-center justify-between text-[10px] uppercase font-black tracking-widest text-emerald-400/80 relative z-10">
            <span>Wetland Ecosystem Protected 🪷</span>
            <span>Made in Bharat 🇮🇳</span>
          </div>
        </div>
      </div>
    </section>
  );
};
