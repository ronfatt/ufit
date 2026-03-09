import Link from "next/link";

export default function ClosedPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-4xl items-center px-6 py-16 sm:px-8 lg:px-10">
      <div className="glass-card glow-border w-full rounded-[2.5rem] p-10 text-center text-white sm:p-14">
        <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[#FF4FD8]">
          演示已关闭
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
          当前演示暂不对外开放
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          这个 UFIT AI 演示站目前已进入关闭模式。如果你之后需要重新开放，只要把环境变量
          <span className="mx-1 font-semibold text-white">DEMO_LOCKDOWN</span>
          改成
          <span className="mx-1 font-semibold text-white">off</span>
          并重新部署即可。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/10 hover:text-white"
          >
            保持关闭页
          </Link>
        </div>
      </div>
    </div>
  );
}
