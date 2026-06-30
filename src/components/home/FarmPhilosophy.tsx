"use client";

import React from "react";

export const FarmPhilosophy: React.FC = () => {
  return (
    <section id="about-us" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#fdfdfb] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Organic Styled Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden rounded-[40%_60%_50%_50%_/_50%_60%_40%_50%] border-4 border-[#7ca832]/25 shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <img
              src="/images/farm_philosophy.png"
              alt="Welcome to Super Food Bharat Farm"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Philosophy Text */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-3">
            <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
              Welcome to Super Food Bharat Farm
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e251f] tracking-tight leading-tight font-serif">
              Organic and Green, <br className="hidden sm:inline" />
              that's Our Dream!
            </h2>
            <div className="w-20 h-0.5 bg-[#7ca832] opacity-80 mt-4"></div>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans font-medium">
            <p>
              At Super Food Bharat, we are passionate about providing you with food that not only nourishes your body but also delights your taste buds. Our products are carefully chosen to ensure that they meet the highest standards of quality, purity, and sustainability.
            </p>
            <p>
              We want to be the change agent in our community as a brand that thinks differently. It is an innate mission to persuade people that living a healthier lifestyle is not difficult to maintain, and that the quality of their nutritious food does not have to come at the expense of taste. We work hard to give them the energy they need to get through the day. At the same time, we ensure that they enjoy their journey while learning about the years of industrial damage caused by contaminated and tampered food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
