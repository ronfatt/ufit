import { DashboardShell } from "@/components/dashboard-shell";
import { AIWellnessScoreCard } from "@/components/ai-tools/ai-wellness-score-card";
import { AIToolsShowcase } from "@/components/ai-tools/ai-tools-showcase";
import { MetricCard } from "@/components/metric-card";
import { ProductCard } from "@/components/product-card";
import { demoProfiles } from "@/data/mock-ai-tools";
import {
  aiInsight,
  dashboardMetrics,
  featuredProducts,
  rewardSummary,
  teamSummary,
} from "@/lib/mock-data";

export default function DashboardPage() {
  const defaultProfile = demoProfiles.find((profile) => profile.id === "jason") ?? demoProfiles[0];

  return (
    <DashboardShell title="会员仪表盘">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-card rounded-[2rem] p-8">
          <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
            欢迎概览
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
            这里是你的健康与会员总览。
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
            更像 AI 生活方式仪表盘，而不是传统后台。健康状态、推荐产品、推荐网络和奖励进度都在一个视图里。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-8 text-white">
          <div className="text-sm font-semibold tracking-[0.2em] text-[#00C2FF]">
            推荐链接
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/6 p-5">
            <div className="text-xs tracking-[0.2em] text-white/40">
              个人链接
            </div>
            <div className="mt-3 text-sm font-medium text-white">
              ufit.ai/join/SARAH2026
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            <p>我的 Sponsor：Farah Wellness Group</p>
            <p>活跃成员：8</p>
            <p>预计奖励：RM 1,280</p>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            复制推荐链接
          </button>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <AIWellnessScoreCard profile={defaultProfile} />
        <section className="glass-card rounded-[2rem] p-6">
          <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
            今日 AI 建议
          </div>
          <div className="mt-4 max-w-3xl text-xl font-bold tracking-[-0.03em] text-white">
            {defaultProfile.recommendation}
          </div>
        </section>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-[0.22em] text-white/45">
              推荐产品
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              AI 为你挑出的本周推荐
            </h2>
          </div>
          <div className="mt-6 grid gap-5">
            {featuredProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-card rounded-[2rem] p-6">
            <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
              团队概览
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {teamSummary.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
              奖励概览
            </div>
            <div className="mt-5 grid gap-4">
              {rewardSummary.map((item) => (
                <MetricCard key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card mt-8 rounded-[2rem] p-6">
        <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
          AI 洞察
        </div>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">
          {aiInsight}
        </p>
      </section>

      <section className="mt-8">
        <div className="mb-6">
          <div className="text-sm font-semibold tracking-[0.22em] text-white/45">
            AI 工具
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">
            直接演示 5 个 AI 工具
          </h2>
        </div>
        <AIToolsShowcase compact />
      </section>
    </DashboardShell>
  );
}
