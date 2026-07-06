import React from "react";

export const FarmVideo: React.FC = () => {
  return (
    <section className="w-full relative aspect-video bg-zinc-950 overflow-hidden leading-[0]">
      <iframe
        src="https://www.youtube.com/embed/uiCyH41O_CI?autoplay=1&mute=1&loop=1&playlist=uiCyH41O_CI&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1"
        className="absolute inset-0 w-full h-full pointer-events-none scale-105 opacity-60"
        allow="autoplay; encrypted-media"
        title="Super Food Bharat Makhana Sourcing & Cultivation"
      />
      {/* Visual text overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60 flex items-center justify-center p-4">
        <div className="text-center space-y-2 md:space-y-4 max-w-2xl">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-[#7ca832] uppercase bg-[#7ca832]/10 px-3 py-1 rounded-full border border-[#7ca832]/25 backdrop-blur-xs select-none">
            BIHAR'S MITHILA WETLANDS
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-serif leading-tight">
            How Makhana is Popped & Processed
          </h2>
          <p className="text-[10px] sm:text-xs text-zinc-200/90 max-w-md mx-auto leading-relaxed font-medium hidden sm:block">
            Take a look inside the traditional slow-roasting and manual hand-popping process that yields our premium quality seeds.
          </p>
        </div>
      </div>
    </section>
  );
};
