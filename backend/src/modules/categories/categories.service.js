import db from './categories.db.js';

const getCategories = async () => {
  return db.getCategories();
};

export default { getCategories };
