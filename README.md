# Adria SmartPass

Production-structured Next.js SaaS marketing site + lightweight CRM for a smart lock and access control installation company.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- React Hook Form + Zod
- Prisma ORM + PostgreSQL
- JWT session auth (secure cookie) for admin CRM

## Features

- Marketing pages: `/`, `/services`, `/products`, `/contact`
- Lead capture flow with full validation and rate limiting
- CRM dashboard at `/admin` with:
  - lead metrics
  - filters (status, project type)
  - status pipeline updates
  - lead detail modal
  - delete actions
- Protected APIs:
  - `POST /api/leads` (public)
  - `GET /api/leads` (protected + pagination)
  - `PATCH /api/leads/:id` (protected)
  - `DELETE /api/leads/:id` (protected)
- Auth routes:
  - `POST /api/auth/login`
  - `POST /api/auth/logout`
  - `GET /api/auth/me`

## Environment Setup

Copy `.env.example` to `.env` and configure:

```env
DATABASE_URL=
DIRECT_URL=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=
NEXT_PUBLIC_COMPANY_NAME=
```

Generate an admin password hash (bcrypt):

```bash
node -e "const b=require('bcryptjs'); b.hash('ChangeMe123!',10).then(console.log)"
```

## Local Development

```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Open:

- `http://localhost:3000`
- `http://localhost:3000/admin/login`

## Project Structure

```text
app/
  admin/
  api/
  contact/
  products/
  services/
components/
hooks/
lib/
prisma/
types/
```
