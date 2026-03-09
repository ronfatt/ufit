"use client";

import { useMemo, useState } from "react";
import {
  demoProfiles,
  DemoProfile,
} from "@/data/mock-ai-tools";
import { AIDailyPlanCard } from "@/components/ai-tools/ai-daily-plan-card";
import { AIMealPlannerCard } from "@/components/ai-tools/ai-meal-planner-card";
import { AIProductMatcherCard } from "@/components/ai-tools/ai-product-matcher-card";
import { AIWeeklyInsightCard } from "@/components/ai-tools/ai-weekly-insight-card";
import { AIWorkoutBuilderCard } from "@/components/ai-tools/ai-workout-builder-card";
import { PersonaSwitcher } from "@/components/ai-tools/persona-switcher";

export function AIToolsShowcase({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [activeId, setActiveId] = useState<DemoProfile["id"]>("jason");
  const activeProfile = useMemo(
    () => demoProfiles.find((profile) => profile.id === activeId) ?? demoProfiles[1],
    [activeId],
  );

  return (
    <div className="space-y-6">
      <PersonaSwitcher
        profiles={demoProfiles}
        activeId={activeId}
        onChange={setActiveId}
      />

      <div className="glass-card rounded-[28px] p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              DEMO PROFILE
            </div>
            <div className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
              {activeProfile.name}
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/68">
              Age: {activeProfile.age} · Lifestyle: {activeProfile.lifestyle} · Work: {activeProfile.work}
              <br />
              Main issue: {activeProfile.mainIssue} · Goal: {activeProfile.goal}
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/6 px-5 py-4 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              WELLNESS SCORE
            </div>
            <div className="mt-2 text-4xl font-black tracking-[-0.05em] text-white">
              {activeProfile.wellnessScore}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid gap-5 ${compact ? "xl:grid-cols-2" : "xl:grid-cols-2"}`}>
        <AIDailyPlanCard profile={activeProfile} />
        <AIMealPlannerCard profile={activeProfile} />
        <AIWorkoutBuilderCard profile={activeProfile} />
        <AIProductMatcherCard profile={activeProfile} />
        <div className={compact ? "xl:col-span-2" : "xl:col-span-2"}>
          <AIWeeklyInsightCard profile={activeProfile} />
        </div>
      </div>
    </div>
  );
}
