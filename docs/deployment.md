# Production Setup

## Recommended Hosting

Use Vercel for the Next.js app.

Project root in Vercel:

```text
web
```

Framework Preset:

```text
Next.js
```

Build command:

```bash
npm run build
```

Install command:

```bash
npm install
```

Output Directory:

```text
Leave empty / framework default
```

Do not set Output Directory to `public`. That setting is for static projects and causes this error after a Next.js build:

```text
No Output Directory named "public" found after the Build completed.
```

## Environment Variables

Set these in Vercel Project Settings:

```text
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-5
NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
ADMIN_EMAIL=admin@admin.com
ADMIN_PASSWORD=12345678
ADMIN_COOKIE_SECRET=use-a-long-random-value
```

Do not expose `DATABASE_URL` or `OPENAI_API_KEY` to the browser.

## Base URLs And APIs

The browser should call internal APIs with relative URLs:

```text
/api/opportunities
/api/applications
/api/grievances
```

Do not put `DATABASE_URL` in client code. `DATABASE_URL` is used only by server-side route handlers and Prisma.

`NEXT_PUBLIC_APP_URL` is only for display links or future absolute callback URLs. It is not required for normal API calls inside the app.

## Neon Database

The app uses Prisma with Neon PostgreSQL.

First-time setup:

```bash
cd web
npm install
npx prisma db push
npm run db:seed
```

`db:seed` inserts sample prototype data only:

- demo athlete
- cycling sport
- Guwahati location
- sports centre
- opportunities
- application
- grievance

## Data Mode

If Neon is not ready, KheloPath falls back to local sample data so the demo remains usable. Once `DATABASE_URL` is set and tables exist, API routes and DB-backed pages read/write through Prisma.

## Render

Render is not required for this version because Next.js route handlers act as the backend. If Render is used later, host only an additional worker or API service there. Do not split the app into Vercel plus Render until there is a clear need.

Recommended for this hackathon:

```text
Vercel: Next.js UI + API route handlers
Neon: PostgreSQL
OpenAI: AI extraction/explanation/classification
Render: not used
```

## Admin Domain

Keep the same Vercel app and use:

```text
https://your-domain.com/admin/login
```

If you want an admin subdomain later, add `admin.your-domain.com` in Vercel Domains and point it to the same project. The app route can still be `/admin/login`.

## Image Management

Vercel serverless functions cannot permanently save uploaded files into `public/` at runtime. For production uploads, use object storage such as Vercel Blob, S3, Cloudinary, or UploadThing.

For this prototype, admin opportunities use an image URL field. The app supports local images from `public/images/` and remote images from Unsplash.

## Production Notes

- `/` is the public athlete journey.
- `/admin/login` is a demo authority login screen.
- `/admin` is the admin console.
- Government integrations are mocked.
- Identity, OTP, Aadhaar, PAN, payments, and document verification are not implemented.
