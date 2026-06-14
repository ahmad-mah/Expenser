import { Router } from 'express';
import categoryController from './categories.controller.js';

const router = Router();

router.get('/', categoryController.getAll);

export default router;
