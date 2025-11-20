import { persistedFcmTokenAtom } from "@/atom/persist"
import { persistedDeviceAtom } from "@/atom/persist/persisted-device-atom"
import { CreateDeviceFn, RegisterFcmFn } from "@/client/device/fn/device.fn"
import { app } from "@/lib"
import fp from "@fingerprintjs/fingerprintjs"
import { getMessaging, getToken, onMessage } from "firebase/messaging"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { useFirebaseNotification } from "./use-firebase"
import { useImperativeQuery } from "./use-imperative"

export const useDevice = () => {
  const [device, setDevice] = useAtom(persistedDeviceAtom)
  const [fcmToken, setFcmToken] = useAtom(persistedFcmTokenAtom)
  const { requestPermission, handleNewMessage } = useFirebaseNotification()

  const { fetch: createDevice } = useImperativeQuery(
    (args) => ["Device", args],
    CreateDeviceFn
  )

  const { fetch: createFcm } = useImperativeQuery(
    (args) => ["Fcm", args],
    RegisterFcmFn
  )

  const registerDevice = async () => {
    try {
      const fpInstance = await fp.load()
      const fpResult = await fpInstance.get()
      const visitorId = fpResult.visitorId
      const result = await createDevice({
        fingerprint: visitorId,
        platform: "CLIENT_WEB",
      })
      setDevice(result.data)
      await getFcmToken(result.data)
    } catch (error) {
      console.error("registerDevice error:", error)
    }
  }

  const getFcmToken = async (deviceData?: any) => {
    try {
      const granted = await requestPermission()
      if (granted) {
        const messaging = getMessaging(app)
        const token = await getToken(messaging)
        if (!token) return
        setFcmToken(token)
        if ((deviceData || device) && token) {
          await createFcm({ fcmToken: token })
        }
        onMessage(messaging, handleNewMessage);
      }
    } catch (err) {
      console.error("getFcmToken error:", err)
    }
  }

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((reg) => console.log("✅ Service worker registered:", reg))
        .catch((err) =>
          console.error("❌ Service worker registration failed:", err)
        )
    }
    if (device && fcmToken) return
    registerDevice()
  }, [])

  return {
    device,
    fcmToken,
    registerDevice,
    getFcmToken,
  }
}
