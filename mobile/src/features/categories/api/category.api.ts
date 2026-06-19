import { api } from '@/api/client';

export const getCategory = async () => {
  const res = await api.get('/categories', { skipAuth: true });
  return res.data;
};