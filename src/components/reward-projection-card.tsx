import { rewardProjection } from "@/data/mock-data";

export function RewardProjectionCard() {
  return (
    <div className="glass-card rounded-[2rem] p-6">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
        REWARDS PROJECTION
      </div>
      <div className="mt-6 flex items-end gap-4">
        {rewardProjection.map((item) => (
          <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-40 w-full items-end rounded-3xl bg-white/6 p-2">
              <div
                className="w-full rounded-[1.25rem] bg-[linear-gradient(180deg,#B7FF3C,_#00C2FF,_#7C3AED)]"
                style={{ height: `${item.value}%` }}
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              {item.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
