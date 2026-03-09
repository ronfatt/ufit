import Link from "next/link";
import { Product } from "@/lib/mock-data";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <div className="rounded-[1.9rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {product.category}
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">
            {product.name}
          </h3>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
          {product.price}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{product.benefit}</p>

      {!compact && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
          {product.image}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <Link
          href="/recommend"
          className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Recommendation
        </Link>
        <Link
          href="/login"
          className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
        >
          Join Membership
        </Link>
      </div>
    </div>
  );
}
