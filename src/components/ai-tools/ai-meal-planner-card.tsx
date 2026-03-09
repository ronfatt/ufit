"use client";

import { useState } from "react";
import {
  dietOptions,
  DemoProfile,
  getMealPlan,
  mealGoalOptions,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIMealPlannerCard({ profile }: { profile: DemoProfile }) {
  const [goal, setGoal] = useState<(typeof mealGoalOptions)[number]>("Energy");
  const [diet, setDiet] = useState<(typeof dietOptions)[number]>("Balanced");
  const plan = getMealPlan(profile.id, goal, diet);
  const meals: Array<{ label: string; items: string[] }> = [
    { label: "早餐", items: plan.breakfast },
    { label: "午餐", items: plan.lunch },
    { label: "加餐", items: plan.snack },
    { label: "晚餐", items: plan.dinner },
  ];

  return (
    <AIToolShell
      title="AI Nutrition Planner"
      subtitle="Balanced daily meals based on your energy and recovery goals."
      accentClass="shadow-[0_0_70px_rgba(183,255,60,0.12)]"
      triggerLabel="Generate Meal Plan"
      controls={
        <div className="grid gap-4">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              GOAL
            </div>
            <div className="flex flex-wrap gap-2">
              {mealGoalOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGoal(option)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    goal === option
                      ? "bg-[#B7FF3C]/18 text-white"
                      : "border border-white/10 bg-white/6 text-white/68"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              DIET
            </div>
            <div className="flex flex-wrap gap-2">
              {dietOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setDiet(option)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    diet === option
                      ? "bg-[#B7FF3C]/18 text-white"
                      : "border border-white/10 bg-white/6 text-white/68"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="text-lg font-bold text-white">Today&apos;s Suggested Meal Plan</div>
        {meals.map(({ label, items }) => (
          <div key={label}>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B7FF3C]">
              {label}
            </div>
            <div className="mt-2 grid gap-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/74"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="rounded-[20px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/74">
          <span className="font-semibold text-white">Hydration Goal</span>
          <div className="mt-1">{plan.hydrationGoal}</div>
        </div>
        <div className="rounded-[20px] border border-[#B7FF3C]/16 bg-[#B7FF3C]/10 px-4 py-3 text-sm text-white/80">
          <span className="font-semibold">AI Insight</span>
          <div className="mt-1">{plan.insight}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
