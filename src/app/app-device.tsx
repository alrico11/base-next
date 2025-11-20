"use client"
import { useDevice } from "@/client/device/hooks/use-device"
import { AppDialog } from "@/components/shared/app-dialog"
import axios from "axios"
import { ReactNode } from "react"
import { Toaster } from "sonner"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export function AppClient({ children }: { children: ReactNode }) {
  const _ = useDevice()
  return <>
    <Toaster position="top-right" richColors />
    {children}
    <AppDialog />
  </>
}
