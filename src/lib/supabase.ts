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
    mode: configured ? "ready" : "mock",
    message: configured
      ? "Supabase environment variables detected. Ready to replace mock auth and data."
      : "Supabase environment variables are missing. The demo is running in mock mode.",
  };
}
