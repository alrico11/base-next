import axios from 'axios';
import { atomWithStorage } from 'jotai/utils';
import Cookie from 'js-cookie';
import { TAuth } from '../auth.atom';


export const persistedAuthAtom = atomWithStorage<TAuth | undefined>(
  'AUTH',
  undefined,
  {
    setItem(key, value) {
      if (value === undefined) {
        delete axios.defaults.headers['Secret']
        return Cookie.remove(key)
      }
      Cookie.set(key, JSON.stringify(value), {
        expires: 90,
        sameSite: "strict",
      });
      if (value?.token) axios.defaults.headers['Authorization'] = `Bearer ${value.token}`
    },
    removeItem(key) {
      Cookie.remove(key)
      delete axios.defaults.headers['Authorization']
    },
    getItem(key, initialValue) {
      const cookieValue = Cookie.get(key);
      if (!cookieValue) return initialValue;
      try {
        const value = JSON.parse(cookieValue);
        if (value?.token) axios.defaults.headers['Authorization'] = `Bearer ${value.token}`
        return value
      } catch (e) {
        return initialValue;
      }
    },
  },
  { getOnInit: true }
)