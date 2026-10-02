import { z } from "zod";
import { hiringRoles, programOptions } from "@/content/site-content";

const phoneRegex = /^[+]?[\d\s()-]{8,20}$/;

export const admissionSchema = z.object({
  parentName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().regex(phoneRegex),
  childName: z.string().trim().min(1),
  childDob: z.string().min(1),
  program: z.enum(programOptions.map((p) => p.value) as [string, ...string[]]),
  contactMethod: z.enum(["email", "phone", "whatsapp"]),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().optional(), // honeypot
});

export const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().regex(phoneRegex).optional().or(z.literal("")),
  subject: z.string().trim().min(2),
  message: z.string().trim().min(5).max(2000),
  website: z.string().optional(),
});

export const hiringSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().regex(phoneRegex),
  role: z.enum(hiringRoles as unknown as [string, ...string[]]),
  education: z.string().trim().min(2),
  experience: z.string().trim().min(2),
  certifications: z.string().trim().optional().or(z.literal("")),
  availability: z.string().trim().min(1),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().optional(),
});

export type AdmissionInput = z.infer<typeof admissionSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type HiringInput = z.infer<typeof hiringSchema>;

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
