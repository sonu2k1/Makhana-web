"use client";

import React from "react";

export const FarmToFork: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5] border-t border-zinc-100 relative">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* Title Block */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3b592d] tracking-tight font-serif leading-tight">
            From Farm to Fork
          </h2>
          <p className="text-sm text-zinc-500 font-medium leading-relaxed">
            Experience the Farm to Fork Journey with Super Food Bharat, Bringing Nature's Best to Your Plate
          </p>
        </div>

        {/* Arched Process Mapping visual */}
        <div className="relative max-w-4xl mx-auto py-8">
          {/* Background Connecting SVG Arch */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 800 300" fill="none">
              <path
                d="M 120 220 Q 400 40 680 220"
                stroke="#d1cfc7"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 items-center justify-items-center">
            {/* Left Circle: Farm Sowing */}
            <div className="flex flex-col items-center space-y-3 group md:translate-y-12">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/farm_to_fork_sowing.png"
                  alt="Farm Sowing Seeds"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                1. Sowing The Seed
              </span>
            </div>

            {/* Top Circle: Super Food Bharat Team */}
            <div className="flex flex-col items-center space-y-3 group md:-translate-y-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/farm_to_fork_team.png"
                  alt="Super Food Bharat Team Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-black uppercase text-[#3b592d] tracking-wider">
                2. Ethical Processing
              </span>
            </div>

            {/* Right Circle: Cooking */}
            <div className="flex flex-col items-center space-y-3 group md:translate-y-12">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/farm_to_fork_cooking.png"
                  alt="Cooking at Home"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                3. Plate Consumption
              </span>
            </div>
          </div>
        </div>

        {/* Feature Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 border-t border-zinc-200/50">
          {/* Icon 1: 100% Organic */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#d946ef]/20 border border-[#d946ef]/30 flex items-center justify-center text-[#be185d]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Farmer/sprout */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 11c1.5 0 2.5-1 2.5-2.5S13.5 6 12 6s-2.5 1-2.5 2.5S10.5 11 12 11zm0 0v8m-4-4s2-1 4-1 4 1 4 1" />
              </svg>
            </div>
            <h3 className="text-sm font-black text-zinc-900 tracking-tight leading-tight uppercase font-serif">
              100% Organic <br />& Natural
            </h3>
          </div>

          {/* Icon 2: Non Adulterated */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/30 flex items-center justify-center text-[#0891b2]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Leaf profile */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <h3 className="text-sm font-black text-zinc-900 tracking-tight leading-tight uppercase font-serif">
              Non <br />Adulterated
            </h3>
          </div>

          {/* Icon 3: 100% Authentic */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#f97316]/20 border border-[#f97316]/30 flex items-center justify-center text-[#ea580c]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Authentic mesh/grain */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-sm font-black text-zinc-900 tracking-tight leading-tight uppercase font-serif">
              100% <br />Authentic
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
