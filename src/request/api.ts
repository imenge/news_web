import { AxiosResponse } from 'axios';
import api from './index'

// 获取验证码
export const verificationCode = async (): Promise<any> => {
  const response: AxiosResponse = await api.post('/player/verificationCode/get');
  return response.data;
};

