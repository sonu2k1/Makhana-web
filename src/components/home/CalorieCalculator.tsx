"use client";

import React, { useState } from "react";

interface SnackStats {
  name: string;
  caloriesPerGram: number;
  fatPerGram: number; // in grams
  proteinPerGram: number; // in grams
  colorClass: string;
  barColor: string;
}

const SNACKS: SnackStats[] = [
  {
    name: "Ghasphus Roasted Makhana",
    caloriesPerGram: 3.5, // 350 kcal per 100g
    fatPerGram: 0.02, // 2g per 100g
    proteinPerGram: 0.097, // 9.7g per 100g
    colorClass: "border-[#7ca832] bg-[#f1f6ed]/60",
    barColor: "bg-[#7ca832]",
  },
  {
    name: "Regular Potato Chips",
    caloriesPerGram: 5.36, // 536 kcal per 100g
    fatPerGram: 0.35, // 35g per 100g
    proteinPerGram: 0.07, // 7g per 100g
    colorClass: "border-red-200 bg-red-50/30",
    barColor: "bg-red-500",
  },
  {
    name: "Movie Theater Butter Popcorn",
    caloriesPerGram: 4.8, // 480 kcal per 100g
    fatPerGram: 0.22, // 22g per 100g
    proteinPerGram: 0.09, // 9g per 100g
    colorClass: "border-amber-200 bg-amber-50/30",
    barColor: "bg-amber-500",
  },
];

export const CalorieCalculator: React.FC = () => {
  const [portionSize, setPortionSize] = useState<number>(30); // in grams

  // Max values for scaling progress bars
  const maxCalories = 100 * 5.36; // max possible calories for 100g chips
  const maxFat = 100 * 0.35; // max possible fat for 100g chips
  const maxProtein = 100 * 0.097; // max protein for 100g makhana

  const makhanaCalories = portionSize * SNACKS[0].caloriesPerGram;
  const chipsCalories = portionSize * SNACKS[1].caloriesPerGram;
  const savedCalories = Math.round(chipsCalories - makhanaCalories);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-black tracking-widest text-[#7ca832] uppercase">
            Aarogya Calorie Checker
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
            Count Calories, <br />
            Not Just Portions!
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Drag the slider to select your snack portion size. See how Ghasphus roasted Makhana beats junk snacks like potato chips and popcorn in protein while saving you massive calorie intake.
          </p>

          {/* Saved calories callout */}
          <div className="p-6 rounded-2xl bg-[#7ca832]/10 border border-[#7ca832]/35 text-[#3b592d]">
            <span className="text-xs font-black uppercase tracking-wider block">Calorie Swap Win</span>
            <span className="text-3xl font-black block mt-1">Save {savedCalories} kcal!</span>
            <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
              By choosing {portionSize}g of organic Makhana instead of standard potato chips, you save enough calories for a brisk 20-minute walk!
            </p>
          </div>
        </div>

        {/* Right Slider & Chart Column */}
        <div className="lg:col-span-7 bg-[#fafbfa] border border-zinc-100 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xs">
          {/* Slider input */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">
                Portion Size
              </span>
              <span className="text-2xl font-black text-zinc-950">{portionSize} grams</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={portionSize}
              onChange={(e) => setPortionSize(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#7ca832]"
            />
            <div className="flex justify-between text-[10px] font-bold text-zinc-400">
              <span>10g (Light Snack)</span>
              <span>50g (Standard Bowl)</span>
              <span>100g (Party Pack)</span>
            </div>
          </div>

          {/* Comparative charts */}
          <div className="space-y-6">
            {SNACKS.map((snack, idx) => {
              const calories = Math.round(portionSize * snack.caloriesPerGram);
              const fat = (portionSize * snack.fatPerGram).toFixed(1);
              const protein = (portionSize * snack.proteinPerGram).toFixed(1);

              const calPct = (calories / maxCalories) * 100;
              const fatPct = (Number(fat) / maxFat) * 100;
              const protPct = (Number(protein) / maxProtein) * 100;

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${snack.colorClass} ${
                    idx === 0 ? "shadow-md scale-[1.02] border-[#7ca832]/60" : "border-zinc-200/50"
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black uppercase text-zinc-950 flex items-center gap-2">
                      {idx === 0 && <span className="w-2 h-2 rounded-full bg-[#7ca832]"></span>}
                      {snack.name}
                    </span>
                    <span className="text-sm font-black text-zinc-950">{calories} kcal</span>
                  </div>

                  {/* Nutrition details grid with progress bars */}
                  <div className="space-y-3.5">
                    {/* Calories bar */}
                    <div>
                      <div className="flex justify-between text-[10px] text-zinc-500 font-bold mb-1">
                        <span>Calories</span>
                        <span>{calories} kcal</span>
                      </div>
                      <div className="w-full bg-zinc-200/60 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${snack.barColor}`}
                          style={{ width: `${Math.min(100, Math.max(8, calPct))}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Fat & Protein Side by Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Fat */}
                      <div>
                        <div className="flex justify-between text-[10px] text-zinc-500 font-bold mb-1">
                          <span>Fat</span>
                          <span>{fat}g</span>
                        </div>
                        <div className="w-full bg-zinc-200/60 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              idx === 0 ? "bg-amber-600" : "bg-zinc-600"
                            }`}
                            style={{ width: `${Math.min(100, Math.max(8, fatPct))}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Protein */}
                      <div>
                        <div className="flex justify-between text-[10px] text-zinc-500 font-bold mb-1">
                          <span>Protein</span>
                          <span>{protein}g</span>
                        </div>
                        <div className="w-full bg-zinc-200/60 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              idx === 0 ? "bg-emerald-600" : "bg-zinc-600"
                            }`}
                            style={{ width: `${Math.min(100, Math.max(8, protPct))}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
