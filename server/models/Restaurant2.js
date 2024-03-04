import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
});

const addRestaurantSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  phonenumbers: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  comments: {
    type: String,
  },
  images: {
    type: String,
  },
  cleanliness: {
    type: Number,
  },
  price: {
    type: Number,
  },
  ambiance: {
    type: Number,
  },
  service: {
    type: Number,
  },
  accessibility: {
    type: Number,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  },
  reviews: [reviewSchema], // Bewertungen als Array speichern
});

const RestaurantModel = mongoose.model('Restaurant', addRestaurantSchema);

export default RestaurantModel;