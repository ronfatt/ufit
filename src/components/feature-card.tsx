export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_40px_rgba(41,75,119,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(41,75,119,0.12)]">
      <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,_rgba(191,219,254,0.9),_rgba(255,255,255,0.95))]" />
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
