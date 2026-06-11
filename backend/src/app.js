import express from 'express';
import transactionRoutes from './modules/transactions/transactions.routes.js';
import categoryRoutes from './modules/categories/categories.routes.js';
import summaryRoutes from './modules/summary/summary.routes.js';

const app = express();

app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/summary', summaryRoutes);

export default app;
