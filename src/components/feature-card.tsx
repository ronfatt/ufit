export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const accentMap: Record<string, string> = {
    "问 AI": "from-[#00C2FF]/22 to-[#7C3AED]/12",
    "配产品": "from-[#B7FF3C]/18 to-[#00C2FF]/10",
    "开权益": "from-[#FF4FD8]/16 to-[#7C3AED]/14",
    "长奖励": "from-[#7C3AED]/18 to-[#FF4FD8]/10",
  };

  return (
    <div className="glass-card rounded-[28px] p-6 transition duration-200 hover:-translate-y-1 hover:scale-[1.02]">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentMap[title] ?? "from-white/12 to-white/5"} shadow-[0_0_30px_rgba(124,58,237,0.22)]`}
      >
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>
      <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/68">{description}</p>
    </div>
  );
}
