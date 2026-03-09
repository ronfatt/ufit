import Link from "next/link";
import { AuthPanel } from "@/components/auth-panel";
import { getSupabaseStatus } from "@/lib/supabase";

export default function LoginPage() {
  const supabaseStatus = getSupabaseStatus();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-7xl items-center px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] xl:p-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
            Member Access
          </div>
          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight">
            Welcome to UFIT AI
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Join the AI-powered wellness membership experience. This auth screen
            is demo-lightweight but structured to be easy to connect to
            Supabase.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "AI Wellness Coach on the homepage",
              "Personal dashboard with mock health score",
              "Referral commerce instead of traditional MLM screens",
              supabaseStatus.message,
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <AuthPanel />
          <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5">
            <div className="text-sm font-semibold text-slate-950">Demo Routes</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/dashboard" className="text-sky-700 hover:text-sky-800">
                Dashboard
              </Link>
              <Link href="/referral" className="text-sky-700 hover:text-sky-800">
                Referral
              </Link>
              <Link href="/recommendation" className="text-sky-700 hover:text-sky-800">
                Product Recommendation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
