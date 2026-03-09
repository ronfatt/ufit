import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCard } from "@/components/metric-card";
import { ReferralTable } from "@/components/referral-table";
import { RewardProjectionCard } from "@/components/reward-projection-card";
import { SectionHeading } from "@/components/section-heading";
import { networkMetrics, sponsorCard } from "@/lib/mock-data";

export default function ReferralPage() {
  return (
    <DashboardShell title="Referral Network">
      <SectionHeading
        eyebrow="Referral / Network"
        title="A clean network-growth view for the client demo"
        description="No confusing tree view. Just the growth, member activity, sponsor visibility, and reward story."
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Sponsor / Upline Card
          </div>
          <h2 className="mt-4 text-3xl font-semibold">{sponsorCard.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {sponsorCard.description}
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="grid gap-3 text-sm text-white">
              <div>Contact: {sponsorCard.contact}</div>
              <div>Join Date: {sponsorCard.joinDate}</div>
              <div>Member Tier: {sponsorCard.tier}</div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            {networkMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Referral Code
          </div>
          <div className="mt-4 rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 text-lg font-semibold text-slate-950">
            SARAH2026
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Use this code in social sharing, QR links, or member onboarding
            campaigns.
          </p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Copy Button
            </button>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-500">
              QR Code Placeholder
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Growth Insights
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Your referral growth is strongest among wellness-focused users
            looking for daily recovery products.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <ReferralTable />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Rewards Projection Note
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Keep this as a simple visual forecast in the demo. It is enough to
            show momentum and revenue potential without building a real rewards
            engine yet.
          </p>
        </div>
        <RewardProjectionCard />
      </section>
    </DashboardShell>
  );
}
