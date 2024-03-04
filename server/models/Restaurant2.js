import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
});

const RestaurantSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [Number],
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  website: String,
  phonenumbers: [String],
  images: [String],
  cleanliness: [String],
  price: [String],
  ambiance: [Number],
  service: Number,
  accessibility: Number,
  reviews: [reviewSchema],
});

RestaurantSchema.index({ location: '2dsphere' });


export default mongoose.model('Restaurant', RestaurantSchema);