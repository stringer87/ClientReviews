const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientReview = new Schema({
  _id: Number,
  fullName: String,
  rating: Number,
  totalReviews: Array,
  reviews: Array
})

const ClientReview = mongoose.model('ClientReview', clientReview)
module.exports = { ClientReview };