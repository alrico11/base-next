import { z } from "zod"
import { zCreateDeviceArgs, zCreateDeviceResponse, zRegisterFcmArgs, zRegisterFcmResponse } from "../validation"

export type TCreateDeviceArgs = z.infer<typeof zCreateDeviceArgs>
export type TCreateDeviceResponse = z.infer<typeof zCreateDeviceResponse>
export type TRegisterFcmArgs = z.infer<typeof zRegisterFcmArgs>
export type TRegisterFcmResponse = z.infer<typeof zRegisterFcmResponse>