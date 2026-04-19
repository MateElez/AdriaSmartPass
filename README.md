# Adria SmartPass

Next.js marketing site with **email-only** contact lead capture (Resend). **No database.**

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- React Hook Form + Zod
- Resend (transactional email)

## Features

- Marketing pages: `/`, `/services`, `/products`, `/contact`
- Contact form: `POST /api/contact` — rate limiting, validation, owner notification + user confirmation via Resend

## Environment

Copy `.env.example` to `.env`. Only Resend-related variables are used — see `.env.example` for the exact list.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy (Vercel)

See **[docs/VERCEL-DEPLOY.md](./docs/VERCEL-DEPLOY.md)** for required env vars and checklist.

## Project structure

```text
app/
  api/contact/
  contact/
  ...
components/
hooks/
lib/
types/
```
