# UFIT AI Wellness Membership Demo

A modern demo web app for UFIT that positions the brand as `AI Wellness + Membership + Referral Commerce`, not a traditional MLM dashboard.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- OpenAI API ready via `/api/ai-coach`
- Supabase-ready environment variables for future auth and database wiring
- Vercel-friendly project structure

## Included Pages

- `/` Homepage with AI Wellness Coach demo
- `/ai-coach` Full AI wellness chat page
- `/dashboard` Member Dashboard
- `/referral` Referral / Network page
- `/recommendation` Product Recommendation page
- `/login` Login / Register page

## Demo Notes

- The UI is built around mock data so it can be shown immediately to clients.
- The AI route uses `OPENAI_API_KEY` when present.
- If no OpenAI key is set, the app falls back to a deterministic demo response so the showcase still works.
- Supabase variables are included in `.env.example`, but auth and database are intentionally not fully wired yet to keep the MVP fast.
- Suggested table schema is included in [src/lib/supabase-schema.sql](/Users/rms/Desktop/Ai%20Project/Ufit/src/lib/supabase-schema.sql).

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
```

## AI Fallback

- With `OPENAI_API_KEY`, the app calls the local API route and requests a structured wellness response.
- Without `OPENAI_API_KEY`, the API route uses predefined keyword-based responses for demo stability.
- The assistant is intentionally limited to wellness guidance and product support language, not diagnosis.

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
