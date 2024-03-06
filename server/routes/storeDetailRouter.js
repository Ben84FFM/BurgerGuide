import { Router } from 'express';
import * as detailStoreController from '../controllers/detailStore.js';

const detailStoreRouter = Router();

detailStoreRouter.get('/:id', detailStoreController.getDetailStoreById);

export default detailStoreRouter;