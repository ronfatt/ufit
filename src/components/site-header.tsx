import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/#features", label: "亮点" },
  { href: "/ai-tools", label: "AI 工具" },
  { href: "/#membership", label: "会员" },
  { href: "/recommendation", label: "产品" },
  { href: "/referral", label: "推荐网络" },
  { href: "/login", label: "登录" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-6 sm:px-8 lg:px-10">
      <div className="glass-card glow-border flex flex-col gap-4 rounded-[1.75rem] px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] text-sm font-semibold text-white shadow-[0_0_32px_rgba(124,58,237,0.55)]">
            UF
          </div>
          <div>
            <div className="text-lg font-semibold text-white">UFIT AI</div>
            <div className="text-xs tracking-[0.22em] text-white/45">
              健康会员平台
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          </nav>
          <Link
            href="/ai-coach"
            className="pulse-glow inline-flex rounded-full bg-[linear-gradient(135deg,#7C3AED,#00C2FF)] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            立即体验 AI
          </Link>
        </div>
      </div>
    </header>
  );
}
