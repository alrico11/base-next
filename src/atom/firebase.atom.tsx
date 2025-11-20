import { atom } from 'jotai'

export interface NotificationPayload {
  notification?: {
    title?: string;
    body?: string;
    image?: string;
  };
  data?: { [key: string]: any };
  timestamp?: number;
}

export interface FirebaseNotificationState {
  token: string | null
  notificationPermission: NotificationPermission
  isInitialized: boolean
  lastMessage: NotificationPayload | null
  messageHistory: NotificationPayload[]
}

export const firebaseNotificationAtom = atom<FirebaseNotificationState>({
  token: null,
  notificationPermission: 'default',
  isInitialized: false,
  lastMessage: null,
  messageHistory: []
})