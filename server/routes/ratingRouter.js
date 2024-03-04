import { Router } from 'express';
import * as ratingController from '../controllers/rating.js'; 
import verifyToken from '../middlewares/verifyToken.js';

const ratingRouter = Router();

ratingRouter.post('/submit-rating', verifyToken, ratingController.submitRating);

export default ratingRouter;