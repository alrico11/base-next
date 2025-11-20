import { zBaseResponse, zPasswordSchema, zPhone } from "@/@constant";
import { z } from "zod";

export const zAuthLoginArgs = z.object({
  email: z
    .string()
    .email({ message: "Please enter the correct and appropriate email" })
    .optional(),
  password: z.string().optional(),
  firebaseIdToken: z.string(),
});

export const zAuthLoginRes = zBaseResponse.extend({
  data: z.object({
    id: z.string(),
    token: z.string(),
    name: z.string(),
    email: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export const zAuthRegisterArgs = z.object({
  name: z.string().optional(),
  phone: zPhone.optional(),
  email: z.string().email({ message: "Please enter the correct and appropriate email" }).optional(),
  password: zPasswordSchema.optional(),
  firebaseIdToken: z.string(),
});

export const zAuthRegisterRes = zAuthLoginRes

export const zAuthForgotPasswordArgs = z.object({
  email: z.string().email(),
});

export const zAuthCreateNewPasswordArgs = z.object({
  password: zPasswordSchema,
  confirmPassword: zPasswordSchema
})