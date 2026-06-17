import db from './summary.db.js';

export const getSummary = async (userId) => {
  const [summary] = await db.getSummary(userId);

  return {
    income: Number(summary.income),
    expenses: Number(summary.expenses),
    balance: Number(summary.income) - Number(summary.expenses),
  };
};
