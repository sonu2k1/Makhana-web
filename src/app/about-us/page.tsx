"use client";

import React from "react";
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

export default function AboutUsPage() {
  return (
    <>
      {/* Header */}
      <Header />

      <main className="flex-1 bg-[#faf8f5]">
        {/* Banner Section */}
        <div className="w-full bg-[#3b592d] text-white py-16 px-4 text-center relative overflow-hidden select-none">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
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

          {/* Section 3: Brand Pillars Grid */}
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

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
