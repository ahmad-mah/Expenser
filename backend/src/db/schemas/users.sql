Create TABLE IF NOT EXISTS  users(
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    name  TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);