import { Router } from 'express';
import transactionController from './transactions.controller.js';

const router = Router();

router.get('/', transactionController.getAll);
router.post('/', transactionController.create);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.remove);

export default router;
