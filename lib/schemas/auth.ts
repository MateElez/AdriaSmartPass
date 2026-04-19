import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.string().trim().email("Unesite valjanu e-mail adresu"),
  password: z.string().min(8, "Lozinka je obavezna")
});

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
