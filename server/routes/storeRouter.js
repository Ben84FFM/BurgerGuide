import { Router } from 'express';
import * as storeController from '../controllers/store.js';
import verifyToken from '../middlewares/verifyToken.js';
// import detailStoreRouter from './storeDetailRouter.js';

const storeRouter = Router();

storeRouter.get('/', storeController.getStores);
storeRouter.post('/', verifyToken, storeController.createStore);
storeRouter.get('/search', storeController.searchStores);
// storeRouter.use('/detail', detailStoreRouter);

storeRouter.get('/:id', storeController.getStoreById);
storeRouter.put('/:id', verifyToken, storeController.updateStore);
storeRouter.delete('/:id', verifyToken, storeController.deleteStore);

export default storeRouter;


