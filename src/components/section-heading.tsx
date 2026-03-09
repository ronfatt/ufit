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
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-white/68">{description}</p>
    </div>
  );
}
