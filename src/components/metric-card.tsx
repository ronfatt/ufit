type MetricCardProps = {
  label: string;
  value: string;
  note: string;
};

export function MetricCard({ label, value, note }: MetricCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/85 p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
        {value}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-500">{note}</p>
    </div>
  );
}
