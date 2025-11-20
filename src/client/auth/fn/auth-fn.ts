import axios from "axios"
import { TAuthForgotPasswordArgs, TAuthForgotPasswordRes, TAuthLoginArgs, TAuthLoginRes, TAuthLogoutRes, TAuthRegisterArgs, TAuthRegisterRes } from "../type"

export const AuthLoginFn = async (data: TAuthLoginArgs): Promise<TAuthLoginRes> => {
  const res = await axios({
    url: 'auth/login',
    method: 'post',
    data
  })
  return res.data
}

export const AuthLogoutFn = async (): Promise<TAuthLogoutRes> => {
  const res = await axios({
    url: 'auth/logout',
    method: 'post',
  })
  return res.data
}

export const AuthRegisterFn = async (data: TAuthRegisterArgs): Promise<TAuthRegisterRes> => {
  const res = await axios({
    url: 'auth/register',
    method: 'post',
    data
  })
  return res.data
}

export const AuthForgotPasswordFn = async (data: TAuthForgotPasswordArgs): Promise<TAuthForgotPasswordRes> => {
  const res = await axios({
    url: "auth/forgot-password",
    method: 'post',
    data
  })
  return res.data
}