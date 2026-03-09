# UFIT AI Wellness Membership Demo

一个面向客户演示的 UFIT AI 健康会员平台 Demo，核心定位不是传统 MLM，而是 `AI 健康 + 会员体验 + 推荐增长 + 可视化 AI 工具`。

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- OpenAI API ready via `/api/ai-coach`
- Supabase-ready environment variables for future auth and database wiring
- Vercel-friendly project structure

## Included Pages

- `/` 首页，含 Hero、AI Chat、AI 工具展示、产品和推荐增长
- `/ai-tools` AI 工具总览页
- `/ai-coach` 全页 AI 健康聊天页
- `/dashboard` 会员仪表盘
- `/referral` 推荐网络页
- `/recommendation` 产品推荐页
- `/login` 登录 / 注册页

## Demo Notes

- 所有页面都基于 mock data，可直接用于客户演示。
- 已加入 5 个可视化 AI 工具模块：
  - AI 每日计划
  - AI 餐单规划
  - AI 训练生成器
  - AI 产品匹配
  - AI 每周洞察
- 已支持 demo persona 切换：`Sarah Lim`、`Jason Tan`、`Aina`。
- 每个 AI 工具模块都会模拟 1.2 秒生成过程，再显示不同人设下的假数据结果。
- AI route 在有 `OPENAI_API_KEY` 时走真实接口；没有时自动回退到本地 mock 响应。
- Supabase 变量已预留，表结构建议在 [src/lib/supabase-schema.sql](/Users/rms/Desktop/Ai%20Project/Ufit/src/lib/supabase-schema.sql)。

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create your env file:

```bash
cp .env.example .env.local
```

3. Add your OpenAI key if you want live AI responses:

```env
OPENAI_API_KEY=your_key_here
```

4. Run the app:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
OPENAI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DEMO_LOCKDOWN=on
```

- `DEMO_LOCKDOWN=on` 时，全站访客会被重定向到关闭页。
- 需要重新开放时，把 `DEMO_LOCKDOWN` 改成 `off` 并重新部署。

## AI Fallback

- 有 `OPENAI_API_KEY` 时，`/api/ai-coach` 会请求真实 AI 响应。
- 没有 key 时，会用本地关键词规则返回健康建议、产品推荐和 CTA。
- 所有输出都限制在生活方式支持和日常健康语气内，不做诊断或治疗承诺。

## AI Tools Demo

- AI 工具 mock 数据位于 [src/data/mock-ai-tools.ts](/Users/rms/Desktop/Ai%20Project/Ufit/src/data/mock-ai-tools.ts)。
- 5 个工具组件位于 [src/components/ai-tools](/Users/rms/Desktop/Ai%20Project/Ufit/src/components/ai-tools)。
- 默认演示人设是 `Jason Tan`，更适合现场展示久站疲劳、恢复、产品匹配和每周洞察。

## Deploying To Vercel

1. Import the repository into Vercel.
2. Add the environment variables from `.env.example`.
3. Deploy with the default Next.js settings.
4. Add Supabase credentials later when you are ready to replace the mock auth and data layers.

## Suggested Next Steps

- Connect Supabase auth for real member login/register
- Replace mock dashboard data with Supabase tables
- Store AI interactions in `wellness_logs`
- Add real product catalog and checkout flow
- Expand referral tracking beyond the current demo metrics
