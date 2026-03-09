type MetricCardProps = {
  label: string;
  value: string;
  note: string;
};

export function MetricCard({ label, value, note }: MetricCardProps) {
  return (
    <div className="glass-card rounded-[24px] p-5 transition hover:scale-[1.02]">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <div className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">
        {value}
      </div>
      <p className="mt-2 text-sm leading-6 text-white/62">{note}</p>
    </div>
  );
}
