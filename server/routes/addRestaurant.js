import { Router } from 'express';
import * as restaurantController from '../controllers/restaurants.js';
import verifyToken from '../middlewares/verifyToken.js';

const restaurantsRouter = Router();

restaurantsRouter
  .route('/')
  .get(restaurantController.getAllRestaurants)
  .post(verifyToken, restaurantController.addRestaurant);

restaurantsRouter
  .route('/:id')
  .get(restaurantController.getSingleRestaurant)
  .put(verifyToken, restaurantController.updateRestaurant)
  .delete(verifyToken, restaurantController.deleteRestaurant);

export default restaurantsRouter;