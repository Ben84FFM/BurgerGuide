import Restaurant from '../models/addRestaurant.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllRestaurants = asyncHandler(async (req, res, next) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

export const getSingleRestaurant = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findById(id);
  if (!restaurant) throw new ErrorResponse(`Restaurant ${id} does not exist`, 404);
  
  res.json(restaurant);
});

export const addRestaurant = asyncHandler(async (req, res, next) => {
  const { body, uid} = req;

  const newRestaurant = await Restaurant.create({ ...body, user: uid });
  const popultatedPost = await Restaurant.findById(newRestaurant._id);
  res.status(201).json(popultatedPost);
});

export const updateRestaurant = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  const found = await Restaurant.findById(id);
  if (!found) throw new ErrorResponse(`Restaurant ${id} does not exist`, 404);

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, body, {
    new: true,
  });
  res.json(updatedRestaurant);
});

export const deleteRestaurant = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const found = await Restaurant.findById(id);
  if (!found) throw new ErrorResponse(`Restaurant ${id} does not exist`, 404);

  await Restaurant.findByIdAndDelete(id);
  res.json({ success: `Restaurant ${id} was deleted` });
});