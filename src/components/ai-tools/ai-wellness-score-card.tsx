import { DemoProfile } from "@/data/mock-ai-tools";

export function AIWellnessScoreCard({ profile }: { profile: DemoProfile }) {
  const breakdown = [
    ["Sleep", profile.scoreBreakdown.sleep],
    ["Activity", profile.scoreBreakdown.activity],
    ["Nutrition", profile.scoreBreakdown.nutrition],
    ["Recovery", profile.scoreBreakdown.recovery],
  ] as const;

  return (
    <div className="glass-card rounded-[2rem] p-8">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
        WELLNESS SCORE
      </div>
      <div className="mt-5 flex items-end gap-4">
        <div>
          <div className="text-sm text-white/55">Overall</div>
          <div className="mt-2 text-5xl font-black tracking-[-0.05em] text-white">
            {profile.wellnessScore} / 100
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        {breakdown.map(([label, value]) => (
          <div key={label} className="rounded-[18px] border border-white/10 bg-white/6 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-white/72">{label}</div>
              <div className="text-sm font-semibold text-white">{value}</div>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)]"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-[20px] border border-[#00C2FF]/16 bg-[#00C2FF]/10 px-4 py-3 text-sm text-white/82">
        <span className="font-semibold">AI Insight</span>
        <div className="mt-1">{profile.scoreBreakdown.insight}</div>
      </div>
    </div>
  );
}
