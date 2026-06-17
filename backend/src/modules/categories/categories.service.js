import db from './categories.db.js';

const getCategories = async () => {
  return await db.getCategories();
};

export default { getCategories };
