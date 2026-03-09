"use client";

import { useState } from "react";
import {
  DemoProfile,
  getWorkoutPlan,
  workoutOptions,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIWorkoutBuilderCard({ profile }: { profile: DemoProfile }) {
  const [focus, setFocus] = useState<(typeof workoutOptions)[number]>("Fatigue Relief");
  const workout = getWorkoutPlan(profile.id, focus);
  const groups = [
    ["Warm-up", workout.warmup],
    ["Mobility", workout.mobility],
    ["Lower Body", workout.lowerBody],
    ["Circulation Boost", workout.circulationBoost],
    ["Flexibility", workout.flexibility],
    ["Cooldown", workout.cooldown],
  ] as const;

  return (
    <AIToolShell
      title="AI Workout Builder"
      subtitle="Short recovery workouts based on your daily routine."
      accentClass="shadow-[0_0_70px_rgba(255,79,216,0.12)]"
      triggerLabel="Build Workout"
      controls={
        <div className="flex flex-wrap gap-2">
          {workoutOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFocus(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                focus === option
                  ? "bg-[#FF4FD8]/18 text-white"
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
        <div className="text-lg font-bold text-white">{workout.title}</div>
        {groups.map(([label, items]) => (
          <div key={label}>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4FD8]">
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
        <div className="rounded-[20px] border border-[#FF4FD8]/16 bg-[#FF4FD8]/10 px-4 py-3 text-sm text-white/80">
          <span className="font-semibold">AI Insight</span>
          <div className="mt-1">{workout.insight}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
