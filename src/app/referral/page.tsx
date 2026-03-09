import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { networkMetrics, sponsorCard } from "@/lib/mock-data";

export default function ReferralPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Referral / Network"
        title="A clean referral view for the client demo"
        description="No bonus tree, no commission engine. Just the core numbers that make the business model understandable."
      />

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            My Sponsor
          </div>
          <h2 className="mt-4 text-3xl font-semibold">{sponsorCard.name}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {sponsorCard.description}
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Contact
            </div>
            <div className="mt-2 text-sm text-white">{sponsorCard.contact}</div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            UFIT-AINA-108
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Use this code in social sharing, QR links, or member onboarding
            campaigns.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Demo Notes
          </div>
          <div className="mt-4 grid gap-3">
            {[
              "Start with a sponsor card, referral link, and a few top-line metrics.",
              "Keep active members and estimated rewards as mock values for presentation.",
              "Expand into deeper MLM logic only after the client validates the direction.",
            ].map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
