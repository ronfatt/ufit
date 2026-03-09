import Link from "next/link";
import { AuthPanel } from "@/components/auth-panel";
import { getSupabaseStatus } from "@/lib/supabase";

export default function LoginPage() {
  const supabaseStatus = getSupabaseStatus();

  return (
    <div className="mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-7xl items-center px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card rounded-[2rem] p-8 text-white xl:p-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#00C2FF]">
            会员入口
          </div>
          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em]">
            欢迎来到 UFIT AI
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            这是一个年轻化的 AI 健康会员入口，不是传统登录页。当前保留演示流程，后续可以直接接入 Supabase 服务。
          </p>
          <div className="mt-8 grid gap-3">
            {[
              "首页先体验 AI 健康教练",
              "进入个人仪表盘查看健康分数",
              "推荐网络更像增长仪表盘",
              supabaseStatus.message,
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <AuthPanel />
          <div className="glass-card rounded-[1.5rem] p-5">
            <div className="text-sm font-semibold text-white">演示入口</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href="/dashboard" className="text-[#00C2FF] hover:text-white">
                仪表盘
              </Link>
              <Link href="/referral" className="text-[#00C2FF] hover:text-white">
                推荐网络
              </Link>
              <Link href="/recommendation" className="text-[#00C2FF] hover:text-white">
                产品推荐
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
