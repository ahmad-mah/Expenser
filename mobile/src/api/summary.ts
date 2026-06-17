import { api } from './client';

export const getSummary = async () => {
  const res = await api.get('/summary');
  return res.data;
};
