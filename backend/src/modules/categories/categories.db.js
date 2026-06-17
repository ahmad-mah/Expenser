import { sql } from '../../config/db.js';

const getCategories = async () => {
  return sql`
    SELECT * FROM categories
    ORDER BY name;
    `;
};

export default { getCategories };
