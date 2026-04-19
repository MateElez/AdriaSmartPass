import { z } from "zod";
import { LEAD_STATUSES, PROJECT_TYPES } from "@/types/enums";

const phoneRegex = /^[+0-9()\-\s]{6,30}$/;

export const createLeadSchema = z.object({
  fullName: z.string().trim().min(2, "Ime i prezime je obavezno").max(120),
  email: z.string().trim().email("Neispravna e-mail adresa").max(140),
  phone: z
    .string()
    .trim()
    .min(6, "Broj telefona je obavezan")
    .max(30)
    .regex(phoneRegex, "Unesite ispravan broj telefona"),
  company: z.string().trim().max(140).optional().nullable(),
  projectType: z.enum(PROJECT_TYPES, { required_error: "Vrsta projekta je obavezna" }),
  message: z.string().trim().min(10, "Poruka je obavezna").max(2000),
  source: z.string().trim().max(80).optional()
});

export const updateLeadStatusSchema = z.object({
  status: z.enum(LEAD_STATUSES, { required_error: "Status leada je obavezan" })
});

export const leadListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(LEAD_STATUSES).optional(),
  projectType: z.enum(PROJECT_TYPES).optional()
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
export type UpdateLeadStatusInput = z.infer<typeof updateLeadStatusSchema>;
export type LeadListQueryInput = z.infer<typeof leadListQuerySchema>;
