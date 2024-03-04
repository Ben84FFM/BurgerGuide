const mongoose = require('mongoose');

const postratingSchema = new mongoose.Schema({
  cleanliness: Number,
  price: Number,
  ambiance: Number,
  service: Number,
  accessibility: Number,
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Postrating = mongoose.model('Postrating', postratingSchema);

module.exports = Postrating;