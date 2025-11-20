import { zBaseResponse, zDeviceData } from "@/@constant";
import { z } from "zod";

export const zCreateDeviceArgs = z.object({
  fingerprint: z.string(),
  platform: z.string()
})
export const zCreateDeviceResponse = zBaseResponse.extend({
  data: zDeviceData
})

export const zRegisterFcmArgs = z.object({
  fcmToken: z.string()
})
export const zRegisterFcmResponse = zBaseResponse