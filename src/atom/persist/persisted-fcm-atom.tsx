import { atomWithStorage } from "jotai/utils"

export const persistedFcmTokenAtom = atomWithStorage<string | null>(
  "fcm_token",
  null
)
