import { AIToolsShowcase } from "@/components/ai-tools/ai-tools-showcase";
import { SectionHeading } from "@/components/section-heading";

export default function AIToolsPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="UFIT AI TOOLS"
        title="可视化体验 UFIT AI 的 5 个核心工具"
        description="探索 UFIT AI 如何帮助会员管理日常健康、产品匹配、餐单规划、恢复安排和每周洞察。"
      />
      <AIToolsShowcase />
    </div>
  );
}
