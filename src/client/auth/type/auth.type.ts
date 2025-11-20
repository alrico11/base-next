import { z } from "zod"
import { zAuthForgotPasswordArgs, zAuthLoginArgs, zAuthLoginRes, zAuthRegisterArgs, zAuthRegisterRes } from "../validation/auth.validation"
import { zBaseResponse } from "@/@constant"

export type TAuthLoginArgs = z.infer<typeof zAuthLoginArgs>
export type TAuthLoginRes = z.infer<typeof zAuthLoginRes>
export type TAuthLogoutRes = z.infer<typeof zBaseResponse>
export type TAuthRegisterArgs = z.infer<typeof zAuthRegisterArgs>
export type TAuthRegisterRes = z.infer<typeof zAuthRegisterRes>
export type TAuthForgotPasswordArgs = z.infer<typeof zAuthForgotPasswordArgs>
export type TAuthForgotPasswordRes = z.infer<typeof zBaseResponse>