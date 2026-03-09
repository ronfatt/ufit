import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-7xl items-center px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] xl:p-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
            Member Access
          </div>
          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight">
            Join the UFIT AI membership.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Sign in to view your wellness dashboard, AI product suggestions,
            and referral rewards. This demo keeps auth lightweight and ready
            for Supabase integration.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "AI Wellness Coach on the homepage",
              "Personal dashboard with mock health score",
              "Referral commerce instead of traditional MLM screens",
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

        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(41,75,119,0.10)] backdrop-blur xl:p-10">
          <div className="grid grid-cols-2 gap-2 rounded-full bg-slate-100 p-1">
            <div className="rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm">
              Login
            </div>
            <div className="rounded-full px-4 py-3 text-center text-sm font-semibold text-slate-500">
              Register
            </div>
          </div>

          <form className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                placeholder="you@ufit.ai"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
              />
            </label>
            <button
              type="button"
              className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Continue to Dashboard
            </button>
          </form>

          <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5">
            <div className="text-sm font-semibold text-slate-950">
              Demo Routes
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/dashboard" className="text-sky-700 hover:text-sky-800">
                Dashboard
              </Link>
              <Link href="/referral" className="text-sky-700 hover:text-sky-800">
                Referral
              </Link>
              <Link href="/recommend" className="text-sky-700 hover:text-sky-800">
                Product Recommendation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
