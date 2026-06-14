import { Router } from 'express';
import summaryController from './summary.controller.js';

const router = Router();

router.get('/', summaryController.getSummary);

export default router;
