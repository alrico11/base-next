import axios from "axios";
import { TCreateDeviceArgs, TCreateDeviceResponse, TRegisterFcmArgs, TRegisterFcmResponse } from "../type/device.types";

export const CreateDeviceFn = async (data: TCreateDeviceArgs): Promise<TCreateDeviceResponse> => {
  const res = await axios({
    url: 'device',
    method: 'post',
    data
  })
  return res.data
}
export const RegisterFcmFn = async (data: TRegisterFcmArgs): Promise<TRegisterFcmResponse> => {
  const res = await axios({
    url: 'device/fcm',
    method: 'post',
    data
  })
  return res.data
}