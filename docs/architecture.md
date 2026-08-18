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

## What Is Mocked Initially

- Government identity
- Government applications
- Official scheme records
- Document upload and verification
- Authority assignment
- Notifications

All records are synthetic and clearly labelled.

