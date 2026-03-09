"use client";

import { DemoProfile } from "@/data/mock-ai-tools";

export function PersonaSwitcher({
  profiles,
  activeId,
  onChange,
}: {
  profiles: DemoProfile[];
  activeId: DemoProfile["id"];
  onChange: (id: DemoProfile["id"]) => void;
}) {
  return (
    <div className="glass-card rounded-[26px] p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/45">
            切换演示用户
          </div>
          <div className="mt-2 text-lg font-bold text-white">切换演示用户</div>
        </div>
        <div className="flex flex-wrap gap-3">
          {profiles.map((profile) => {
            const active = profile.id === activeId;

            return (
              <button
                key={profile.id}
                type="button"
                onClick={() => onChange(profile.id)}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] text-white shadow-[0_0_24px_rgba(124,58,237,0.26)]"
                    : "border border-white/10 bg-white/6 text-white/72 hover:bg-white/10"
                }`}
              >
                {profile.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
