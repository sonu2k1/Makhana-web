"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface MagicSlide {
  id: string;
  name: string;
  tag: string;
  bgColor: string;
  accentColor: string;
  image: string;
  title: string;
  description: string;
  protein: string;
  fiber: string;
  calories: string;
}

const MAGIC_SLIDES: MagicSlide[] = [
  {
    id: "peri-peri",
    name: "Spicy Peri Peri",
    tag: "🌶️ SPICY & TANGY BOWL",
    bgColor: "#851818",
    accentColor: "#F59E0B",
    image: "/images/makhana_peri_bowl.png",
    title: "Makhana Magic, A Wholesome Snack for a Healthier You!",
    description:
      "Bursting with high-quality proteins, these fiery bird's eye chili & oregano roasted lotus seeds promote muscle health and provide sustained energy. Rich in dietary fiber for digestive wellness and weight management.",
    protein: "10",
    fiber: "16",
    calories: "85",
  },
  {
    id: "pink-salt",
    name: "Himalayan Pink Salt",
    tag: "🧂 PINK SALT & PEPPER BOWL",
    bgColor: "#1B3626",
    accentColor: "#EAB308",
    image: "/images/makhana_salt_bowl.png",
    title: "Makhana Magic, Slow-Roasted in Olive Oil!",
    description:
      "Handpicked lotus seeds slow-roasted in extra virgin olive oil and seasoned with fine grains of Himalayan pink rock salt and ground black pepper. Clean, pure, and classic.",
    protein: "10",
    fiber: "16",
    calories: "80",
  },
  {
    id: "mint-herb",
    name: "Mint & Herb Magic",
    tag: "🌿 COOLING MINT BOWL",
    bgColor: "#134E4A",
    accentColor: "#34D399",
    image: "/images/makhana_mint_bowl.png",
    title: "Makhana Magic, Cooling Herb Infusion!",
    description:
      "A cooling summer recipe that combines real dried mint leaves with black salt, roasted cumin seeds, and sour dry mango powder. Refreshing and light on the stomach.",
    protein: "10",
    fiber: "16",
    calories: "82",
  },
  {
    id: "cheddar-cheese",
    name: "Gourmet Cheddar Cheese",
    tag: "🧀 GOLDEN CHEESE BOWL",
    bgColor: "#8A5D14",
    accentColor: "#FBBF24",
    image: "/images/makhana_cheese_bowl.png",
    title: "Makhana Magic, Indulgent Gourmet Crunch!",
    description:
      "Indulgent cheddar cheese dust sprinkled over freshly popped makhana seeds. Get all the savory richness of cheese popcorn at less than half the calories.",
    protein: "9",
    fiber: "14",
    calories: "90",
  },
  {
    id: "raw-jumbo",
    name: "Raw Organic Makhana",
    tag: "🤍 MITHILA RAW JUMBO BOWL",
    bgColor: "#852932",
    accentColor: "#F59E0B",
    image: "/images/makhana_raw_bowl.png",
    title: "Makhana Magic, Direct From Mithila Ponds!",
    description:
      "Hand-harvested pristine white fox nuts. Sun-dried and graded by experienced artisans into unbroken, high-swelling raw lotus seeds packed with essential minerals.",
    protein: "10",
    fiber: "16",
    calories: "350",
  },
];

const SLIDE_DURATION_MS = 5000; // 5 seconds per slide progress fill
const TICK_INTERVAL_MS = 50; // Update progress bar every 50ms

export const MakhanaMagic: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 100%
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeSlide = MAGIC_SLIDES[currentIndex];

  // Smooth Progress Bar Loader Loop (0% -> 100%)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + (TICK_INTERVAL_MS / SLIDE_DURATION_MS) * 100;

        if (nextProgress >= 100) {
          // When progress loader reaches 100%, trigger slide change!
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
    setCurrentIndex((prev) => (prev + 1) % MAGIC_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + MAGIC_SLIDES.length) % MAGIC_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ backgroundColor: activeSlide.bgColor }}
      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden relative transition-colors duration-700 ease-in-out select-none"
    >
      {/* Line art lotus leaf decorations */}
      <div className="absolute top-4 left-4 opacity-10 pointer-events-none">
        <svg className="w-28 h-28 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 opacity-15 pointer-events-none">
        <svg className="w-36 h-36 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Auto-rotating Makhana Bowl Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
            {/* Round border frame matching original design */}
            <div className="absolute inset-0 rounded-full border-8 border-white/10 shadow-2xl bg-black/10" />

            {/* Dynamic Bowl Image with crossfade transition */}
            <div
              className={`relative w-72 h-72 sm:w-88 sm:h-88 transition-all duration-500 ease-out transform ${
                isAnimating ? "opacity-0 scale-90 rotate-3" : "opacity-100 scale-100 rotate-0"
              }`}
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Flavor Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-white/30">
            {activeSlide.tag}
          </div>

          {/* Title & Accent Underline */}
          <div className="space-y-3">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-serif transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {activeSlide.title}
            </h2>
            <div
              style={{ backgroundColor: activeSlide.accentColor }}
              className="w-20 h-1 rounded-full transition-all duration-500"
            />
          </div>

          {/* Description */}
          <p
            className={`text-sm sm:text-base text-white/90 leading-relaxed font-sans font-medium max-w-2xl transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {activeSlide.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-4 max-w-xl border-t border-white/20">
            <div className="space-y-1">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                {activeSlide.protein}
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-white/80 tracking-wider">
                Grams of Protein
              </span>
            </div>
            <div className="space-y-1 border-x border-white/20 px-6">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                {activeSlide.fiber}
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-white/80 tracking-wider">
                Grams of Fiber
              </span>
            </div>
            <div className="space-y-1 pl-2">
              <span className="block text-3xl sm:text-4xl font-black text-white leading-none font-serif">
                {activeSlide.calories}
              </span>
              <span className="block text-[10px] sm:text-xs font-black uppercase text-white/80 tracking-wider">
                Calories
              </span>
            </div>
          </div>

          {/* Progress Bar Loader & Pagination Controls */}
          <div className="pt-6 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous bowl"
            >
              ‹
            </button>

            {/* Indicator Dots with Animated Progress Bar Loader */}
            <div className="flex items-center gap-2.5">
              {MAGIC_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => handleDotClick(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden ${
                      isActive
                        ? "w-12 h-3 bg-white/30 border border-white/40"
                        : "w-3 h-3 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to ${slide.name}`}
                  >
                    {/* Active Progress Loader Bar */}
                    {isActive && (
                      <div
                        style={{ width: `${progress}%` }}
                        className="h-full bg-white rounded-full transition-all duration-75 ease-linear shadow-sm"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next bowl"
            >
              ›
            </button>

            <span className="text-xs text-white/70 font-medium pl-2">
              {currentIndex + 1} / {MAGIC_SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
