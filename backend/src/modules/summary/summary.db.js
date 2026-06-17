import { sql } from '../../config/db.js';

const getSummary = async (userId) => {
  return sql`
    SELECT 
    COALESCE (SUM(CASE WHEN type = 'income' THEN amount END),0) AS income,
    COALESCE (SUM(CASE WHEN type = 'expenses' THEN amount END),0) AS expenses
    FROM transactions
    WHERE user_id=${userId};
    `;
};

export default { getSummary };
