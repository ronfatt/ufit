import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#membership", label: "Membership" },
  { href: "/recommendation", label: "Products" },
  { href: "/referral", label: "Referral" },
  { href: "/login", label: "Login" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-6 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/60 bg-white/65 px-5 py-4 shadow-[0_12px_40px_rgba(41,75,119,0.08)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
            UF
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-950">UFIT AI</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Wellness Membership
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
          </nav>
          <Link
            href="/ai-coach"
            className="inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Try AI Coach
          </Link>
        </div>
      </div>
    </header>
  );
}
