"use client";

import { useState } from "react";

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

const quickPrompts = [
  "我站很久，腿很酸",
  "我有点腰部不舒服",
  "哪款产品更适合恢复",
  "我久坐以后身体很僵",
];

export function AiChatDemo() {
  const [prompt, setPrompt] = useState(quickPrompts[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<CoachResponse | null>(null);

  async function handleSubmit(nextPrompt?: string) {
    const input = nextPrompt ?? prompt;
    if (!input.trim()) return;

    setLoading(true);
    try {
      const result = await fetch("/api/ai-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = (await result.json()) as CoachResponse;
      setResponse(data);
      setPrompt(input);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-card glow-border rounded-[32px] p-6 shadow-[0_0_80px_rgba(124,58,237,0.18)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            AI CHAT DEMO
          </div>
          <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
            和 UFIT AI 聊聊
          </h3>
        </div>
        <div className="rounded-full border border-[#00C2FF]/20 bg-[#00C2FF]/10 px-3 py-1 text-xs font-semibold text-[#7fe2ff]">
          LIVE DEMO
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {quickPrompts.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => void handleSubmit(item)}
            className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/72 transition hover:scale-[1.02] hover:border-[#00C2FF]/30 hover:bg-[#00C2FF]/10 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[28px] border border-white/10 bg-white/6 p-4">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={4}
          className="w-full resize-none bg-transparent text-sm leading-7 text-white outline-none placeholder:text-white/35"
          placeholder="输入你的健康状态，例如：我久站后小腿很紧，脚也很累..."
        />
      </div>

      <button
        type="button"
        onClick={() => void handleSubmit()}
        className="pulse-glow mt-4 inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
      >
        {loading ? "AI 正在生成建议..." : "获取 AI 建议"}
      </button>

      <div className="mt-6 space-y-4">
        {response ? (
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="max-w-[82%] rounded-[24px] bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-4 py-3 text-sm leading-7 text-white shadow-[0_0_28px_rgba(124,58,237,0.28)]">
                {prompt}
              </div>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/7 p-5 text-sm leading-7 text-white/78">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                AI SUMMARY
              </div>
              {response.summary}
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/7 p-5 text-sm leading-7 text-white/78">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                AI ADVICE
              </div>
              {response.advice}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/7 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B7FF3C]">
                推荐产品
              </div>
              <div className="mt-4 grid gap-3">
                {response.products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(0,194,255,0.12),rgba(124,58,237,0.12))] p-4 transition hover:translate-x-1"
                  >
                    <div className="font-semibold text-white">
                      {product.name}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/68">
                      {product.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[#FF4FD8]/18 bg-[#FF4FD8]/10 px-4 py-3 text-sm font-medium text-white">
              {response.cta}
            </div>
          </div>
        ) : (
          <div className="rounded-[24px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/62">
            先点一个示例问题，体验 AI 健康建议、产品匹配和会员转化这一整段路径。
          </div>
        )}
      </div>
    </div>
  );
}
