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
  const [goal, setGoal] = useState<(typeof mealGoalOptions)[number]>("能量");
  const [diet, setDiet] = useState<(typeof dietOptions)[number]>("均衡");
  const plan = getMealPlan(profile.id, goal, diet);
  const meals: Array<{ label: string; items: string[] }> = [
    { label: "早餐", items: plan.breakfast },
    { label: "午餐", items: plan.lunch },
    { label: "加餐", items: plan.snack },
    { label: "晚餐", items: plan.dinner },
  ];

  return (
    <AIToolShell
      title="AI 营养规划"
      subtitle="根据你的能量与恢复目标生成更平衡的一日饮食。"
      accentClass="shadow-[0_0_70px_rgba(183,255,60,0.12)]"
      triggerLabel="生成餐单"
      controls={
        <div className="grid gap-4">
          <div>
            <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/45">
              目标
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
            <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/45">
              饮食方式
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
        <div className="text-lg font-bold text-white">今日建议餐单</div>
        {meals.map(({ label, items }) => (
          <div key={label}>
            <div className="text-sm font-semibold tracking-[0.2em] text-[#B7FF3C]">
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
          <span className="font-semibold text-white">补水目标</span>
          <div className="mt-1">{plan.hydrationGoal}</div>
        </div>
        <div className="rounded-[20px] border border-[#B7FF3C]/16 bg-[#B7FF3C]/10 px-4 py-3 text-sm text-white/80">
          <span className="font-semibold">AI 洞察</span>
          <div className="mt-1">{plan.insight}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
