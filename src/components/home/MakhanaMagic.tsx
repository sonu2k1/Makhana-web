"use client";

import React from "react";

export const MakhanaMagic: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#852932] text-white overflow-hidden relative">
      {/* Decorative floral white drawings representing lotus pod and flower */}
      <div className="absolute top-4 left-4 opacity-10 pointer-events-none select-none">
        <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 opacity-15 pointer-events-none select-none">
        <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bowl of Popped Makhana */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-full border-8 border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/images/makhana_red_bowl.png"
              alt="Makhana Magic Bowl"
              className="w-full h-full object-cover scale-[1.08]"
            />
          </div>
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-serif">
              Makhana Magic, A Wholesome Snack for a Healthier You!
            </h2>
            <div className="w-20 h-0.5 bg-[#e8a324] opacity-80"></div>
          </div>

          <p className="text-sm sm:text-base text-zinc-100 leading-relaxed font-sans font-medium max-w-2xl">
            Bursting with high-quality proteins, these delicate yet robust seeds are an ideal addition to your diet, promoting muscle health and providing sustained energy. But that's not all - rich in dietary fibers, Makhana contributes to digestive wellness, fostering a happy gut and aiding in weight management.
          </p>

          {/* Stats indicators grid */}
          <div className="grid grid-cols-3 gap-6 pt-4 max-w-xl border-t border-white/10">
            <div className="space-y-1">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                10
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-zinc-300 tracking-wider">
                Grams of Protein
              </span>
            </div>
            <div className="space-y-1 border-x border-white/10 px-6">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                16
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-zinc-300 tracking-wider">
                Grams of Fiber
              </span>
            </div>
            <div className="space-y-1 pl-2">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                350
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-zinc-300 tracking-wider">
                Calories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
