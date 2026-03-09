import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getSupabaseStatus } from "@/lib/supabase";

const sidebarItems = [
  { href: "/dashboard", label: "仪表盘" },
  { href: "/ai-coach", label: "AI 教练" },
  { href: "/recommendation", label: "产品推荐" },
  { href: "/referral", label: "推荐网络" },
  { href: "/referral", label: "奖励概览" },
  { href: "/login", label: "个人资料" },
];

export function DashboardShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const supabaseStatus = getSupabaseStatus();

  return (
    <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 pb-24 pt-10 sm:px-8 lg:px-10">
      <aside className="glass-card sticky top-6 hidden h-fit w-72 rounded-[2rem] p-6 lg:block">
        <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(124,58,237,0.92),rgba(0,194,255,0.55))] p-5 text-white shadow-[0_0_50px_rgba(124,58,237,0.24)]">
          <div className="text-xs uppercase tracking-[0.22em] text-sky-200">
            UFIT AI
          </div>
          <div className="mt-3 text-2xl font-semibold">{title}</div>
          <p className="mt-2 text-sm leading-6 text-white/80">
            更年轻、更像 AI 生活方式平台的会员体验。
          </p>
        </div>

        <nav className="mt-6 grid gap-2">
          {sidebarItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="glass-card mb-6 flex flex-col gap-4 rounded-[2rem] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.2em] text-white/45">
              健康会员工作台
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-white">
              欢迎回来，Sarah Lim
            </div>
            <div className="mt-3">
              <Badge className="border-[#B7FF3C]/30 bg-[#B7FF3C]/15 text-[#D8FF87] tracking-[0.16em]">
                Supabase {supabaseStatus.mode}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="搜索 AI 洞察或产品"
              className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#00C2FF]/60 focus:bg-white/10"
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF4FD8,#7C3AED)] text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,79,216,0.35)]">
              SL
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
