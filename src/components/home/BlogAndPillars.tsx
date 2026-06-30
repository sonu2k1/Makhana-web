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
  image: string;
  title: string;
  description: string;
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

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog_grains.png",
    title: "Why Roasted Makhana is the Ultimate Healthy Snacking Solution",
    description: "Discover why roasted makhana (foxnuts) is the perfect guilt-free snack. Packed with plant-based protein, low in calories, and rich in essential minerals, it supports weight loss, heart health, and sustained energy levels throughout the day.",
  },
  {
    id: 2,
    image: "/images/makhana_mint.png",
    title: "Traditional Sourcing: Empowering Farms and Sowing Purity",
    description: "Trace the organic harvesting of makhana seeds from the freshwater ponds of India. Our farmers practice sustainable, traditional harvesting techniques to bring you pure, unadulterated nutrients in every crunchy bite.",
  },
  {
    id: 3,
    image: "/images/makhana_peri.png",
    title: "Flavored Makhana: A Tasty Way to Boost Your Daily Nutrition",
    description: "Explore how our flavored makhanas—from spicy peri-peri to refreshing mint—combine delicious taste with high nutrition. Snacking healthy has never been this flavorful, keeping your calorie count in check.",
  },
  {
    id: 4,
    image: "/images/makhana_salt.png",
    title: "Why Makhana is the Perfect Gluten-Free and Low-GI Snacking Choice",
    description: "Learn about the scientific benefits of makhana for gluten sensitivity and diabetes management. With its low glycemic index and high fiber content, it prevents blood sugar spikes and keeps you full for longer.",
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
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Title Content */}
              <div className="p-5 flex-1 flex flex-col justify-start space-y-3 text-left">
                <h3 className="text-sm font-black text-zinc-950 tracking-tight font-sans group-hover:text-[#7ca832] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
