import { ProductSelector } from "@/components/product-selector";
import { SectionHeading } from "@/components/section-heading";

export default function RecommendPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Product Recommendation"
        title="Smart Wellness Recommendation"
        description="Pick a symptom or lifestyle goal and show how UFIT can recommend the right product plus the membership path."
      />
      <ProductSelector />
    </div>
  );
}
