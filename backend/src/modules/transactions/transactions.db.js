import { sql } from '../../config/db.js';

const createTransaction = (data, userId) => {
  return sql`
    INSERT INTO transactions(
    title,
    amount,
    type,
    category_id,
    user_id
    )
    VALUES(
    ${data.title},
     ${data.amount},
      ${data.type},
      ${data.category_id},
     ${userId}
    )
    RETURNING *
    `;
};

const getTransactions = (userId) => {
  return sql`
    SELECT * FROM  transactions
    WHERE user_id =${userId}
    ORDER BY created_at DESC
    `;
};

const removeTransaction = (id, userId) => {
  return sql`
    DELETE FROM transactions
    WHERE id = ${id} AND user_id = ${userId}
    RETURNING *
  `;
};

const updateTransaction = (id, data, userId) => {
  return sql`
    UPDATE transactions
    SET
      title = ${data.title},
      amount = ${data.amount},
      type = ${data.type},
      category_id = ${data.category_id}
    WHERE id = ${id} AND user_id = ${userId}
    RETURNING *
  `;
};

export default {
  createTransaction,
  getTransactions,
  removeTransaction,
  updateTransaction,
};
