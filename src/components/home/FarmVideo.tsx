import React from "react";

export const FarmVideo: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-zinc-950 leading-[0]">
      <video
        src="https://Super Food Bharat.in/wp-content/uploads/2024/01/Super Food Bharat-home-page-video.mp4"
        className="w-full h-auto object-cover aspect-16/9 md:aspect-[21/9] lg:aspect-[2.4/1]"
        playsInline
        loop
        muted
        autoPlay
      />
    </section>
  );
};
