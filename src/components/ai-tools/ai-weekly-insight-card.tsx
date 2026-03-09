"use client";

import { DemoProfile, getWeeklyInsight } from "@/data/mock-ai-tools";
import { AIToolShell } from "@/components/ai-tools/ai-tool-shell";

export function AIWeeklyInsightCard({ profile }: { profile: DemoProfile }) {
  const insight = getWeeklyInsight(profile.id);

  return (
    <AIToolShell
      title="AI 每周洞察"
      subtitle="用可视化方式分析你的健康习惯与恢复状态。"
      accentClass="shadow-[0_0_70px_rgba(124,58,237,0.16)]"
      triggerLabel="查看洞察报告"
    >
      <div className="space-y-5">
        <div className="text-lg font-bold text-white">本周 AI 洞察报告</div>
        <div className="grid gap-3">
          {insight.stats.map((stat) => (
            <div key={stat.label} className="rounded-[20px] border border-white/10 bg-white/6 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-white/72">{stat.label}</div>
                <div className="text-sm font-semibold text-white">{stat.value}</div>
              </div>
              <div className="mt-3 h-2.5 rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[linear-gradient(135deg,#7C3AED,#FF4FD8)]"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {insight.sections.map((section) => (
            <div key={section.title} className="rounded-[18px] border border-white/10 bg-white/6 p-4">
              <div className="text-sm font-semibold tracking-[0.2em] text-[#FF4FD8]">
                {section.title}
              </div>
              <div className="mt-2 text-sm leading-7 text-white/72">{section.body}</div>
            </div>
          ))}
        </div>
        <div className="rounded-[20px] border border-[#FF4FD8]/16 bg-[#FF4FD8]/10 px-4 py-3 text-sm text-white/82">
          <span className="font-semibold">AI 建议</span>
          <div className="mt-1">{insight.recommendation}</div>
        </div>
      </div>
    </AIToolShell>
  );
}
