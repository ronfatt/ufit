import { AiChatDemo } from "@/components/ai-chat-demo";
import { SectionHeading } from "@/components/section-heading";

export function AiChatPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="AI Wellness Chat"
        title="A full-page assistant for lifestyle support"
        description="The AI stays concise, avoids diagnosis, and recommends wellness products as routine support only."
      />
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Sample prompts
          </div>
          <div className="mt-5 grid gap-3">
            {[
              "My legs feel tired after standing all day",
              "Which product is best for recovery?",
              "I sit too long and feel stiff",
              "What wellness product suits lower back discomfort?",
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
        <AiChatDemo />
      </div>
    </div>
  );
}
