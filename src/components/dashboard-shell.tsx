import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getSupabaseStatus } from "@/lib/supabase";

const sidebarItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ai-coach", label: "AI Coach" },
  { href: "/recommendation", label: "Products" },
  { href: "/referral", label: "Referral Network" },
  { href: "/referral", label: "Rewards" },
  { href: "/login", label: "Profile" },
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
      <aside className="sticky top-6 hidden h-fit w-72 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur lg:block">
        <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
          <div className="text-xs uppercase tracking-[0.22em] text-sky-200">
            UFIT AI
          </div>
          <div className="mt-3 text-2xl font-semibold">{title}</div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            A modern wellness membership shell for client-facing demos.
          </p>
        </div>

        <nav className="mt-6 grid gap-2">
          {sidebarItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_50px_rgba(41,75,119,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Wellness Membership Workspace
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Welcome back, Sarah Lim
            </div>
            <div className="mt-3">
              <Badge className="tracking-[0.16em]">
                Supabase {supabaseStatus.mode}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Search AI insights or products"
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-300 focus:bg-white"
            />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              SL
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
