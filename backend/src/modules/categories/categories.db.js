import { sql } from '../../config/db.js';

const getCategories = () => {
  return;

  sql`
    SELECT * FROM categories
    ORDER BY name;
    `;
};

export default { getCategories };
