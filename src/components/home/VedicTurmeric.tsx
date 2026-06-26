"use client";

import React from "react";

export const VedicTurmeric: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#fdfcf3] border-t border-zinc-100 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-serif leading-tight">
            Ghasphus Himalayan Vedic Turmeric
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#7ca832] font-semibold text-xs tracking-wider uppercase">
            <span>🌿</span>
            <span>The Elixir of the Himalayas</span>
            <span>🌿</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Left Column: 3 Benefits (Right aligned on desktop) */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            {/* Benefit 1 */}
            <div className="flex lg:flex-row-reverse items-start gap-4 text-left lg:text-right">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Heart leaf */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Anti-Inflammatory Powerhouse
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Curcumin, the active compound in Ghasphus Himalayan Vedic Turmeric, is renowned for its potent anti-inflammatory properties.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex lg:flex-row-reverse items-start gap-4 text-left lg:text-right">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Plate and fork */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v1m0 16v1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Antioxidant Defense
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Turmeric is rich in antioxidants, which play a crucial role in neutralizing free radicals in the body.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex lg:flex-row-reverse items-start gap-4 text-left lg:text-right">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Bowl */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 22a10 10 0 0010-10H2a10 10 0 0010 10zM12 2a4 4 0 00-4 4h8a4 4 0 00-4-4z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Joint and Muscle Support
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Traditionally valued for its ability to promote joint health and flexibility, turmeric may be a natural ally for those seeking support in maintaining healthy joints and muscles.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column: Big Turmeric Bag mockup */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 hover:scale-[1.03] transition-transform duration-500 filter drop-shadow-2xl">
              <img
                src="/images/vedic_turmeric.png"
                alt="Himalayan Vedic Turmeric Bag"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column: 3 Benefits (Left aligned) */}
          <div className="lg:col-span-4 space-y-8 order-3">
            {/* Benefit 4 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Tea bag/cup */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.9 1.9 0 01-2-2V8h10zM12 4v4m-3-4h6" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Brain Health Boost
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Curcumin's potential neuroprotective properties have piqued interest in its role in supporting cognitive function.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Sprout grow stars */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4m9-2v4m-2-2h4m-7 8a5 5 0 015 5v2H5v-2a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Skin Radiance
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Turmeric's anti-inflammatory and antioxidant properties extend to skincare. It gives healthy skin by combating inflammation and promoting a radiant glow.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#7ca832]/25 shadow-2xs flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#7ca832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Cardio/fish check */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-zinc-950 uppercase tracking-wider font-serif">
                  Cardiovascular Support
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  Emerging research suggests that curcumin may have positive effects on heart health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
