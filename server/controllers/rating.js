import Postrating from '../models/Postrating.js'; 
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const submitRating = asyncHandler(async (req, res, next) => {
  const { cleanliness, price, ambiance, service, accessibility, restaurantId } = req.body;

  try {
    const newRating = await Postrating.create({
      cleanliness,
      price,
      ambiance,
      service,
      accessibility,
      restaurantId,
    });

    res.status(201).json(newRating);
  } catch (error) {
    console.error('Fehler beim Übermitteln der Bewertung:', error.message);

   
    return next(new ErrorResponse('Fehler beim Übermitteln der Bewertung', 500));
  }
});