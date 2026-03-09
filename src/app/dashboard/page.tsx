import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCard } from "@/components/metric-card";
import { ProductCard } from "@/components/product-card";
import {
  aiInsight,
  dashboardMetrics,
  featuredProducts,
  rewardSummary,
  teamSummary,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <DashboardShell title="Member Dashboard">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Welcome Card
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950">
            Here is your wellness and membership overview.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A modern dashboard layout that keeps wellness, product fit, and
            referral growth visible without feeling like an old back office.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Referral Link
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Personal URL
            </div>
            <div className="mt-3 text-sm font-medium text-white">
              ufit.ai/join/SARAH2026
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>My Sponsor: Farah Wellness Group</p>
            <p>Active Members: 8</p>
            <p>Estimated Rewards: RM 1,280</p>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
          >
            Copy Referral Link
          </button>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Recommended Products
            </div>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              AI-picked products for your current routine
            </h2>
          </div>
          <div className="mt-6 grid gap-5">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Team Summary
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {teamSummary.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Rewards Summary
            </div>
            <div className="mt-5 grid gap-4">
              {rewardSummary.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          AI Insight
        </div>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          {aiInsight}
        </p>
      </section>
    </DashboardShell>
  );
}
