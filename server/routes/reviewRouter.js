import { Router } from 'express';
import * as reviewController from '../controllers/review.js';
import verifyToken from '../middlewares/verifyToken.js';

const reviewRouter = Router();

reviewRouter.post('/:storeId', verifyToken, reviewController.createReview);

export default reviewRouter;