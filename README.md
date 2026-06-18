# Expenser

A full-stack expense tracking app built with React Native (Expo) and Node.js (Express).

## Tech Stack

- **Mobile:** Expo SDK 56, React Native 0.85, TypeScript 6, Expo Router
- **Backend:** Node.js, Express 5, ES modules
- **Database:** PostgreSQL (Neon serverless)
- **Auth:** Clerk (email/password with verification)
- **Forms:** react-hook-form + Zod
- **HTTP Client:** Axios

## Project Structure

```
expenser/
├── backend/              # Express API server
│   └── src/
│       ├── config/       # DB connection, env
│       ├── db/schemas/   # SQL table definitions
│       ├── modules/      # Feature modules (transactions, categories, summary)
│       ├── app.js        # Express app setup
│       └── server.js     # Entry point
├── mobile/               # Expo React Native app
│   └── src/
│       ├── api/          # API client + endpoint calls
│       ├── app/          # Expo Router routes & layouts
│       ├── features/     # Feature modules (auth, home)
│       └── shared/       # Reusable UI components
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | List all categories |
| GET | `/api/transactions` | List transactions |
| POST | `/api/transactions` | Create a transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |
| GET | `/api/summary` | Get income/expense/balance summary |

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (or a Neon database URL)
- Expo CLI (`npx expo`)
- Clerk account (free tier)

### Backend

```bash
cd backend
cp .env.example .env   # or create .env with DATABASE_URL and Clerk keys
npm install
npm run dev
```

### Mobile

```bash
cd mobile
cp .env.example .env   # or create .env with EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
npm install
npx expo start
```

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `DATABASE_URL` | PostgreSQL connection string |
| `CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |

### Mobile (`mobile/.env`)

| Variable | Description |
|----------|-------------|
| `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |

## Features

- **Authentication** — Sign up, sign in, email verification via Clerk
- **Dashboard** — View balance, recent transactions
- **Transactions** — Add income/expense entries with category selection
- **Categories** — Predefined spending categories with icons
- **Summary** — Real-time income/expense/balance calculation
