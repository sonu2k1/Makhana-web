"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function MakhanaOfferings() {

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF8F5] via-white to-[#F5F2EB] relative overflow-hidden">
      {/* Decorative leaf blur spots */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide uppercase border border-emerald-200/60 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Official Product Spectrum
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3626] font-serif tracking-tight leading-tight">
            Raw, Roasted &amp; Flavored Makhana
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-900/75 leading-relaxed font-sans">
            Directly sourced from Mithila’s natural ponds. Available in raw bulk grades for exporters, olive-oil roasted bases, and gourmet seasoned snack pouches.
          </p>
        </div>

        {/* INTERACTIVE CARDS STACK */}
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* CARD 1: RAW MAKHANA */}
            <div className="group bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Bowl Image */}
                <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
                    <Image
                      src="/images/raw_makhana_bowl_clean.png"
                      alt="Raw Makhana in Wooden Bowl"
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-7 space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    Unprocessed &amp; Sun-Dried
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#1B3626] tracking-tight uppercase font-sans">
                      RAW <span className="text-emerald-800">MAKHANA</span>
                    </h3>
                    <div className="w-24 h-1 bg-emerald-600 rounded-full mt-2" />
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed font-sans">
                    Hand-harvested from Mithila ponds. Sun-dried and graded by expert hands into unbroken, high-swelling white fox nuts. Ideal for B2B export &amp; processing.
                  </p>

                  {/* Suta Grade Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["4 Suta (10mm+)", "5 Suta (13mm+)", "6 Suta (16mm+)", "7 Suta Jumbo (19mm+)"].map((grade, i) => (
                      <span key={i} className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold rounded-lg shadow-2xs">
                        {grade}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B3626] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-emerald-800 transition-colors shadow-md"
                    >
                      B2B &amp; Export Inquiry
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <span className="text-xs text-emerald-800/80 font-medium">Moisture &lt; 8% | Cleaned &amp; Graded</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: ROASTED MAKHANA (Signature Forest Green Banner Card like the brochure) */}
            <div className="group bg-[#0F3822] rounded-3xl p-6 sm:p-10 border border-emerald-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-white">
              {/* Background leaf pattern overlay */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
                <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 59 16.5 4.2 21.2C3.8 21.6 3.2 21.6 2.8 21.2C2.4 20.8 2.4 20.2 2.8 19.8C7.6 15 15.1 8 17 8Z" />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Content */}
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                    Slow-Cooked in Extra Virgin Olive Oil
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-sans">
                      ROASTED <span className="text-amber-400">MAKHANA</span>
                    </h3>
                    <div className="w-24 h-1 bg-amber-400 rounded-full mt-2" />
                  </div>

                  <p className="text-sm text-emerald-100/90 leading-relaxed font-sans">
                    Slow-roasted at low temperatures in olive oil to retain essential nutrients and achieve a light, airy crunch with zero trans-fat.
                  </p>

                  {/* Health Benefits Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["0g Trans Fat", "Diabetic Friendly", "Low Glycemic Index", "Rich in Calcium & Magnesium"].map((feat, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 text-emerald-100 text-xs font-semibold rounded-lg">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-emerald-950 text-xs sm:text-sm font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-md"
                    >
                      Shop Roasted Pouches
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: Bowl Image */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-all" />
                    <Image
                      src="/images/roasted_makhana_bowl_clean.png"
                      alt="Golden Roasted Makhana Bowl"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: FLAVORED MAKHANA */}
            <div className="group bg-[#F0F7F2] rounded-3xl p-6 sm:p-10 border border-teal-900/15 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left: Bowl Image */}
                <div className="md:col-span-5 flex justify-center order-2 md:order-1">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-teal-500/15 rounded-full blur-2xl group-hover:bg-teal-500/25 transition-all" />
                    <Image
                      src="/images/flavored_makhana_bowl_clean.png"
                      alt="Flavored Green Mint Makhana Bowl"
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-7 space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                    Chef-Crafted Seasoning Blends
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-[#1B3626] tracking-tight uppercase font-sans">
                      FLAVORED <span className="text-teal-700">MAKHANA</span>
                    </h3>
                    <div className="w-24 h-1 bg-teal-600 rounded-full mt-2" />
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed font-sans">
                    Seasoned with 100% natural herbs and spices. No artificial preservatives or synthetic colors. A guilt-free gourmet snack for any time of day.
                  </p>

                  {/* Flavor Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "🌶️ Spicy Peri Peri",
                      "🌿 Mint & Herbs",
                      "🧂 Himalayan Pink Salt",
                      "🧀 Classic Cheddar Cheese",
                    ].map((flv, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-teal-200 text-teal-900 text-xs font-bold rounded-lg shadow-2xs">
                        {flv}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B3626] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-emerald-800 transition-colors shadow-md"
                    >
                      Explore All Flavors
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
