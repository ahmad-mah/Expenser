import axios from 'axios';
import { getAuthToken } from './tokenProvider';

declare module 'axios' {
  interface AxiosRequestConfig {
    skipAuth?: boolean;
  }
}

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  if (config.skipAuth) {
    return config;
  }

  const token = await getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});