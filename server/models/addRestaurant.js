import mongoose from 'mongoose';

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
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
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
});


export default mongoose.model('addRestaurant', addRestaurantSchema);