import Link from "next/link";
import { Product } from "@/data/mock-data";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const accentMap: Record<string, string> = {
    legging: "from-[#00C2FF]/20 to-[#7C3AED]/18",
    belt: "from-[#FF4FD8]/18 to-[#7C3AED]/14",
    socks: "from-[#B7FF3C]/16 to-[#00C2FF]/12",
    tee: "from-[#7C3AED]/18 to-[#FF4FD8]/12",
  };

  return (
    <div className="glass-card rounded-[28px] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            {product.category}
          </div>
          <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">
            {product.name}
          </h3>
        </div>
        <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-sm font-semibold text-white">
          {product.price}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/68">{product.benefit}</p>

      {!compact && (
        <div
          className={`mt-4 rounded-[24px] border border-white/10 bg-gradient-to-br ${accentMap[product.id] ?? "from-white/10 to-white/5"} px-4 py-6 text-sm text-white/62`}
        >
          {product.image}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/55"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href="/recommendation"
          className="inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          {compact ? "加入方案" : "查看推荐"}
        </Link>
        <Link
          href="/login"
          className="inline-flex rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          加入会员
        </Link>
      </div>
    </div>
  );
}
