CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,

  title TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,

  type TEXT NOT NULL CHECK (type IN ('income', 'expenses')),

  category_id INT REFERENCES categories(id) ON DELETE SET NULL,

  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  created_at TIMESTAMP DEFAULT NOW()
);