import { rewardProjection } from "@/data/mock-data";

export function RewardProjectionCard() {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Rewards Projection
      </div>
      <div className="mt-6 flex items-end gap-4">
        {rewardProjection.map((item) => (
          <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-40 w-full items-end rounded-3xl bg-slate-100 p-2">
              <div
                className="w-full rounded-[1.25rem] bg-[linear-gradient(180deg,_rgba(96,165,250,0.95),_rgba(30,41,59,0.95))]"
                style={{ height: `${item.value}%` }}
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {item.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
