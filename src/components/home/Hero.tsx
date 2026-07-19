"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FlavorDetail {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  bgClass: string;
  accentClass: string;
  textAccent: string;
  badgeBg: string;
  desc: string;
  calories: number;
  protein: string;
  fat: string;
}

const FLAVORS: FlavorDetail[] = [
  {
    id: "makhana-salt",
    name: "Superfoods Bharat Roasted Makhana",
    flavor: "Himalayan Pink Salt & Pepper",
    price: 180,
    image: "/images/makhana_salt.png",
    bgClass: "bg-gradient-to-br from-[#F4F9F1] via-[#EBF3E6] to-[#E2EEDC]",
    accentClass: "bg-[#7ca832] hover:bg-[#688a29]",
    textAccent: "text-[#2D5A27]",
    badgeBg: "bg-[#7ca832]/15 text-[#2D5A27] border-[#7ca832]/30",
    desc: "Slow-roasted to crispy perfection with premium olive oil and sprinkled with direct-from-source Himalayan Pink Salt and cracked black pepper.",
    calories: 80,
    protein: "9.2g",
    fat: "1.2g",
  },
  {
    id: "makhana-peri",
    name: "Superfoods Bharat Roasted Makhana",
    flavor: "Spicy Peri Peri",
    price: 195,
    image: "/images/makhana_peri.png",
    bgClass: "bg-gradient-to-br from-[#FFF5F4] via-[#FCE8E6] to-[#FADBD8]",
    accentClass: "bg-[#dc2626] hover:bg-[#b91c1c]",
    textAccent: "text-[#991b1b]",
    badgeBg: "bg-[#dc2626]/15 text-[#991b1b] border-[#dc2626]/30",
    desc: "A fiery twist of bird's eye chili, citrus zest, and hot garlic. For those who love a bold, crunchy, low-calorie punch in every bite.",
    calories: 85,
    protein: "9.4g",
    fat: "1.4g",
  },
  {
    id: "makhana-mint",
    name: "Superfoods Bharat Premium Lotus Seeds",
    flavor: "Mint Magic & Herbs",
    price: 190,
    image: "/images/makhana_mint.png",
    bgClass: "bg-gradient-to-br from-[#F2FBF9] via-[#E4F5F1] to-[#D5EFE9]",
    accentClass: "bg-[#0d9488] hover:bg-[#0f766e]",
    textAccent: "text-[#115e59]",
    badgeBg: "bg-[#0d9488]/15 text-[#115e59] border-[#0d9488]/30",
    desc: "Cool mint leaves blended with wild coriander and tang of dry mango. An aromatic, fresh snacking experience to beat mid-day hunger.",
    calories: 82,
    protein: "9.3g",
    fat: "1.1g",
  },
  {
    id: "makhana-cheese",
    name: "Superfoods Bharat Gourmet Makhana",
    flavor: "Classic Cheddar Cheese",
    price: 210,
    image: "/images/makhana_cheese.png",
    bgClass: "bg-gradient-to-br from-[#FFFDF5] via-[#FEF9E7] to-[#FDEFD0]",
    accentClass: "bg-[#d97706] hover:bg-[#b45309]",
    textAccent: "text-[#92400e]",
    badgeBg: "bg-[#d97706]/15 text-[#92400e] border-[#d97706]/30",
    desc: "Indulgent cheddar cheese dust sprinkled over freshly popped makhana seeds. Savory richness with less than half the fat of popcorn.",
    calories: 90,
    protein: "9.0g",
    fat: "1.5g",
  },
  {
    id: "vedic-turmeric",
    name: "Superfoods Bharat Organic Spice",
    flavor: "Organic Vedic Turmeric",
    price: 249,
    image: "/images/vedic_turmeric.png",
    bgClass: "bg-gradient-to-br from-[#FFF8F3] via-[#FEEDDF] to-[#FDE2CA]",
    accentClass: "bg-[#ea580c] hover:bg-[#c2410c]",
    textAccent: "text-[#c2410c]",
    badgeBg: "bg-[#ea580c]/15 text-[#c2410c] border-[#ea580c]/30",
    desc: "Directly sourced high-curcumin organic turmeric powder from Himalayan foothills. Fresh, pure, anti-inflammatory, and antioxidant-rich.",
    calories: 15,
    protein: "Pure",
    fat: "0.0g",
  },
];

const SLIDE_DURATION_MS = 5000;
const TICK_INTERVAL_MS = 50;

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const current = FLAVORS[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (TICK_INTERVAL_MS / SLIDE_DURATION_MS) * 100;
        if (nextProgress >= 100) {
          handleNext();
          return 0;
        }
        return nextProgress;
      });
    }, TICK_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % FLAVORS.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + FLAVORS.length) % FLAVORS.length);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ease-in-out select-none relative overflow-hidden ${current.bgClass}`}
    >
      {/* Background ambient lighting blurs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative leaf SVGs */}
      <div className="absolute top-6 right-12 opacity-10 pointer-events-none">
        <svg className="w-32 h-32 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: Headline & Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          {/* Top Tag Badge */}
          <div className={`inline-flex items-center gap-2 border py-1.5 px-4 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs ${current.badgeBg}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span>🌱 100% Organic Superfood • Mithila Ponds</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-snug">
              Delicious Snacks, <br className="hidden sm:inline" />
              <span className={`transition-all duration-500 ${current.textAccent}`}>
                {current.flavor}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-700/90 leading-relaxed max-w-xl font-medium">
              {current.desc}
            </p>
          </div>

          {/* Glassmorphic Quick Nutrition Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md bg-white/80 border border-white/60 rounded-2xl p-4 shadow-md backdrop-blur-md">
            <div className="text-center">
              <span className="block text-2xl font-black text-zinc-950 leading-none">{current.calories}</span>
              <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">Calories</span>
            </div>
            <div className="text-center border-x border-zinc-200/80 px-2">
              <span className="block text-2xl font-black text-zinc-950 leading-none">{current.protein}</span>
              <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">Protein / 100g</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black text-zinc-950 leading-none">{current.fat}</span>
              <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">Low Fat</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <a
              href="#products"
              className={`text-white px-8 py-3.5 rounded-full font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer ${current.accentClass}`}
            >
              <span>Explore All Flavors</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Animated Progress Loader Bar Indicators */}
          <div className="flex items-center gap-3 pt-2">
            {FLAVORS.map((f, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={f.id}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "w-14 h-3 bg-zinc-300/80 border border-zinc-400/60 shadow-inner"
                      : "w-3 h-3 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {/* Progress fill bar inside active indicator pill */}
                  {isActive && (
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-[#2D5A27] rounded-full transition-all duration-75 ease-linear shadow-xs"
                    />
                  )}
                </button>
              );
            })}
            <span className="text-xs text-zinc-500 font-bold pl-2">
              {currentIndex + 1} / {FLAVORS.length}
            </span>
          </div>
        </div>

        {/* Right: Product Display Podium & Badges */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Glowing Aura Ring & Pedestal Shadow */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
            {/* Glowing background halo */}
            <div className="absolute inset-4 rounded-full bg-white/60 blur-2xl animate-pulse pointer-events-none" />

            {/* Pedestal Shadow Platform */}
            <div className="absolute bottom-6 w-64 h-12 bg-black/15 rounded-full blur-md pointer-events-none" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 right-2 sm:right-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-emerald-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
              <span>🌿 100% Organic</span>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-10 left-2 sm:left-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-amber-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
              <span>✨ Olive Oil Roasted</span>
            </div>

            {/* Main Product Pouch Graphic with smooth scale/fade transition */}
            <div
              className={`relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 transition-all duration-500 ease-out transform ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Image
                src={current.image}
                alt={current.flavor}
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Left/Right Floating Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-6 z-30">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg border border-white/80 flex items-center justify-center text-zinc-800 hover:text-[#7ca832] transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-6 z-30">
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white/90 hover:bg-white shadow-lg border border-white/80 flex items-center justify-center text-zinc-800 hover:text-[#7ca832] transition-all hover:scale-110 cursor-pointer backdrop-blur-md"
              aria-label="Next slide"
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
