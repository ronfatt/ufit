export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
