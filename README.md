# KheloPath

A citizen-first prototype for discovering and navigating public sports opportunities in India.

KheloPath helps Indian athletes discover relevant public sports opportunities, understand eligibility, apply through a guided journey, and track or raise issues without having to navigate multiple confusing services.

## Prototype Scope

- Persona: 21-year-old amateur cyclist from Guwahati, Assam.
- Main journey: discover opportunity -> check eligibility -> understand documents -> submit demo application -> track status -> raise grievance.
- Data: synthetic only. No Aadhaar, PAN, OTP, payments, government credentials, or personal documents.
- Status: independent hackathon prototype, not an official government service.

## Stack

- Frontend and backend: Next.js App Router with TypeScript
- Styling: Tailwind CSS
- Database target: Neon PostgreSQL
- ORM target: Prisma
- AI target: OpenAI API
- Hosting target: Vercel

## Local Development

```bash
cd web
npm install
npm run dev
```

The first milestone is UI-first. Database and AI integrations will be connected after the complete journey works with synthetic data.

