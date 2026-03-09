"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function AIToolShell({
  title,
  subtitle,
  accentClass,
  triggerLabel,
  controls,
  children,
  loadingPrimary = "AI 正在分析你的健康画像...",
  loadingSecondary = "正在生成个性化方案...",
}: {
  title: string;
  subtitle: string;
  accentClass: string;
  triggerLabel: string;
  controls?: React.ReactNode;
  children: React.ReactNode;
  loadingPrimary?: string;
  loadingSecondary?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setOpen(true);
  }

  return (
    <div className={cn("glass-card rounded-[30px] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.01]", accentClass)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/45">
            AI 工具
          </div>
          <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-white/65">{subtitle}</p>
        </div>
        <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/8 shadow-[0_0_24px_rgba(255,255,255,0.08)]" />
      </div>

      {controls ? <div className="mt-5">{controls}</div> : null}

      <button
        type="button"
        onClick={() => void handleGenerate()}
        className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
      >
        {loading ? "AI 正在生成中..." : triggerLabel}
      </button>

      {loading ? (
        <div className="section-reveal mt-5 rounded-[24px] border border-white/10 bg-white/6 p-5">
          <div className="text-sm font-semibold text-white">{loadingPrimary}</div>
          <div className="mt-2 text-sm text-white/60">{loadingSecondary}</div>
        </div>
      ) : null}

      {open && !loading ? (
        <div className="section-reveal mt-5 rounded-[24px] border border-white/10 bg-white/6 p-5">
          {children}
        </div>
      ) : null}
    </div>
  );
}
