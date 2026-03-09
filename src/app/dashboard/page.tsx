import Link from "next/link";
import { MetricCard } from "@/components/metric-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import {
  dashboardMetrics,
  featuredProducts,
  rewardSummary,
  teamSummary,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Member Dashboard
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950">
            Welcome back, Aina.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Your AI-guided wellness journey, product picks, and referral growth
            are all in one clean member view.
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
              ufit.ai/join/UFIT-AINA-108
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>My Sponsor: Farah Wellness Group</p>
            <p>Active Members: 18</p>
            <p>Estimated Rewards: RM 1,280</p>
          </div>
          <Link
            href="/referral"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
          >
            View Network
          </Link>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Recommended Products"
            title="AI-picked products for your current routine"
            description="Mock data is enough for the demo, but the structure already matches a real recommendation flow."
          />
          <div className="mt-6 grid gap-5">
            {featuredProducts.slice(0, 2).map((product) => (
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
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {rewardSummary.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
