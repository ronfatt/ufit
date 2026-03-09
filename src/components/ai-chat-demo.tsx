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
  "I feel tired after standing all day",
  "I have lower back discomfort",
  "I am not sleeping well recently",
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
    <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_24px_70px_rgba(41,75,119,0.12)] backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            AI Chat Demo
          </div>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">
            Ask UFIT AI
          </h3>
        </div>
        <div className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
          Demo Ready
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {quickPrompts.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => void handleSubmit(item)}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={4}
          className="w-full resize-none bg-transparent text-sm leading-7 text-slate-700 outline-none"
          placeholder="Describe your wellness issue here..."
        />
      </div>

      <button
        type="button"
        onClick={() => void handleSubmit()}
        className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        {loading ? "Thinking..." : "Get AI Guidance"}
      </button>

      <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-5">
        {response ? (
          <div className="space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Summary
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {response.summary}
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Wellness Advice
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {response.advice}
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Recommended Products
              </div>
              <div className="mt-3 grid gap-3">
                {response.products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="font-semibold text-slate-950">
                      {product.name}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {product.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-medium text-sky-800">
              {response.cta}
            </div>
          </div>
        ) : (
          <div className="text-sm leading-7 text-slate-500">
            Ask about fatigue, sleep, back discomfort, recovery, or circulation
            to preview AI-driven wellness guidance.
          </div>
        )}
      </div>
    </div>
  );
}
