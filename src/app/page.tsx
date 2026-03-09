import Link from "next/link";
import { AiChatDemo } from "@/components/ai-chat-demo";
import { AIToolsShowcase } from "@/components/ai-tools/ai-tools-showcase";
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
      <section className="section-reveal relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="relative">
          <div className="mb-6 inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            AI WELLNESS + MEMBERSHIP + REFERRAL
          </div>
          <h1 className="max-w-3xl font-sans text-[3.8rem] leading-[0.88] font-black tracking-[-0.06em] text-white sm:text-[4.7rem] lg:text-[5.5rem]">
            <span className="bg-[linear-gradient(135deg,#F8FAFC_0%,#B8C2FF_18%,#00C2FF_46%,#FF4FD8_72%,#B7FF3C_100%)] bg-clip-text text-transparent">
              Talk to AI.
            </span>
            <br />
            <span className="text-white">状态更亮。</span>
            <br />
            <span className="text-white/88">增长更聪明。</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            这不是传统会员后台。UFIT AI 把健康建议、产品推荐、会员权益和推荐增长，做成一个年轻、上头、好懂的 AI lifestyle platform。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ai-coach"
              className="pulse-glow inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              先聊 AI 教练
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              加入会员体验
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "AI 回答", value: "9.2k" },
              { label: "推荐激活", value: "386" },
              { label: "会员增速", value: "+31%" },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`glass-card rounded-[28px] p-5 transition hover:scale-[1.02] ${
                  index === 0
                    ? "shadow-[0_0_60px_rgba(0,194,255,0.12)]"
                    : index === 1
                      ? "shadow-[0_0_60px_rgba(124,58,237,0.14)]"
                      : "shadow-[0_0_60px_rgba(183,255,60,0.12)]"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {item.label}
                </div>
                <div className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-[#7C3AED]/35 blur-[90px]" />
          <div className="absolute right-8 top-20 h-40 w-40 rounded-full bg-[#00C2FF]/26 blur-[90px]" />
          <div className="absolute bottom-20 left-1/3 h-36 w-36 rounded-full bg-[#FF4FD8]/20 blur-[90px]" />

          <div className="float-card absolute left-2 top-6 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B7FF3C]">
            AI MATCH
          </div>
          <div className="float-card-delay absolute right-0 top-16 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4FD8]">
            GLOW MODE
          </div>
          <div className="float-card-slow absolute left-10 top-28 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C2FF]">
            MEMBER PERKS
          </div>

          <div className="glass-card glow-border float-card absolute right-10 top-24 w-[72%] rounded-[32px] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              UFIT AI CHAT
            </div>
            <div className="mt-5 flex justify-end">
              <div className="max-w-[82%] rounded-[22px] bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-4 py-3 text-sm leading-6 text-white shadow-[0_0_32px_rgba(124,58,237,0.35)]">
                我站很久，腿很酸，脚也很累。
              </div>
            </div>
            <div className="mt-4 max-w-[88%] rounded-[22px] border border-white/10 bg-white/7 px-4 py-4 text-sm leading-6 text-white/78">
              你现在更像是久站后的循环疲劳。先做日常恢复，再搭配适合久站场景的支持型产品会更顺。
            </div>
          </div>

          <div className="glass-card float-card-delay absolute bottom-10 left-0 w-[58%] rounded-[30px] p-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B7FF3C]">
                推荐组合
              </div>
              <div className="rounded-full bg-[#B7FF3C]/16 px-3 py-1 text-xs font-semibold text-[#D8FF87]">
                2 款
              </div>
            </div>
            <div className="mt-4 rounded-[24px] bg-[linear-gradient(135deg,rgba(183,255,60,0.16),rgba(0,194,255,0.12))] p-4">
              <div className="text-lg font-bold text-white">UFIT Infra Socks</div>
              <div className="mt-2 text-sm leading-6 text-white/70">
                适合久站脚部疲劳、腿部不轻松的人群。
              </div>
            </div>
          </div>

          <div className="glass-card float-card-slow absolute bottom-0 right-4 w-[40%] rounded-[28px] p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4FD8]">
              实时状态
            </div>
            <div className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">78</div>
            <div className="mt-2 text-sm text-white/65">AI 健康分数</div>
          </div>
        </div>
      </section>

      <section id="ai-coach" className="section-reveal grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="AI DEMO"
            title="像真实 App 一样聊，不像表单。"
            description="先输入疲劳、久坐、久站、恢复这类真实感受。AI 会用更短、更好懂的方式回你，并把推荐产品从旁边滑出来。"
          />
          <div className="glass-card rounded-[28px] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              快速示例
            </div>
            <div className="mt-4 grid gap-3">
              {[
                "我站很久，腿很酸",
                "我有点腰部不舒服",
                "哪款产品更适合恢复",
                "我久坐以后身体很僵",
              ].map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/72"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
        <AiChatDemo />
      </section>

      <section id="features" className="section-reveal">
        <SectionHeading
          eyebrow="WHAT UFIT AI CAN DO"
          title="不只是聊天，还是一套 AI 健康操作系统。"
          description="不只是 AI 教练。UFIT AI 还能帮会员规划每日节奏、生成餐单、安排训练、匹配产品、分析每周习惯。"
        />
        <div className="mt-8">
          <AIToolsShowcase compact />
        </div>
      </section>

      <section className="section-reveal">
        <SectionHeading
          eyebrow="WHY MEMBERS JOIN"
          title="先问 AI，再配产品，再开权益。"
          description="四步就能把这个项目和老派 MLM 拉开距离。"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {featureCards.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section id="membership" className="section-reveal grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <SectionHeading
            eyebrow="MEMBERSHIP ENERGY"
            title="会员感受，应该比说明更先到位。"
            description="视觉上像 AI 健康俱乐部，体验上像一个愿意每天打开的生活方式平台。"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {wellnessBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`glass-card rounded-[28px] p-6 transition hover:scale-[1.02] ${
                  index === 0
                    ? "shadow-[0_0_60px_rgba(0,194,255,0.12)]"
                    : index === 1
                      ? "shadow-[0_0_60px_rgba(124,58,237,0.14)]"
                      : index === 2
                        ? "shadow-[0_0_60px_rgba(255,79,216,0.12)]"
                        : "shadow-[0_0_60px_rgba(183,255,60,0.12)]"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {benefit.label}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-6">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            MEMBER PERKS
          </div>
          <div className="mt-5 space-y-4">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`rounded-[24px] border px-5 py-4 text-base font-semibold ${
                  index % 4 === 0
                    ? "border-[#00C2FF]/20 bg-[#00C2FF]/10 text-white"
                    : index % 4 === 1
                      ? "border-[#7C3AED]/20 bg-[#7C3AED]/10 text-white"
                      : index % 4 === 2
                        ? "border-[#FF4FD8]/20 bg-[#FF4FD8]/10 text-white"
                        : "border-[#B7FF3C]/20 bg-[#B7FF3C]/10 text-white"
                }`}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section-reveal">
        <SectionHeading
          eyebrow="PRODUCT STRIP"
          title="产品卡要像潮流健康装备，不像占位框。"
          description="更适合年轻用户的，是带氛围、带身份、带场景的产品表达。"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="referral" className="section-reveal grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="glass-card rounded-[32px] p-8">
          <SectionHeading
            eyebrow="REFERRAL EXPERIENCE"
            title="看起来像 creator growth dashboard。"
            description="推荐网络不该让人想到奖金树，而是成长、动能、转化和奖励节奏。"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {referralPreview.map((item, index) => (
              <div
                key={item.label}
                className={`rounded-[24px] border p-5 ${
                  index === 0
                    ? "border-[#00C2FF]/16 bg-[#00C2FF]/10"
                    : index === 1
                      ? "border-[#7C3AED]/16 bg-[#7C3AED]/10"
                      : index === 2
                        ? "border-[#B7FF3C]/16 bg-[#B7FF3C]/10"
                        : "border-[#FF4FD8]/16 bg-[#FF4FD8]/10"
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {item.label}
                </div>
                <div className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
            GROWTH MOMENTUM
          </div>
          <div className="mt-6 space-y-4">
            {[
              "AI 咨询最多的是久站疲劳和日常恢复。",
              "产品点击最高的是支撑类与循环类组合。",
              "会员最容易从 AI 对话后进入推荐链接。",
            ].map((note, index) => (
              <div
                key={note}
                className={`rounded-[24px] border px-5 py-4 text-sm leading-7 text-white/72 ${
                  index === 0
                    ? "border-[#00C2FF]/16 bg-white/6"
                    : index === 1
                      ? "border-[#FF4FD8]/16 bg-white/6"
                      : "border-[#B7FF3C]/16 bg-white/6"
                }`}
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-reveal glass-card rounded-[36px] px-8 py-10 text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
          FINAL CTA
        </div>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
          你的健康升级，可以从一段 AI 对话开始。
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/68">
          先把客户带进来感受，再讲会员、产品和推荐增长，整个 demo 会更像未来平台，而不是传统系统。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/login"
            className="pulse-glow inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#FF4FD8)] px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            立即加入
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            查看 Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
