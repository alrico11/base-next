"use client";
import { firebaseNotificationAtom, NotificationPayload } from "@/atom";
import { useAtom } from "jotai";
import { BellIcon } from "lucide-react";
import { toast } from "sonner";


export const useFirebaseNotification = () => {
  const [firebaseState, setFirebaseState] = useAtom(firebaseNotificationAtom);
  const requestPermission = async (): Promise<boolean> => {
    try {
      if (!("Notification" in window)) return false;
      const permission = await Notification.requestPermission();
      return permission === "granted";
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return false;
    }
  };

  const parseData = (data: { [key: string]: string }) => {
    const parsed: { [key: string]: any } = {};
    Object.keys(data).forEach(key => {
      try {
        parsed[key] = JSON.parse(data[key]);
      } catch (e) {
        parsed[key] = data[key];
      }
    });
    return parsed;
  };

  const handleNewMessage = (payload: NotificationPayload) => {
    const processedPayload: NotificationPayload = {
      ...payload,
      data: payload.data ? parseData(payload.data as { [key: string]: string }) : undefined,
      timestamp: Date.now()
    };

    setFirebaseState(prev => ({
      ...prev,
      lastMessage: processedPayload,
      messageHistory: [processedPayload, ...prev.messageHistory.slice(0, 49)]
    }));

    if (payload.notification) {
      toast(payload.notification.title || "New Notification", {
        description: payload.notification.body || "",
        duration: 5000,
        icon: <BellIcon className="h-4 w-4 text-green-500" />,
      });
    }
  };

  return {
    token: firebaseState.token,
    notificationPermission: firebaseState.notificationPermission,
    isInitialized: firebaseState.isInitialized,
    lastMessage: firebaseState.lastMessage,
    messageHistory: firebaseState.messageHistory,
    requestPermission,
    handleNewMessage
  };
};