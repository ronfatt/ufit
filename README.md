# UFIT AI Wellness Membership Demo

A modern demo web app for UFIT that positions the brand as `AI Wellness + Membership + Referral Commerce`, not a traditional MLM dashboard.

## Stack

- Next.js App Router
- Tailwind CSS
- OpenAI API ready via `/api/ai-coach`
- Supabase-ready environment variables for future auth and database wiring
- Vercel-friendly project structure

## Included Pages

- `/` Homepage with AI Wellness Coach demo
- `/dashboard` Member Dashboard
- `/referral` Referral / Network page
- `/recommend` Product Recommendation page
- `/login` Login / Register page

## Demo Notes

- The UI is built around mock data so it can be shown immediately to clients.
- The AI route uses `OPENAI_API_KEY` when present.
- If no OpenAI key is set, the app falls back to a deterministic demo response so the showcase still works.
- Supabase variables are included in `.env.example`, but auth and database are intentionally not fully wired yet to keep the MVP fast.

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

## Suggested Next Steps

- Connect Supabase auth for real member login/register
- Replace mock dashboard data with Supabase tables
- Store AI interactions in `wellness_logs`
- Add real product catalog and checkout flow
- Expand referral tracking beyond the current demo metrics
