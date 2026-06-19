import { api } from '@/api/client';
import { TransactionPayload } from '../types';

export const addTransactions = async (payload: TransactionPayload) => {
  const res = await api.post('/transactions', payload);
  return res.data;
};