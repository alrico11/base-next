import { z } from "zod";

export const SortEnum = ['asc', 'desc'] as const

export const zBaseResponse = z.object({
  message: z.string(),
})

export const zPagination = zBaseResponse.extend({
  page: z.number().optional().default(1),
  limit: z.number().optional().default(10),
  lastPage: z.number(),
  count: z.number()
})

export const zPaginationArgs = z.object({
  limit: z.number({ coerce: true }).default(10).optional(),
  page: z.number({ coerce: true }).default(1).optional(),
  search: z.string().optional(),
  sort: z.enum(SortEnum).default('desc').optional(),
})

export type TPaginationArgs = z.infer<typeof zPaginationArgs>

export const zPasswordSchema = z.string()
  .min(8)
  .regex(/^(?=.*[A-Z])(?=.*\d).+$/, {
    message: "Password must have 1 uppercase letter, 1 number"
  });

export const zPhone = z.string()
  .regex(/^08\d/, { message: "Phone number must start with 08" })
  .min(10, { message: "Phone number must be at least 10 digits" })
  .max(15, { message: "Phone number must be at most 15 digits" })

export const zDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "wajib diisi" })
export const zNumber = z.number({ coerce: true }).min(1, 'wajib diisi')
export const zISODateTime = z.string().datetime({ offset: true });
export const zTime = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use 24h time HH:MM");
