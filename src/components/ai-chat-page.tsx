import { AiChatDemo } from "@/components/ai-chat-demo";
import { SectionHeading } from "@/components/section-heading";

export function AiChatPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="AI WELLNESS CHAT"
        title="全页 AI 健康对话体验"
        description="AI 保持简短、友好、不诊断疾病，只做生活方式支持与健康产品建议。"
      />
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="glass-card rounded-[2rem] p-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
            SAMPLE PROMPTS
          </div>
          <div className="mt-5 grid gap-3">
            {[
              "我站很久以后腿很酸",
              "哪款产品更适合恢复",
              "我久坐以后身体很僵",
              "腰部不适适合什么健康产品",
            ].map((prompt) => (
              <div
                key={prompt}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/68"
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
        <AiChatDemo />
      </div>
    </div>
  );
}
