import { TCreateDeviceResponse } from "@/client/device/type/device.types"
import { atom } from "jotai"

export type Device = TCreateDeviceResponse['data']
export const deviceAtom = atom<Device | undefined>(undefined)