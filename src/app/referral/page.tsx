import { DashboardShell } from "@/components/dashboard-shell";
import { MetricCard } from "@/components/metric-card";
import { ReferralTable } from "@/components/referral-table";
import { RewardProjectionCard } from "@/components/reward-projection-card";
import { SectionHeading } from "@/components/section-heading";
import { networkMetrics, sponsorCard } from "@/lib/mock-data";

export default function ReferralPage() {
  return (
    <DashboardShell title="推荐网络">
      <SectionHeading
        eyebrow="REFERRAL / NETWORK"
        title="推荐增长要像内容平台，不像奖金后台。"
        description="这里展示的是增长、活跃、转化和奖励节奏，不是复杂树状图。"
      />

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-card rounded-[2rem] p-8 text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
            SPONSOR CARD
          </div>
          <h2 className="mt-4 text-3xl font-semibold">{sponsorCard.name}</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            {sponsorCard.description}
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/6 p-5">
            <div className="grid gap-3 text-sm text-white">
              <div>联系邮箱：{sponsorCard.contact}</div>
              <div>加入时间：{sponsorCard.joinDate}</div>
              <div>会员等级：{sponsorCard.tier}</div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {networkMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-[2rem] p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            REFERRAL CODE
          </div>
          <div className="mt-4 rounded-3xl border border-[#00C2FF]/20 bg-[#00C2FF]/10 px-5 py-4 text-lg font-semibold text-white">
            SARAH2026
          </div>
          <p className="mt-4 text-sm leading-6 text-white/68">
            可用于社交分享、成员邀请链接或新会员 onboarding 场景。
          </p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              className="rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              复制链接
            </button>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-3 text-sm text-white/55">
              二维码占位
            </div>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            GROWTH INSIGHTS
          </div>
          <p className="mt-4 text-sm leading-7 text-white/68">
            你的推荐增长，主要来自关注日常恢复、久站疲劳和身体舒适感的用户群体。
          </p>
        </div>
      </section>

      <section className="mt-6">
        <ReferralTable />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[2rem] p-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            REWARDS NOTE
          </div>
          <p className="mt-4 text-sm leading-7 text-white/68">
            这里先保持成轻量预测视图就够了，足以展示动能和奖励潜力，不必现在就做真实奖励引擎。
          </p>
        </div>
        <RewardProjectionCard />
      </section>
    </DashboardShell>
  );
}
