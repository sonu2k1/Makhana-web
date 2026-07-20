"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

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
    name: "Superfoods Bharat Roasted Makhana",
    flavor: "Himalayan Pink Salt & Pepper",
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
    name: "Superfoods Bharat Roasted Makhana",
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
    name: "Superfoods Bharat Premium Makhana",
    flavor: "Mint & Herb Magic",
    price: 190,
    image: "/images/makhana_mint.png",
    category: "herbs",
    calories: 82,
    weight: "100g",
    description: "A cooling summer recipe that combines real dried mint leaves with black salt, cumin seeds, and a dash of sour dry mango powder. Light, refreshing, and deeply satisfying.",
    ingredients: ["Lotus Seeds (Makhana)", "Cold Pressed Rice Bran Oil", "Mint Leaf Powder", "Black Salt", "Dry Mango (Amchur)", "Roasted Cumin Powder"],
  },
  {
    id: "makhana-cheese",
    name: "Superfoods Bharat Gourmet Makhana",
    flavor: "Classic Cheddar Cheese",
    price: 210,
    image: "/images/makhana_cheese.png",
    category: "salted",
    calories: 90,
    weight: "100g",
    description: "Indulgent cheddar cheese dust sprinkled over freshly popped makhana seeds. Get all the savory richness of cheese popcorn at less than half the fat.",
    ingredients: ["Lotus Seeds (Makhana)", "Olive Oil", "Cheese Powder", "Whey Powder", "Salt", "Natural Coloring (Beta Carotene)"],
  },
  {
    id: "vedic-turmeric",
    name: "Superfoods Bharat Organic Spice",
    flavor: "Organic Vedic Turmeric Powder",
    price: 249,
    image: "/images/vedic_turmeric.png",
    category: "herbs",
    calories: 15,
    weight: "200g",
    description: "Directly sourced high-curcumin organic turmeric powder from the Himalayan foothills. Fresh, pure, anti-inflammatory, and rich in natural antioxidants.",
    ingredients: ["100% Pure Organic Turmeric Root (Curcuma Longa)"],
  },
  {
    id: "makhana-sweet-caramel",
    name: "Superfoods Bharat Sweet Makhana",
    flavor: "Jaggery & Caramel Crunch",
    price: 220,
    image: "/images/makhana_cheese.png",
    category: "sweet",
    calories: 98,
    weight: "120g",
    description: "Coated with organic liquid jaggery (Gud) and real vanilla extract. A sweet tooth fix that packs zero processed sugar, making it the perfect healthy treat.",
    ingredients: ["Lotus Seeds (Makhana)", "Organic Jaggery (Gur)", "Clarified Butter (Ghee)", "Fleur de Sel", "Vanilla Extract"],
  },
];

interface SuperfoodBenefit {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  colorClass: string;
}

const SUPERFOOD_BENEFITS: SuperfoodBenefit[] = [
  {
    title: "High Plant Protein",
    subtitle: "Muscle & Tissue Repair",
    description: "Contains excellent plant-based protein quantities, essential for structural muscle maintenance and cellular growth, making it a perfect workout fuel.",
    icon: "💪",
    colorClass: "bg-[#e8a324]/10 text-[#e8a324]"
  },
  {
    title: "Rich Calcium Boost",
    subtitle: "Bone & Joint Support",
    description: "An abundant source of calcium that strengthens bone density, supports joints, and facilitates cardiovascular communication functions.",
    icon: "🦴",
    colorClass: "bg-[#7ca832]/10 text-[#7ca832]"
  },
  {
    title: "100% Gluten-Free",
    subtitle: "Easy & Light Digestion",
    description: "Naturally devoid of gluten allergens, it is incredibly easy on the stomach and promotes premium gut microbiome health.",
    icon: "🌾",
    colorClass: "bg-[#3b592d]/10 text-[#3b592d]"
  },
  {
    title: "Low Glycemic Index",
    subtitle: "Sugar Level Regulation",
    description: "Slow-release complex carbohydrates that prevent insulin spikes, providing sustained vitality and helping control diabetes conditions.",
    icon: "📈",
    colorClass: "bg-red-50 text-red-700"
  },
  {
    title: "Anti-Aging Agents",
    subtitle: "Antioxidant Rich",
    description: "Loaded with natural kaempferol antioxidants that fight systemic inflammation and combat cellular aging free radicals.",
    icon: "✨",
    colorClass: "bg-purple-50 text-purple-700"
  },
  {
    title: "Heart Healthy",
    subtitle: "Magnesium & Potassium",
    description: "High magnesium-to-sodium ratio supports healthy blood pressure levels, preventing arterial plaque and supporting cardiac wellness.",
    icon: "❤️",
    colorClass: "bg-blue-50 text-blue-700"
  }
];

interface RecipePairing {
  flavor: string;
  title: string;
  pairIdea: string;
  icon: string;
}

const RECIPE_PAIRINGS: RecipePairing[] = [
  {
    flavor: "Himalayan Pink Salt",
    title: "High Tea Harmony",
    pairIdea: "Serves as a clean, low-sodium companion to hot Masala Chai or soothing organic green tea without adding sugar calories.",
    icon: "🍵"
  },
  {
    flavor: "Spicy Peri Peri",
    title: "Crunchy Spiced Chaat",
    pairIdea: "Toss with chopped cucumber, tomato, red onion, green coriander, and fresh lemon juice to create a tangy, low-calorie snack salad.",
    icon: "🥗"
  },
  {
    flavor: "Mint Magic (Pudina)",
    title: "Summer Cooler Companion",
    pairIdea: "Great to serve alongside fresh lemonade or buttermilk. Dust over a bowl of thick Greek yogurt as a cooling salad crouton.",
    icon: "🥛"
  },
  {
    flavor: "Sweet Caramel Crunch",
    title: "Healthy Workout Cheat",
    pairIdea: "Combine with chopped almonds, walnuts, and dark chocolate chips for a sweet, high-energy homemade trail mix.",
    icon: "🍫"
  }
];

interface DietRow {
  flavor: string;
  vegan: boolean;
  keto: boolean;
  paleo: boolean;
  glutenFree: boolean;
  diabeticFriendly: boolean;
}

const DIET_ROWS: DietRow[] = [
  { flavor: "Himalayan Pink Salt", vegan: true, keto: true, paleo: true, glutenFree: true, diabeticFriendly: true },
  { flavor: "Spicy Peri Peri", vegan: true, keto: true, paleo: true, glutenFree: true, diabeticFriendly: true },
  { flavor: "Mint Magic (Pudina)", vegan: true, keto: true, paleo: true, glutenFree: true, diabeticFriendly: true },
  { flavor: "Classic Cheddar Cheese", vegan: false, keto: true, paleo: false, glutenFree: true, diabeticFriendly: true },
  { flavor: "Sour Cream & Onion", vegan: false, keto: true, paleo: false, glutenFree: true, diabeticFriendly: true },
  { flavor: "Sweet Caramel Crunch", vegan: false, keto: false, paleo: false, glutenFree: true, diabeticFriendly: false }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "1",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenProduct = (product: Product) => {
    setQuickViewProduct(product);
    setFormData({
      name: "",
      email: "",
      phone: "",
      quantity: "1",
      message: `I'm interested in ordering ${product.name} (${product.flavor}). Please send details.`
    });
    setFormSubmitted(false);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <Header />

      <main className="flex-1 bg-[#faf8f5]">
        {/* Page Hero Section matching Home Hero size */}
        <PageHero
          badgeText="🍿 100% Organic Superfood • Gourmet Collection"
          badgeBgClass="bg-[#d97706]/15 text-[#92400e] border-[#d97706]/30"
          bgClass="bg-gradient-to-br from-[#FFFDF5] via-[#FEF9E7] to-[#FDEFD0]"
          textAccentClass="text-[#d97706]"
          titleLine1="Explore Our Premium"
          titleHighlight="Roasted Makhana"
          description="Handcrafted, slow-roasted, and calorie-conscious lotus seeds sourced directly from organic farms in India. Savor health in every crunch."
          stats={[
            { value: "5+ Flavors", label: "Gourmet Spices" },
            { value: "80-90 Cal", label: "Per Serving" },
            { value: "Olive Oil", label: "Slow Roasted" },
          ]}
          buttonText="Explore All Flavors"
          buttonHref="#flavor-catalog"
          buttonClass="bg-[#d97706] hover:bg-[#b45309] text-white"
          rightGraphic={
            <>
              <div className="absolute top-4 right-2 sm:right-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-amber-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>✨ Olive Oil Roasted</span>
              </div>
              <div className="absolute bottom-10 left-2 sm:left-6 bg-white/90 backdrop-blur-md border border-white/60 shadow-lg px-3.5 py-1.5 rounded-full text-xs font-black text-emerald-900 z-20 flex items-center gap-1.5 animate-bounce-slow">
                <span>🔥 Calorie Controlled</span>
              </div>
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96">
                <img
                  src="/images/makhana_peri.png"
                  alt="Explore Premium Makhana"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </>
          }
        />

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
          
          {/* Breadcrumbs & Filters Section */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-zinc-200/60">
              {/* Breadcrumb Path */}
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                <a href="/" className="hover:text-[#7ca832] transition-colors">Home</a>
                <span>/</span>
                <span className="text-zinc-800">Products</span>
              </div>

              {/* Filter Tabs / Craving Selector */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "🍿 All Cravings" },
                  { id: "salted", label: "🧂 Light & Savory" },
                  { id: "spicy", label: "🔥 Fiery & Bold" },
                  { id: "herbs", label: "🌿 Fresh & Zesty" },
                  { id: "sweet", label: "🍯 Jaggery Sweet" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`text-xs font-bold py-2.5 px-4 rounded-full border transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-[#3b592d] text-white border-[#3b592d] shadow-sm"
                        : "bg-white text-zinc-700 border-zinc-200 hover:border-[#3b592d] hover:text-[#3b592d]"
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
                  className="bg-white rounded-3xl border border-zinc-100 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Product Visual */}
                  <div className="w-full h-64 rounded-2xl bg-[#faf9f6] flex items-center justify-center relative overflow-hidden mb-6 border border-zinc-100/50">
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
                      className="w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-110 select-none"
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

                    <p className="text-xs text-zinc-500 leading-relaxed min-h-[32px]">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-100 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-bold text-emerald-800 uppercase tracking-wider">Superfood</span>
                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">100% Organic</span>
                      </div>

                      <button
                        onClick={() => handleOpenProduct(product)}
                        className="bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recipe & Pairings Section (New Educational Content) */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Snacking Ideas
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Culinary Pairings & Recipes
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Try these delicious ways to incorporate our organic roasted Makhanas into your daily snacks.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RECIPE_PAIRINGS.map((recipe) => (
                <div
                  key={recipe.flavor}
                  className="bg-white border border-zinc-100 rounded-3xl p-6 flex flex-col space-y-4 hover:shadow-md transition-shadow text-left"
                >
                  <span className="text-3xl select-none block">{recipe.icon}</span>
                  <div className="space-y-1">
                    <span className="text-[9px] font-black uppercase text-[#7ca832] tracking-wider block">
                      {recipe.flavor}
                    </span>
                    <h3 className="text-xs font-black text-zinc-950 uppercase tracking-tight font-sans">
                      {recipe.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                    {recipe.pairIdea}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Matrix Section */}
          <div className="bg-white border border-zinc-100 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Smart Snacking Choices
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                How We Compare
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Here is how 100g of our slow-roasted Makhana stacks up against ordinary deep-fried snacks.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs font-medium">
                <thead>
                  <tr className="border-b border-zinc-200 text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                    <th className="py-4 px-6">Nutritional Field (per 100g)</th>
                    <th className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] rounded-t-xl font-black">Roasted Makhana</th>
                    <th className="py-4 px-6">Fried Potato Chips</th>
                    <th className="py-4 px-6">Microwave Butter Popcorn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="py-4 px-6 font-extrabold text-zinc-800">Total Calories</td>
                    <td className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] font-extrabold">~340 kcal</td>
                    <td className="py-4 px-6 text-zinc-500">~536 kcal</td>
                    <td className="py-4 px-6 text-zinc-500">~400 kcal</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-extrabold text-zinc-800">Total Fat</td>
                    <td className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] font-extrabold">~2-4g (Olive oil/Ghee)</td>
                    <td className="py-4 px-6 text-red-600 font-bold">~35g (Refined oils)</td>
                    <td className="py-4 px-6 text-zinc-500">~12g (Hydrogenated butter)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-extrabold text-zinc-800">Dietary Fiber</td>
                    <td className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] font-extrabold">~14.5g (Excellent)</td>
                    <td className="py-4 px-6 text-zinc-500">~4.8g (Low)</td>
                    <td className="py-4 px-6 text-zinc-500">~10.0g (Moderate)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-extrabold text-zinc-800">Sodium Levels</td>
                    <td className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] font-extrabold">~300 mg (Controlled)</td>
                    <td className="py-4 px-6 text-red-600 font-bold">~600 mg (Excessive)</td>
                    <td className="py-4 px-6 text-red-600 font-bold">~800 mg (High)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-extrabold text-zinc-800">Process Method</td>
                    <td className="py-4 px-6 text-[#3b592d] bg-[#f5f8f3] font-extrabold rounded-b-xl">Convection Slow-Roasting</td>
                    <td className="py-4 px-6 text-zinc-500">Deep-Fried Boiling</td>
                    <td className="py-4 px-6 text-zinc-500">High Heat Expansion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Superfood Benefits Section */}
          <div className="space-y-10">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Ancient Nutrition Rediscovered
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Why Makhana? The Ultimate Superfood
              </h2>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {SUPERFOOD_BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white border border-zinc-100 rounded-3xl p-6 flex flex-col justify-start space-y-4 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${benefit.colorClass} flex items-center justify-center text-2xl select-none font-bold shadow-xs`}>
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-zinc-950 uppercase tracking-tight">
                      {benefit.title}
                    </h3>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">
                      {benefit.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dietary Suitability Matrix Section (New Chart Component) */}
          <div className="bg-white border border-zinc-100 rounded-3xl p-8 lg:p-12 space-y-8">
            <div className="text-center space-y-3 max-w-md mx-auto">
              <span className="block text-xs font-black tracking-widest text-[#7ca832] uppercase font-sans">
                Intelligent Snacking
              </span>
              <h2 className="text-3xl font-black text-zinc-950 font-serif tracking-tight">
                Dietary Suitability Matrix
              </h2>
              <p className="text-xs text-zinc-500 font-medium">
                Choose the best flavored makhana fits for your lifestyle or dietary preferences.
              </p>
              <div className="w-16 h-0.5 bg-[#7ca832] mx-auto opacity-80"></div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center text-xs font-medium">
                <thead>
                  <tr className="border-b border-zinc-200 text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                    <th className="py-4 px-6 text-left">Flavor Variant</th>
                    <th className="py-4 px-4">Vegan Friendly</th>
                    <th className="py-4 px-4">Keto Compliant</th>
                    <th className="py-4 px-4">Paleo Compliant</th>
                    <th className="py-4 px-4">Gluten-Free</th>
                    <th className="py-4 px-4 font-black text-[#3b592d]">Diabetic Friendly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {DIET_ROWS.map((row) => (
                    <tr key={row.flavor} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-extrabold text-zinc-800 text-left">{row.flavor}</td>
                      <td className="py-4 px-4 text-base">{row.vegan ? "🟢 Yes" : "❌ No"}</td>
                      <td className="py-4 px-4 text-base">{row.keto ? "🟢 Yes" : "❌ No"}</td>
                      <td className="py-4 px-4 text-base">{row.paleo ? "🟢 Yes" : "❌ No"}</td>
                      <td className="py-4 px-4 text-base">🟢 Yes</td>
                      <td className={`py-4 px-4 text-base ${row.diabeticFriendly ? "font-bold text-[#3b592d]" : ""}`}>
                        {row.diabeticFriendly ? "🟢 Yes" : "❌ No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* B2B call to action */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#3b592d] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative select-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,168,50,0.15),transparent_60%)]"></div>
            
            <div className="lg:col-span-8 space-y-4 relative z-10 text-left">
              <span className="text-[10px] font-black tracking-widest text-[#7ca832] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                B2B & Distribution Partnerships
              </span>
              <h2 className="text-3xl font-black font-serif tracking-tight">
                Bulk Orders, Exporters & Private Labeling
              </h2>
              <p className="text-xs sm:text-sm text-zinc-200/90 max-w-xl leading-relaxed font-medium">
                Partner with Super Food Bharat. We support supermarkets, gourmet retailers, organic distributors, and international food importers with high-grade packaging, customized flavor profiles, and global bulk export operations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10 w-full">
              <a
                href="/contact?subject=bulk"
                className="bg-white hover:bg-zinc-100 text-[#3b592d] font-bold text-xs uppercase px-6 py-3.5 rounded-xl shadow-md text-center transition-all cursor-pointer hover:-translate-y-0.5"
              >
                Bulk Inquiry Form
              </a>
              <a
                href="https://wa.me/918527167311"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] hover:bg-[#1ebd56] text-white font-bold text-xs uppercase px-6 py-3.5 rounded-xl shadow-md text-center transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>WhatsApp Distributor Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 cursor-pointer"
            ></div>
            <div className="relative bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scaleUp z-10 border border-zinc-100 max-h-[90vh] md:max-h-[85vh]">
              {/* Modal Close */}
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 bg-zinc-100/80 p-1.5 rounded-full hover:bg-zinc-200/80 transition-colors z-20 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left: Product Details & Media */}
              <div className="md:w-1/2 bg-zinc-50/50 p-6 md:p-8 flex flex-col overflow-y-auto border-r border-zinc-100 animate-slideLeft">
                <div className="flex-1 space-y-6">
                  <div className="w-full h-48 rounded-2xl bg-zinc-50 flex items-center justify-center relative overflow-hidden select-none p-4 shrink-0">
                    <img
                      src={quickViewProduct.image}
                      alt={quickViewProduct.flavor}
                      className="w-40 h-40 object-contain"
                    />
                    <span className="absolute bottom-3 left-3 text-[9px] bg-zinc-950 text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                      🔥 {quickViewProduct.calories} Cal
                    </span>
                    <span className="absolute bottom-3 right-3 text-[9px] bg-white text-zinc-800 font-extrabold px-2.5 py-0.5 rounded-full border border-zinc-200/50 uppercase tracking-wider">
                      {quickViewProduct.weight}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] bg-[#e8a324]/10 text-amber-700 font-extrabold px-2.5 py-0.5 rounded-sm uppercase tracking-wider">
                      {quickViewProduct.flavor}
                    </span>
                    <h3 className="text-xl font-black text-zinc-950 uppercase tracking-tight leading-tight">
                      {quickViewProduct.name}
                    </h3>
                    <div className="text-xs font-extrabold text-emerald-800 bg-emerald-100/70 inline-block px-3 py-1 rounded-full border border-emerald-200">100% Organic Superfood</div>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {quickViewProduct.description}
                  </p>

                  {/* Ingredients List */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {quickViewProduct.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-sm border border-zinc-200/25"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Inquiry Form */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
                {!formSubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                    <div className="space-y-1">
                      <h3 className="text-base font-black text-zinc-950 uppercase tracking-tight">
                        Quick Inquiry
                      </h3>
                      <p className="text-[10px] text-zinc-400 font-medium">
                        Fill the form to request a call back or place an order.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full py-2 px-3.5 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full py-2 px-3.5 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full py-2 px-3.5 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                          Estimated Packets Quantity
                        </label>
                        <input
                          type="number"
                          min="1"
                          required
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full py-2 px-3.5 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium"
                        />
                      </div>

                      {/* Pre-filled Message */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-zinc-500 tracking-wider mb-1">
                          Message / Special Request
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full py-2 px-3.5 border border-zinc-200 rounded-lg text-xs bg-zinc-50/50 focus:outline-none focus:border-[#7ca832] focus:ring-1 focus:ring-[#7ca832] font-medium resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3b592d] hover:bg-[#2d4322] text-white font-bold text-xs py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 mt-4"
                    >
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <div className="w-16 h-16 bg-[#7ca832]/10 rounded-full flex items-center justify-center text-[#7ca832] text-3xl font-bold">
                      ✓
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-zinc-950 uppercase tracking-tight">
                        Inquiry Sent!
                      </h3>
                      <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Thank you, <span className="font-bold text-zinc-800">{formData.name}</span>. Your inquiry for <span className="font-bold text-zinc-800">{quickViewProduct.name}</span> has been received. Our sales team will get in touch with you at <span className="font-bold text-zinc-800">{formData.phone}</span> shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setQuickViewProduct(null)}
                      className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all cursor-pointer mt-4"
                    >
                      Close Modal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
