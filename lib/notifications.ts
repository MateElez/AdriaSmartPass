import { PROJECT_TYPE_OPTIONS } from "@/lib/constants";
import { getResend } from "@/lib/resend-client";

/** Verified production sender — must match Resend domain setup for `adriasmartpass.com`. */
const RESEND_FROM = "Adria SmartPass <info@adriasmartpass.com>";

/** Minimal fields needed for outbound lead emails (contact intake payload). */
export type LeadEmailPayload = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string | null;
  projectType: string;
  message: string;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Prvo ime za pozdrav u mailu (npr. „Ivan” iz „Ivan Horvat”). */
function greetingFirstName(fullName: string): string {
  const part = fullName.trim().split(/\s+/)[0];
  return part ?? "";
}

function projectTypeLabel(projectType: string): string {
  const opt = PROJECT_TYPE_OPTIONS.find((o) => o.value === projectType);
  return opt?.label ?? projectType;
}

function getOwnerInbox(): string | null {
  return (
    process.env.LEAD_NOTIFY_EMAIL?.trim() ||
    process.env.NOTIFY_OWNER_EMAIL?.trim() ||
    null
  );
}

export async function notifyOwnerAboutLead(lead: LeadEmailPayload) {
  const resend = getResend();
  const to = getOwnerInbox();

  if (!resend || !to) {
    if (process.env.NODE_ENV === "development") {
      console.info("[lead-notification:owner skipped — missing Resend config or owner inbox env]", {
        id: lead.id,
        fullName: lead.fullName,
        email: lead.email,
        projectType: lead.projectType
      });
    }
    return;
  }

  const html = `
    <h2 style="margin:0 0 16px;font-size:18px;">Novi upit s web stranice</h2>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5;">
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Ime i prezime</strong></td><td>${escapeHtml(lead.fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>E-mail</strong></td><td>${escapeHtml(lead.email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Telefon</strong></td><td>${escapeHtml(lead.phone)}</td></tr>
      ${lead.company ? `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Tvrtka</strong></td><td>${escapeHtml(lead.company)}</td></tr>` : ""}
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Vrsta projekta</strong></td><td>${escapeHtml(projectTypeLabel(lead.projectType))}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top;"><strong>Poruka</strong></td><td>${escapeHtml(lead.message).replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  await resend.emails.send({
    from: RESEND_FROM,
    to,
    subject: `Novi upit: ${lead.fullName}`,
    html
  });
}

/** Automatski odgovor korisniku koji je poslao kontakt obrazac. */
export async function sendLeadSubmissionConfirmation(lead: LeadEmailPayload) {
  const resend = getResend();

  if (!resend) {
    if (process.env.NODE_ENV === "development") {
      console.info("[lead-notification:user skipped — missing RESEND_API_KEY]", {
        id: lead.id,
        email: lead.email
      });
    }
    return;
  }

  const first = greetingFirstName(lead.fullName);
  const greetingParagraph = first
    ? `<p>Bok ${escapeHtml(first)},</p>`
    : `<p>Bok,</p>`;

  const html = `
    ${greetingParagraph}
    <p>hvala na upitu — zaprimili smo vašu poruku i javit ćemo se najkasnije unutar 24h s konkretnim prijedlogom.</p>
    <p>Ako želite ubrzati proces, slobodno odgovorite na ovaj email s dodatnim informacijama (npr. slike vrata ili kratak opis objekta).</p>
    <br/>
    <p>Lijep pozdrav,<br/>
    Adria SmartPass</p>
  `;

  await resend.emails.send({
    from: RESEND_FROM,
    to: lead.email,
    subject: "Zaprimili smo vaš upit",
    html
  });
}
