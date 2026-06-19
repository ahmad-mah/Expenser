import db from './transactions.db.js';

const getAll = async (userId) => {
  const result = await db.getTransactions(userId);
  return result;
};

const create = async (data, userId) => {
  // 1. validation (business-level, not schema-level)
  if (!data.title) throw new Error('Title is required');
  if (!data.amount || data.amount <= 0) throw new Error('Invalid amount');
  if (!data.type) throw new Error('Type is required');

  // 2. enforce allowed types (business rule)
  if (!['income', 'expenses'].includes(data.type)) {
    throw new Error('Invalid transaction type');
  }

  const result = await db.createTransaction(data, userId);
  return result;
};

const update = async (id, data, userId) => {
  const updated = await db.updateTransaction(id, data, userId);
  if (!updated || updated.length === 0) {
    throw new Error('Transaction not found or not authorized');
  }

  return updated[0];
};

const remove = async (id, userId) => {
  const deleted = await db.removeTransaction(id, userId);

  if (!deleted || deleted.length === 0) {
    throw new Error('Transaction not found or not authorized');
  }

  return deleted[0];
};

export default { getAll, create, update, remove };
