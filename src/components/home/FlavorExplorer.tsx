"use client";

import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
  flavor: string;
  price: number;
  image: string;
  category: "all" | "salted" | "spicy" | "herbs" | "sweet";
  calories: number;
  weight: string;
  description: string;
  ingredients: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "makhana-salt",
    name: "Mukta Roasted Makhana",
    flavor: "Himalayan Pink Salt",
    price: 180,
    image: "/images/makhana_salt.png",
    category: "salted",
    calories: 80,
    weight: "100g",
    description: "Handpicked lotus seeds slow-roasted in extra virgin olive oil and seasoned with fine grains of Himalayan pink rock salt and ground black pepper. Simple, pure, and classic.",
    ingredients: ["Lotus Seeds (Makhana)", "Extra Virgin Olive Oil", "Himalayan Pink Salt", "Black Pepper", "Natural Rosemary Extract"],
  },
  {
    id: "makhana-peri",
    name: "Revel Roasted Makhana",
    flavor: "Spicy Peri Peri",
    price: 195,
    image: "/images/makhana_peri.png",
    category: "spicy",
    calories: 85,
    weight: "150g",
    description: "Fiery bird's eye chili blended with dried oregano, garlic granules, lemon powder, and onion flakes. Roasted in olive oil for a perfect crisp, calorie-controlled burn.",
    ingredients: ["Lotus Seeds (Makhana)", "Olive Oil", "Dehydrated Vegetables (Garlic, Onion)", "Spices & Condiments (Peri Peri Chili, Oregano)", "Lemon Juice Powder"],
  },
  {
    id: "makhana-mint",
    name: "Aura Premium Lotus Seeds",
    flavor: "Mint Magic (Pudina)",
    price: 190,
    image: "/images/makhana_mint.png",
    category: "herbs",
    calories: 82,
    weight: "250g",
    description: "A cooling summer recipe that combines real dried mint leaves with black salt, cumin seeds, and a dash of sour dry mango powder. Light, refreshing, and deeply satisfying.",
    ingredients: ["Lotus Seeds (Makhana)", "Cold Pressed Rice Bran Oil", "Mint Leaf Powder", "Black Salt", "Dry Mango (Amchur)", "Roasted Cumin Powder"],
  },
  {
    id: "makhana-cheese",
    name: "Aura Cheddar Makhana",
    flavor: "Classic Cheddar Cheese",
    price: 210,
    image: "/images/makhana_mint.png", // Reused beautiful mint bag styling
    category: "salted",
    calories: 90,
    weight: "100g",
    description: "Indulgent cheddar cheese dust sprinkled over freshly popped makhana seeds. Get all the savory richness of cheese popcorn at less than half the fat.",
    ingredients: ["Lotus Seeds (Makhana)", "Olive Oil", "Cheese Powder", "Whey Powder", "Salt", "Natural Coloring (Beta Carotene)"],
  },
  {
    id: "makhana-sourcream",
    name: "Mukta Herb Makhana",
    flavor: "Sour Cream & Onion",
    price: 199,
    image: "/images/makhana_salt.png", // Reused salt bag
    category: "herbs",
    calories: 88,
    weight: "100g",
    description: "A perfect blend of sweet spring onions and tangy sour cream seasoning. Creamy taste with a light, airy crunch that keeps you coming back for more.",
    ingredients: ["Lotus Seeds (Makhana)", "Olive Oil", "Sour Cream Powder", "Dehydrated Chives", "Onion Powder", "Yeast Extract"],
  },
  {
    id: "makhana-caramel",
    name: "Revel Sweet Makhana",
    flavor: "Sweet Caramel Crunch",
    price: 220,
    image: "/images/makhana_peri.png", // Reused peri bag
    category: "sweet",
    calories: 98,
    weight: "120g",
    description: "Coated with organic liquid jaggery (Gud) and real vanilla extract. A sweet tooth fix that packs zero processed sugar, making it the perfect post-workout treat.",
    ingredients: ["Lotus Seeds (Makhana)", "Organic Jaggery (Gur)", "Clarified Butter (Ghee)", "Fleur de Sel", "Vanilla Extract"],
  },
];

export const FlavorExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="flavors" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-widest text-[#7ca832] uppercase">
              Flavor Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Explore Our Crunch Selection
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Flavors" },
              { id: "salted", label: "Roasted & Salted" },
              { id: "spicy", label: "Fiery & Spicy" },
              { id: "herbs", label: "Fresh Herbs" },
              { id: "sweet", label: "Jaggery Sweet" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold py-2 px-4 rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#3b592d] text-white border-[#3b592d] shadow-xs"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-zinc-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              {/* Product Visual */}
              <div className="w-full h-64 rounded-2xl bg-zinc-50 flex items-center justify-center relative overflow-hidden mb-6">
                {/* Calories badge */}
                <span className="absolute top-4 left-4 bg-zinc-950/80 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full backdrop-blur-xs z-10 uppercase tracking-wider">
                  🔥 {product.calories} Cal
                </span>
                {/* Weight badge */}
                <span className="absolute top-4 right-4 bg-white/95 text-zinc-800 font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-zinc-100 shadow-xs z-10">
                  {product.weight}
                </span>

                <img
                  src={product.image}
                  alt={product.flavor}
                  className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-115"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] bg-[#e8a324]/10 text-amber-700 font-black tracking-wider uppercase px-2 py-0.5 rounded-sm">
                    {product.flavor}
                  </span>
                  <h3 className="text-base font-black text-zinc-950 uppercase tracking-tight mt-2">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-100 mt-2">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Price</span>
                    <span className="text-lg font-black text-zinc-950">₹{product.price}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div
            onClick={() => setQuickViewProduct(null)}
            className="absolute inset-0 cursor-pointer"
          ></div>
          <div className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scaleUp z-10 border border-zinc-100">
            {/* Modal Close */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 bg-zinc-100/80 p-1.5 rounded-full hover:bg-zinc-200/80 transition-colors z-20 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Product Media */}
            <div className="md:w-1/2 bg-zinc-50 flex items-center justify-center p-8 relative">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.flavor}
                className="w-52 h-52 object-contain"
              />
              <span className="absolute bottom-4 left-4 text-[10px] bg-zinc-900 text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                🔥 {quickViewProduct.calories} Calories / Portion
              </span>
            </div>

            {/* Right: Product Details */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] bg-[#e8a324]/10 text-amber-700 font-extrabold px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                    {quickViewProduct.flavor}
                  </span>
                  <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight mt-2">
                    {quickViewProduct.name}
                  </h3>
                  <div className="text-lg font-black text-[#3b592d] mt-1">₹{quickViewProduct.price}</div>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Ingredients tag list */}
                <div>
                  <h4 className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1.5">
                    Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {quickViewProduct.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-sm border border-zinc-200/20"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close CTA */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Close Details</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
