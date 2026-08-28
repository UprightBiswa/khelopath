# Architecture

## Chosen Stack

```text
User
  |
  v
Vercel
  |
  v
Next.js UI + Route Handlers
  |
  +--> Prisma
  |      |
  |      v
  |   Neon PostgreSQL
  |
  +--> OpenAI API
```

## Why This Architecture

The prototype keeps deployment simple while still showing real backend thinking. Next.js handles the frontend and API layer. Neon stores persistent workflow data. Prisma manages schema and migrations. OpenAI powers intent extraction, eligibility explanations, and grievance classification.

## Data Flow

```text
Browser
  |
  v
Next.js page or client component
  |
  v
Next.js route handler
  |
  v
Prisma Client
  |
  v
Neon PostgreSQL
```

The database URL stays server-side. Browser code only calls application APIs such as `/api/opportunities`, `/api/applications`, and `/api/grievances`.

## What Is Mocked

- Government identity
- Government applications
- Official scheme records
- Document upload and verification
- Authority assignment
- Notifications

The app now supports seeded Neon data for opportunities, applications, and grievances. All records remain synthetic and clearly labelled.
