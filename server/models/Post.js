import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  restaurant: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  ranking: {
    type: String,
    required: [true, 'Content is required'],
  },
  comment: {
    type: String,
    required: [true, 'comment is required'],
  },
  image_url: {
    type: String,
    default: 'https://via.placeholder.com',
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Post', postSchema);
