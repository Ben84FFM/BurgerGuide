import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
});

const restaurantSchema = new mongoose.Schema({
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
  images: String,
  cleanliness: Number,
  price: Number,
  ambiance: Number,
  service: Number,
  accessibility: Number,
  reviews: [reviewSchema],
});

restaurantSchema.index({ location: '2dsphere' });

export default mongoose.model('Restaurant', restaurantSchema);