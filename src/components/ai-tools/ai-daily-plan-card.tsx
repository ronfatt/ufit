"use client";

import { useState } from "react";
import {
  dailyPlanOptions,
  DemoProfile,
  getDailyPlan,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIDailyPlanCard({ profile }: { profile: DemoProfile }) {
  const [focus, setFocus] = useState<(typeof dailyPlanOptions)[number]>("Long Standing");
  const plan = getDailyPlan(profile.id, focus);
  const sections: Array<{ label: string; items: string[] }> = [
    { label: "Morning Routine", items: plan.morning },
    { label: "Midday Routine", items: plan.midday },
    { label: "Evening Recovery", items: plan.evening },
    { label: "Night Routine", items: plan.night },
  ];

  return (
    <AIToolShell
      title="AI Daily Wellness Plan"
      subtitle="Personalized routine generated from your lifestyle profile."
      accentClass="shadow-[0_0_70px_rgba(0,194,255,0.12)]"
      triggerLabel="Generate Plan"
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
        <div className="text-lg font-bold text-white">Today&apos;s AI Wellness Plan</div>
        {sections.map(({ label, items }) => (
          <div key={label}>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
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
          AI-generated wellness guidance for lifestyle support only.
        </div>
      </div>
    </AIToolShell>
  );
}
