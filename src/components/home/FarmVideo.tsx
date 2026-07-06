import React from "react";

export const FarmVideo: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-zinc-950 leading-[0] relative aspect-16/9 md:aspect-[21/9] lg:aspect-[2.4/1]">
      <video
        src="https://vjs.zencdn.net/v/oceans.mp4"
        poster="/images/blog_field.png"
        className="w-full h-full object-cover opacity-80"
        playsInline
        loop
        muted
        autoPlay
      />
      {/* Visual text overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4">
        <div className="text-center space-y-2 md:space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest text-[#7ca832] uppercase bg-[#7ca832]/10 px-3 py-1 rounded-full border border-[#7ca832]/25 backdrop-blur-xs select-none">
            ECOLOGICAL AQUACULTURE
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-serif leading-tight">
            Cultivated in Natural Wetland Ecosystems
          </h2>
          <p className="text-[10px] sm:text-xs text-zinc-200/90 max-w-md mx-auto leading-relaxed font-medium hidden sm:block">
            Watch our natural aquatic farms preserve pure water beds to pop organic premium seeds.
          </p>
        </div>
      </div>
    </section>
  );
};
