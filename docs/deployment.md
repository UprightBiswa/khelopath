# Production Setup

## Recommended Hosting

Use Vercel for the Next.js app.

Project root in Vercel:

```text
web
```

Build command:

```bash
npm run build
```

Install command:

```bash
npm install
```

## Environment Variables

Set these in Vercel Project Settings:

```text
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-5
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
```

Do not expose `DATABASE_URL` or `OPENAI_API_KEY` to the browser.

## Neon Database

The app uses Prisma with Neon PostgreSQL.

First-time setup:

```bash
cd web
npm install
npx prisma db push
npm run db:seed
```

`db:seed` inserts synthetic data only:

- demo athlete
- cycling sport
- Guwahati location
- sports centre
- opportunities
- application
- grievance

## Data Mode

If Neon is not ready, KheloPath falls back to local synthetic data so the demo remains usable. Once `DATABASE_URL` is set and tables exist, API routes and DB-backed pages read/write through Prisma.

## Render

Render is not required for this version because Next.js route handlers act as the backend. If Render is used later, host only an additional worker or API service there. Do not split the app into Vercel plus Render until there is a clear need.

## Production Notes

- `/` is the public athlete journey.
- `/admin/login` is a demo authority login screen.
- `/admin` is the admin console.
- Government integrations are mocked.
- Identity, OTP, Aadhaar, PAN, payments, and document verification are not implemented.

