# Autism School Website (Bangalore)

Calm, accessible Next.js website for an autism school/support centre in Bangalore.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- `next-intl` (English, Kannada, Hindi)
- React Hook Form + Zod
- Resend email (forms → `sthaviro@gmail.com`)
- Playwright + axe + Vitest

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

### Email

Without `RESEND_API_KEY`, form submissions are logged to the server console (dev fallback) and still return success. With a Resend key, messages are emailed to `sthaviro@gmail.com`.

### Placeholders

Update [`src/lib/config/site.ts`](src/lib/config/site.ts) before launch:

- School name, founder name, address
- Phone, WhatsApp, email, visiting hours

Do not invent certifications, fees, or clinical claims.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run test` | Unit tests (Vitest) |
| `npm run test:e2e:install` | Install Playwright browser |
| `npm run test:e2e` | End-to-end + accessibility checks |

## Scope

**Included:** Phase 1 public pages + Phase 2 (Gallery, Resources/blog, Visual Schedules, Social Stories, KN/HI scaffolding).

**Not included:** Parent/therapist/HR portals, AI, OCR, medical document storage.
