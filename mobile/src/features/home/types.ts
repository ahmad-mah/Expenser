export interface UserProfile {
  email: string;
}

export interface Summary {
  income: number;
  expenses: number;
  balance: number;
}

export interface TransactionForm {
  isIncome: boolean;
  amount: string;
  title: string;
  category: string | null;
}

export type TransactionPayload = {
  amount: number;
  title: string;
  type: string;
  category_id: string;
};
