import { z } from "zod";

export const zDeviceData = z.object({
  id: z.string(),
  fingerprint: z.string(),
  metadata: z.string(),
  fcmToken: z.string(),
  platform: z.string(),
  fcmTokenLastUpdate: z.string().date(),
  createdAt: z.string().date(),
  deletedAt: z.string().date(),
  token: z.string(),
  iat: z.string().date()
})