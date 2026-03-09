"use client";

import { useState } from "react";
import {
  DemoProfile,
  getProductMatch,
  symptomOptions,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIProductMatcherCard({ profile }: { profile: DemoProfile }) {
  const [symptom, setSymptom] = useState<(typeof symptomOptions)[number]>("Long Standing Hours");
  const result = getProductMatch(profile.id, symptom);

  return (
    <AIToolShell
      title="AI Product Match"
      subtitle="Products recommended based on your lifestyle and symptoms."
      accentClass="shadow-[0_0_70px_rgba(0,194,255,0.12)]"
      triggerLabel="Match Products"
      controls={
        <div className="flex flex-wrap gap-2">
          {symptomOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSymptom(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                symptom === option
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
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            Symptoms
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.selectedSymptoms.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-semibold text-white/78"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="text-lg font-bold text-white">Recommended Wellness Support</div>
        <div className="grid gap-3">
          {result.items.map((item, index) => (
            <div
              key={item.name}
              className="rounded-[20px] border border-white/10 bg-white/6 p-4"
            >
              <div className="text-base font-bold text-white">{index + 1}. {item.name}</div>
              <div className="mt-3 text-sm leading-7 text-white/72">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[20px] border border-[#00C2FF]/16 bg-[#00C2FF]/10 px-4 py-3 text-sm text-white/80">
          <span className="font-semibold">AI Explanation</span>
          <div className="mt-1">{result.explanation}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
