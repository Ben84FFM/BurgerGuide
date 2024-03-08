import Review from '../models/Reviews.js';
import asyncHandler from '../utils/asyncHandler.js';
// import ErrorResponse from '../utils/ErrorResponse.js';

export const createReview = asyncHandler(async (req, res, next) => {
  const {
    comment,
    cleanliness,
    taste,
    service,
    priceValue,
    ambience,
    waitTime,
    locationRating,
  } = req.body;
  const { storeId } = req.params;

  const review = await Review.create({
    store: storeId,
    user: req.uid,
    comment,
    cleanliness,
    taste,
    service,
    priceValue,
    ambience,
    waitTime,
    locationRating,
  });

  res.status(201).json({
    success: true,
    data: review,
  });
});