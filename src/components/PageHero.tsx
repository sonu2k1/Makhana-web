"use client";

import React from "react";

export interface HeroStat {
  value: string;
  label: string;
}

export interface PageHeroProps {
  badgeText: string;
  titleLine1: string;
  titleHighlight?: string;
  titleLine2?: string;
  description: string;
  bgClass?: string;
  badgeBgClass?: string;
  textAccentClass?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonClass?: string;
  stats?: HeroStat[];
  rightGraphic?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badgeText,
  titleLine1,
  titleHighlight,
  titleLine2,
  description,
  bgClass = "bg-gradient-to-br from-[#F4F9F1] via-[#EBF3E6] to-[#E2EEDC]",
  badgeBgClass = "bg-[#7ca832]/15 text-[#2D5A27] border-[#7ca832]/30",
  textAccentClass = "text-[#2D5A27]",
  buttonText,
  buttonHref = "#",
  buttonClass = "bg-[#7ca832] hover:bg-[#688a29] text-white",
  stats,
  rightGraphic,
}) => {
  return (
    <section className={`w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden min-h-[520px] md:min-h-[580px] flex items-center ${bgClass}`}>
      {/* Background ambient lighting blurs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative leaf SVG overlay */}
      <div className="absolute top-6 right-12 opacity-10 pointer-events-none">
        <svg className="w-32 h-32 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left: Headline & Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          {/* Top Tag Badge */}
          <div className={`inline-flex items-center gap-2 border py-1.5 px-4 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs ${badgeBgClass}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{badgeText}</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-snug font-sans">
              {titleLine1}{" "}
              {titleHighlight && (
                <span className={`transition-all duration-500 ${textAccentClass}`}>
                  {titleHighlight}
                </span>
              )}
              {titleLine2 && (
                <>
                  <br className="hidden sm:inline" />
                  {titleLine2}
                </>
              )}
            </h1>
            <p className="text-sm sm:text-base text-zinc-700/90 leading-relaxed max-w-xl font-medium">
              {description}
            </p>
          </div>

          {/* Glassmorphic Stats / Highlights */}
          {stats && stats.length > 0 && (
            <div className={`grid grid-cols-${stats.length} gap-4 max-w-md bg-white/80 border border-white/60 rounded-2xl p-4 shadow-md backdrop-blur-md`}>
              {stats.map((st, idx) => (
                <div key={idx} className={`text-center ${idx > 0 ? "border-l border-zinc-200/80 pl-2" : ""}`}>
                  <span className="block text-2xl font-black text-zinc-950 leading-none">{st.value}</span>
                  <span className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">{st.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          {buttonText && (
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href={buttonHref}
                className={`px-8 py-3.5 rounded-full font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer ${buttonClass}`}
              >
                <span>{buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* Right: Product Display Podium & Graphic */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
            {/* Glowing background halo */}
            <div className="absolute inset-4 rounded-full bg-white/60 blur-2xl animate-pulse pointer-events-none" />

            {/* Pedestal Shadow Platform */}
            <div className="absolute bottom-6 w-64 h-12 bg-black/15 rounded-full blur-md pointer-events-none" />

            {rightGraphic}
          </div>
        </div>
      </div>
    </section>
  );
};
