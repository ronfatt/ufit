create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  referral_code text unique not null,
  sponsor_id uuid references users(id),
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text not null,
  benefit_tags text[] not null default '{}',
  price numeric(10,2),
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists wellness_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  symptom text,
  goal text,
  ai_response jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists referrals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  referred_user_id uuid not null references users(id),
  status text not null,
  created_at timestamptz not null default now()
);

create table if not exists rewards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  amount numeric(10,2) not null,
  type text not null,
  status text not null,
  created_at timestamptz not null default now()
);
