"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

const symptomOptions = [
  "Fatigue",
  "Poor circulation",
  "Lower back discomfort",
  "Sports recovery",
];

export function ProductSelector() {
  const [active, setActive] = useState(symptomOptions[0]);
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
            prompt: `Recommend UFIT products for ${active.toLowerCase()}.`,
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
      <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Select a need
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {symptomOptions.map((option) => {
            const isActive = option === active;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setActive(option)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Why this page matters
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This is the fastest way to show the client that the business starts
            from wellness needs, then moves into products, membership, and
            referral commerce.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        {loading || !response ? (
          <div className="text-sm text-slate-300">Preparing recommendation...</div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Selected Focus
              </div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                {active}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                {response.summary}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                AI Recommendation
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {response.advice}
              </p>
            </div>

            <div className="grid gap-4">
              {response.products.map((product) => (
                <div
                  key={product.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-lg font-semibold text-white">
                    {product.name}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {product.reason}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/login"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
              >
                Join Membership
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-200 hover:text-sky-100"
              >
                View Dashboard
              </Link>
            </div>

            <div className="rounded-2xl border border-sky-200/20 bg-sky-400/10 px-4 py-3 text-sm font-medium text-sky-100">
              {response.cta}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
