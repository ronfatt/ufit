import Link from "next/link";
import { AiChatDemo } from "@/components/ai-chat-demo";
import { FeatureCard } from "@/components/feature-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import {
  featureCards,
  featuredProducts,
  membershipBenefits,
  referralPreview,
  wellnessBenefits,
} from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_30px_80px_rgba(32,53,92,0.12)] backdrop-blur xl:p-12">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
            AI Wellness + Membership + Referral Commerce
          </div>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.02] font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Your AI Wellness Coach
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Improve your health, discover the right wellness products, and grow
            your membership network with AI.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ai-coach"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try AI Coach
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
            >
              Join Membership
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {referralPreview.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4"
              >
                <div className="text-2xl font-semibold text-slate-950">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(160deg,_rgba(8,145,178,0.10),_rgba(255,255,255,0.92)_42%,_rgba(191,219,254,0.45)_100%)] p-6 shadow-[0_18px_50px_rgba(42,78,137,0.12)]">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Wellness Snapshot
            </div>
            <div className="mt-5 text-4xl font-semibold text-slate-950">
              86 / 100
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              AI health score based on sleep, recovery, posture strain, and
              energy rhythm.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
              Member Flow
            </div>
            <div className="mt-5 grid gap-3">
              {[
                "Ask AI about fatigue, sleep, or back discomfort",
                "Get a tailored product recommendation",
                "Unlock membership benefits and referral rewards",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-sky-100">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai-coach" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Ask UFIT AI"
            title="Lead with AI, not old-school MLM screens"
            description="Let prospects type a real wellness issue first. The demo responds with practical guidance, product fit, and a path into membership."
          />
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
            <div className="text-sm font-semibold text-slate-900">
              Example prompts
            </div>
            <div className="mt-4 grid gap-3">
              {[
                "My legs feel tired after standing all day",
                "I have lower back discomfort",
                "Which product is best for recovery?",
                "I sit too long and feel stiff",
              ].map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
        <AiChatDemo />
      </section>

      <section id="features" className="grid gap-5 lg:grid-cols-4">
        {featureCards.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2" id="membership">
          <SectionHeading
            eyebrow="Wellness Benefits"
            title="Simple, credible wellness outcomes"
            description="Position UFIT as a daily lifestyle platform: recovery, circulation, energy, and better routines."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {wellnessBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_12px_32px_rgba(41,75,119,0.08)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {benefit.label}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50/80 p-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Membership Benefits
          </div>
          <div className="mt-5 space-y-4">
            {membershipBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="text-base font-semibold text-slate-950">{benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products">
        <SectionHeading
          eyebrow="Featured Products"
          title="Product stories that support the AI guidance"
          description="Each product card is framed around lifestyle use cases, not hard medical claims."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="referral" className="rounded-[2.25rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_60px_rgba(41,75,119,0.10)] backdrop-blur">
        <SectionHeading
          eyebrow="Referral / Rewards Preview"
          title="This is more than a member system"
          description="UFIT AI helps members manage referrals, track growth, and understand wellness needs with AI."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {referralPreview.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.label}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2.5rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
            Final CTA
          </div>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Join the Future of Wellness Membership
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
          >
            Join Now
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-200 hover:text-sky-100"
          >
            Explore Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
