import { TAuthLoginRes } from "@/client/auth"
import { atom } from "jotai"

export type TAuth = TAuthLoginRes['data']
export const atomAuth = atom<TAuth | undefined>