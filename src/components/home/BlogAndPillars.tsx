"use client";

import React from "react";

interface PillarItem {
  id: number;
  bgClass: string;
  title: string;
  text: string;
}

interface BlogPost {
  id: number;
  date: string;
  image: string;
  title: string;
  link: string;
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
    text: "Elevate your culinary experience with our diverse range of organic food products. Whether you're a seasoned chef or a home cook, Ghasphus brings you flavors that inspire and ingredients that empower your kitchen creations.",
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
    text: "By choosing Ghasphus, you not only prioritize your well-being but also contribute to the empowerment of Women farmers, fostering a cycle of positivity that resonates from farm to fork.",
  },
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    date: "06 JUN",
    image: "/images/blog_grains.png",
    title: "Why Ghasphus is Your Destination for Wholesome Grains",
    link: "#",
  },
  {
    id: 2,
    date: "22 JAN",
    image: "/images/blog_field.png",
    title: "Cultivating Change: Ghasphus and the Organic Revolution",
    link: "#",
  },
  {
    id: 3,
    date: "22 JAN",
    image: "/images/blog_leaf.png",
    title: "The Organic Advantage: Unveiling the Benefits of Nature",
    link: "#",
  },
  {
    id: 4,
    date: "22 JAN",
    image: "/images/blog_turmeric.png",
    title: "The Golden Benefits of Vedic Turmeric",
    link: "#",
  },
];

export const BlogAndPillars: React.FC = () => {
  return (
    <section className="w-full bg-[#faf8f5]">
      {/* 4-Column Pillars Banner Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className={`${pillar.bgClass} p-10 text-white flex flex-col justify-start space-y-4 min-h-[320px] transition-all duration-300 hover:brightness-105 select-none`}
          >
            <span className="text-5xl font-serif font-black opacity-80 leading-none">
              {pillar.id}.
            </span>
            <h3 className="text-lg font-extrabold uppercase tracking-wider font-serif">
              {pillar.title}
            </h3>
            <p className="text-xs text-zinc-200/80 leading-relaxed font-medium">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>

      {/* Our Blog Section */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Blog Header Title */}
        <div className="text-center space-y-4 max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 font-serif tracking-tight">
            Our Blog
          </h2>
          <div className="flex items-center justify-center gap-2 text-[#7ca832] font-semibold text-xs tracking-wider uppercase">
            <span>🌿</span>
            <span>Articles & Wellness Tips</span>
            <span>🌿</span>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-zinc-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Blog Media */}
              <div className="relative w-full h-48 overflow-hidden bg-zinc-50 shrink-0 select-none">
                {/* Date Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white text-zinc-950 px-3 py-1.5 shadow-md font-black text-center text-[10px] rounded-lg tracking-wider z-10 flex flex-col leading-none border border-zinc-100">
                  <span className="text-xs font-black">{post.date.split(" ")[0]}</span>
                  <span className="text-[8px] font-black text-zinc-400 mt-0.5">{post.date.split(" ")[1]}</span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Title Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left">
                <h3 className="text-xs sm:text-sm font-black text-zinc-950 tracking-tight font-sans line-clamp-3 group-hover:text-[#7ca832] transition-colors leading-tight">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  className="text-[10px] font-black uppercase text-[#7ca832] tracking-widest flex items-center gap-1 hover:underline cursor-pointer pt-2"
                >
                  <span>Read Article</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
