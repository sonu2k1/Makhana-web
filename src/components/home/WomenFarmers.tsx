"use client";

import React from "react";

export const WomenFarmers: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#3a5255] text-white overflow-hidden relative">
      {/* Decorative subtle gradient radial light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Organic Oval Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-[30%_70%_70%_30%_/_50%_50%_50%_50%] border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-zinc-800">
            <img
              src="/images/women_farmers.png"
              alt="Empowering Women Farmers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Philosophy Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-3">
            <span className="block text-xs font-black tracking-widest text-[#e8a324] uppercase font-sans">
              Our Way of Healthy Life
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-serif">
              Empowering Women Farmers, <br className="hidden sm:inline" />
              Cultivating Sustainability
            </h2>
            <div className="w-20 h-0.5 bg-[#e8a324] opacity-80 mt-4"></div>
          </div>

          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans font-medium max-w-xl">
            We believe that the heart of every nutritious meal lies in the hands of the dedicated farmers who cultivate our food. Our commitment to providing you with all-natural and organic products goes hand in hand with supporting local farmers practicing sustainable agriculture.
          </p>

          <div className="pt-2">
            <a
              href="#products"
              className="inline-block bg-[#e8a324] hover:bg-[#c98c19] text-zinc-950 font-black text-xs uppercase px-8 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
