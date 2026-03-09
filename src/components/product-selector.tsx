"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { recommendationOptions } from "@/data/mock-data";

type CoachProduct = {
  name: string;
  reason: string;
};

type CoachResponse = {
  summary: string;
  advice: string;
  products: CoachProduct[];
  cta: string;
};

export function ProductSelector() {
  const [active, setActive] = useState(recommendationOptions[0]);
  const [response, setResponse] = useState<CoachResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRecommendation() {
      setLoading(true);
      try {
        const result = await fetch("/api/ai-coach", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: `请根据${active}推荐 UFIT 产品。`,
          }),
        });

        const data = (await result.json()) as CoachResponse;
        setResponse(data);
      } finally {
        setLoading(false);
      }
    }

    void loadRecommendation();
  }, [active]);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="glass-card rounded-[2rem] p-8">
        <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
          选择需求
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {recommendationOptions.map((option) => {
            const isActive = option === active;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActive(option)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] text-white shadow-[0_0_24px_rgba(124,58,237,0.28)]"
                    : "border border-white/10 bg-white/6 text-white/70 hover:border-[#00C2FF]/24 hover:bg-white/10 hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
          <div className="text-xs font-semibold tracking-[0.2em] text-white/45">
            这个页面为什么重要
          </div>
          <p className="mt-3 text-sm leading-7 text-white/68">
            这个页面最重要的作用，是让客户一眼看懂：平台先从身体感受出发，再连接产品、会员和推荐增长。这只是健康建议，不是医疗诊断。
          </p>
        </div>
      </div>

      <div className="glass-card rounded-[2rem] p-8 text-white">
        {loading || !response ? (
          <div className="text-sm text-white/62">正在生成推荐...</div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-[#00C2FF]">
                当前关注点
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                {active}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68">
                {response.summary}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <div className="text-xs font-semibold tracking-[0.2em] text-white/45">
                AI 推荐说明
              </div>
              <p className="mt-3 text-sm leading-7 text-white/78">
                {response.advice}
              </p>
            </div>

            <div className="grid gap-4">
              {response.products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,255,0.12),rgba(124,58,237,0.12))] p-5"
                >
                  <div className="text-lg font-semibold text-white">
                    {product.name}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {product.reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                加入会员
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex rounded-full border border-white/20 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                查看产品
              </Link>
            </div>

            <div className="rounded-2xl border border-[#FF4FD8]/18 bg-[#FF4FD8]/10 px-4 py-3 text-sm font-medium text-white">
              {response.cta}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
