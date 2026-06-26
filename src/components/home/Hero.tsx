"use client";

import React, { useState } from "react";

interface FlavorDetail {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  bgClass: string;
  accentClass: string;
  textAccent: string;
  desc: string;
  calories: number;
  protein: string;
  fat: string;
}

const FLAVORS: FlavorDetail[] = [
  {
    id: "makhana-salt",
    name: "Mukta Roasted Makhana",
    flavor: "Himalayan Pink Salt",
    price: 180,
    image: "/images/makhana_salt.png",
    bgClass: "bg-[#f1f6ed]",
    accentClass: "bg-[#7ca832] hover:bg-[#688a29]",
    textAccent: "text-[#3b592d]",
    desc: "Roasted to perfection with premium olive oil and sprinkled with direct-from-source Himalayan Pink Salt and cracked black pepper.",
    calories: 80,
    protein: "9.2g",
    fat: "1.2g",
  },
  {
    id: "makhana-peri",
    name: "Revel Roasted Makhana",
    flavor: "Spicy Peri Peri",
    price: 195,
    image: "/images/makhana_peri.png",
    bgClass: "bg-[#fcf0ee]",
    accentClass: "bg-[#dc2626] hover:bg-[#b91c1c]",
    textAccent: "text-[#991b1b]",
    desc: "A fiery twist of bird's eye chili, citrus zest, and hot garlic. For those who love a bold, crunchy, low-calorie punch in every bite.",
    calories: 85,
    protein: "9.4g",
    fat: "1.4g",
  },
  {
    id: "makhana-mint",
    name: "Aura Premium Lotus Seeds",
    flavor: "Mint Magic (Pudina)",
    price: 190,
    image: "/images/makhana_mint.png",
    bgClass: "bg-[#eef8f6]",
    accentClass: "bg-[#0d9488] hover:bg-[#0f766e]",
    textAccent: "text-[#115e59]",
    desc: "Cool mint leaves blended with wild coriander and tang of dry mango. An aromatic, fresh snacking experience to beat mid-day hunger.",
    calories: 82,
    protein: "9.3g",
    fat: "1.1g",
  },
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = FLAVORS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FLAVORS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FLAVORS.length) % FLAVORS.length);
  };

  return (
    <section className={`w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${current.bgClass}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-zinc-200/50 py-1.5 px-3.5 rounded-full text-xs font-bold text-zinc-700 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e8a324] animate-pulse"></span>
            <span>100% Organic Superfood Snack</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-tight">
              Delicious Snacks, <br className="hidden sm:inline" />
              <span className={current.textAccent}>Calories On Count!</span>
            </h1>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-xl">
              {current.desc}
            </p>
          </div>

          {/* Quick Nutrition stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md bg-white/70 border border-zinc-200/30 rounded-2xl p-4 shadow-xs backdrop-blur-xs">
            <div className="text-center">
              <span className="block text-xl font-black text-zinc-950">{current.calories} kcal</span>
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Calories</span>
            </div>
            <div className="text-center border-x border-zinc-200/80">
              <span className="block text-xl font-black text-zinc-950">{current.protein}</span>
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Protein / 100g</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-black text-zinc-950">{current.fat}</span>
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Low Fat</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#flavors"
              className={`text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 ${current.accentClass}`}
            >
              <span>Explore Flavors • ₹{current.price}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Carousel selectors */}
          <div className="flex items-center gap-2 pt-2">
            {FLAVORS.map((f, idx) => (
              <button
                key={f.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? "w-8 bg-[#3b592d]" : "w-2.5 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right: Product Display */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Main bag graphic */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 hover:scale-105 transition-transform duration-500 flex items-center justify-center filter drop-shadow-2xl">
            <img
              src={current.image}
              alt={current.flavor}
              className="w-full h-full object-contain animate-fadeIn"
            />
          </div>

          {/* Left/Right controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-zinc-50 shadow-md border border-zinc-200/50 flex items-center justify-center text-zinc-700 hover:text-[#7ca832] transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-6">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-zinc-50 shadow-md border border-zinc-200/50 flex items-center justify-center text-zinc-700 hover:text-[#7ca832] transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
