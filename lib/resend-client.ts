import { Resend } from "resend";

let resendSingleton: Resend | null = null;

/** Jedna Resend instanca za cijelu aplikaciju (isti API ključ). */
export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;
  if (!resendSingleton) {
    resendSingleton = new Resend(key);
  }
  return resendSingleton;
}
