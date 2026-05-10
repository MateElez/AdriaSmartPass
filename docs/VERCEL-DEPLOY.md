# Vercel deployment checklist

Email-only contact flow (`POST /api/contact` → Resend). **No database.**

The sender address is fixed in application code: **`Adria Security Systems <info@adriasecuritysystems.com>`** (domain must be verified in Resend).

## Required environment variables (production)

| Variable | Role |
|----------|------|
| `RESEND_API_KEY` | Resend API key from the Resend dashboard. |
| `LEAD_NOTIFY_EMAIL` *or* `NOTIFY_OWNER_EMAIL` | Inbox that receives new-lead notifications. Prefer `LEAD_NOTIFY_EMAIL`; if unset, `NOTIFY_OWNER_EMAIL` is used. |

## If something is missing

| Missing | What happens |
|---------|----------------|
| `RESEND_API_KEY` | No Resend client; **no emails sent**. API still returns success when the form payload is valid. |
| Both `LEAD_NOTIFY_EMAIL` and `NOTIFY_OWNER_EMAIL` empty | **Owner notification skipped**; user confirmation may still send if `RESEND_API_KEY` is set. |
| Domain / sender not verified in Resend for `info@adriasecuritysystems.com` | Resend may reject sends; check the Resend dashboard logs. |

## Resend verification

- Verify **`adriasecuritysystems.com`** (or the domain used for `info@adriasecuritysystems.com`) in Resend.
- Do not use Resend sandbox-only senders in production.

## Optional

- None of the above are required for the **app to boot**; missing mail config only skips sending (no crash).

## Do not set (not used by this project)

- `DATABASE_URL`, `DIRECT_URL`, Prisma-related variables  
- `JWT_SECRET`, `ADMIN_*`  
- `RESEND_FROM_EMAIL` — sender is defined in code, not via env  

There is no admin panel or database in the current codebase.
