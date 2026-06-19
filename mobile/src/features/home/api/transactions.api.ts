import { api } from '@/api/client';
import { TransactionPayload } from '../types';

const addTransactions = async (payload: TransactionPayload, token: string | null) => {
  const res = await api.post('/transactions', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { addTransactions };
