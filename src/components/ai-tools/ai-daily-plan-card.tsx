"use client";

import { useState } from "react";
import {
  dailyPlanOptions,
  DemoProfile,
  getDailyPlan,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIDailyPlanCard({ profile }: { profile: DemoProfile }) {
  const [focus, setFocus] = useState<(typeof dailyPlanOptions)[number]>("久站工作");
  const plan = getDailyPlan(profile.id, focus);
  const sections: Array<{ label: string; items: string[] }> = [
    { label: "晨间节奏", items: plan.morning },
    { label: "午间安排", items: plan.midday },
    { label: "晚间恢复", items: plan.evening },
    { label: "夜间习惯", items: plan.night },
  ];

  return (
    <AIToolShell
      title="AI 每日健康计划"
      subtitle="根据你的生活方式画像生成个性化日常节奏。"
      accentClass="shadow-[0_0_70px_rgba(0,194,255,0.12)]"
      triggerLabel="生成计划"
      controls={
        <div className="flex flex-wrap gap-2">
          {dailyPlanOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFocus(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                focus === option
                  ? "bg-[#00C2FF]/18 text-white"
                  : "border border-white/10 bg-white/6 text-white/68"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="text-lg font-bold text-white">今日 AI 健康计划</div>
        {sections.map(({ label, items }) => (
          <div key={label}>
            <div className="text-sm font-semibold tracking-[0.2em] text-[#00C2FF]">
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
        <div className="rounded-[20px] border border-[#00C2FF]/16 bg-[#00C2FF]/10 px-4 py-3 text-sm text-white/80">
          {plan.note}
        </div>
        <div className="text-xs text-white/45">
          AI 生成内容仅用于生活方式支持，不构成医疗建议。
        </div>
      </div>
    </AIToolShell>
  );
}
