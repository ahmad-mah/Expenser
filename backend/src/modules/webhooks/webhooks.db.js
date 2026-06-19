import { sql } from '../../config/db.js';

const createUser = (userId, email, name) => {
  return sql`
    INSERT INTO users (id, email, name)
    VALUES (${userId}, ${email}, ${name})
    ON CONFLICT (id) DO NOTHING
  `;
};

export default {
  createUser,
};
