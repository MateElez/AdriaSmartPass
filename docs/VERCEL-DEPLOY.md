# Vercel deployment checklist

Email-only contact flow (`POST /api/contact` → Resend). **No database.**

## Required environment variables (production)

| Variable | Role |
|----------|------|
| `RESEND_API_KEY` | Resend API key from the Resend dashboard. |
| `RESEND_FROM_EMAIL` | Verified sender (e.g. `Name <noreply@yourdomain.com>`). **Must be on a domain verified in Resend.** |
| `LEAD_NOTIFY_EMAIL` *or* `NOTIFY_OWNER_EMAIL` | Inbox that receives new-lead notifications. Prefer `LEAD_NOTIFY_EMAIL`; if unset, `NOTIFY_OWNER_EMAIL` is used. |

## If something is missing

| Missing | What happens |
|---------|----------------|
| `RESEND_API_KEY` | No Resend client; **no emails sent**. API still returns success when the form payload is valid. |
| `RESEND_FROM_EMAIL` | No verified `from` address; **no emails sent**. |
| Both `LEAD_NOTIFY_EMAIL` and `NOTIFY_OWNER_EMAIL` empty | **Owner notification skipped**; user confirmation may still send if API key + from are set. |
| Resend domain / from not verified | Resend may reject sends; check the Resend dashboard logs. |

## Resend verification

- Add and verify your sending domain in Resend.
- Use a `RESEND_FROM_EMAIL` identity on that domain.
- Do not use placeholder domains in production.

## Optional

- None of the above are required for the **app to boot**; missing mail config only skips sending (no crash).

## Do not set (not used by this project)

- `DATABASE_URL`, `DIRECT_URL`, Prisma-related variables  
- `JWT_SECRET`, `ADMIN_*`  

There is no admin panel or database in the current codebase.
