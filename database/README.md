# Database

The target database is Neon PostgreSQL. Prisma in `web/prisma/schema.prisma` is the source of truth.

First-time setup:

```bash
cd web
npx prisma db push
npm run db:seed
```

Use the SQL files here as readable references. Use Prisma commands for the actual application database.

## Planned Tables

- users
- sports
- locations
- sports_centres
- opportunities
- eligibility_rules
- applications
- application_events
- grievances
- grievance_events
