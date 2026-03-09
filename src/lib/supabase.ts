type SupabaseEnv = {
  url: string | null;
  anonKey: string | null;
};

export function getSupabaseEnv(): SupabaseEnv {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? null,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? null,
  };
}

export function getSupabaseStatus() {
  const env = getSupabaseEnv();
  const configured = Boolean(env.url && env.anonKey);

  return {
    configured,
    mode: configured ? "已就绪" : "模拟模式",
    message: configured
      ? "已检测到 Supabase 环境变量，后续可以直接替换模拟登录与模拟数据。"
      : "当前未配置 Supabase 环境变量，站点正在使用模拟模式演示。",
  };
}
