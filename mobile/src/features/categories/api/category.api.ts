import { api } from '@/api/client';

export const getCategory = async () => {
  const res = await api.get('/categories');
  return res.data;
};
