# UI Architecture

## Route Map

| Journey Step | Route |
| --- | --- |
| Landing | `/` |
| Onboarding | `/onboarding` |
| Results | `/opportunities` |
| Opportunity details | `/opportunities/[id]` |
| Eligibility | `/eligibility` |
| Demo application | `/apply` |
| Application tracking | `/track` |
| Grievance reporting | `/grievance` |
| Grievance confirmation | `/grievance/created` |
| Authority console | `/authority` |

## Component Strategy

- `Shell`: shared page frame, prototype badge, and header.
- `StepHeader`: consistent journey title area.
- `OpportunityCard`: reusable result item.
- `ButtonLink`: consistent primary and secondary actions.
- `lib/demo-data.ts`: synthetic data source until Neon is connected.

## Implementation Order

1. Match Stitch visual design tokens.
2. Polish mobile layouts and spacing.
3. Add form state for onboarding.
4. Replace synthetic reads with API calls.
5. Connect Prisma and Neon.
6. Add OpenAI-powered route handlers.

