import axios from 'axios'
import { atomWithStorage } from 'jotai/utils'
import Cookie from 'js-cookie'
import { Device } from '../device.atom';

export const persistedDeviceAtom = atomWithStorage<Device | null | undefined>(
  'device',
  undefined,
  {
    setItem(key, value) {
      Cookie.set(key, JSON.stringify(value), {
        // expires: 365,
        // sameSite: "strict",
      });
      if (value) {
        axios.defaults.headers['x-client-id'] = value.id
        axios.defaults.headers['x-client-token'] = value.token
      }
    },
    removeItem(key) {
      Cookie.remove(key)
      delete axios.defaults.headers['x-client-id']
      delete axios.defaults.headers['x-client-token']
    },
    getItem(key, initialValue) {
      const cookieValue = Cookie.get(key);
      if (!cookieValue) return initialValue;
      try {
        const device = JSON.parse(cookieValue)
        axios.defaults.headers['x-client-id'] = device.id
        axios.defaults.headers['x-client-token'] = device.token
        return JSON.parse(cookieValue);
      } catch (e) {
        return initialValue;
      }
    },
  },
  { getOnInit: true }
)