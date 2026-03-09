import { ProductSelector } from "@/components/product-selector";
import { SectionHeading } from "@/components/section-heading";

export default function RecommendPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="PRODUCT RECOMMENDATION"
        title="智能健康推荐"
        description="选择身体感受或生活场景，看看 UFIT AI 会怎样把需求、产品和会员路径连起来。"
      />
      <ProductSelector />
    </div>
  );
}
