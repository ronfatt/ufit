"use client";

import { useState } from "react";
import {
  DemoProfile,
  getWorkoutPlan,
  workoutOptions,
} from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIWorkoutBuilderCard({ profile }: { profile: DemoProfile }) {
  const [focus, setFocus] = useState<(typeof workoutOptions)[number]>("缓解疲劳");
  const workout = getWorkoutPlan(profile.id, focus);
  const groups = [
    ["热身", workout.warmup],
    ["活动度", workout.mobility],
    ["下肢激活", workout.lowerBody],
    ["循环提升", workout.circulationBoost],
    ["柔韧拉伸", workout.flexibility],
    ["收操放松", workout.cooldown],
  ] as const;

  return (
    <AIToolShell
      title="AI 训练生成器"
      subtitle="根据你的日常节奏生成短时恢复训练。"
      accentClass="shadow-[0_0_70px_rgba(255,79,216,0.12)]"
      triggerLabel="生成训练"
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
            <div className="text-sm font-semibold tracking-[0.2em] text-[#FF4FD8]">
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
          <span className="font-semibold">AI 洞察</span>
          <div className="mt-1">{workout.insight}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
