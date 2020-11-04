const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
  _id: Number,
  avatar: String,
  firstName: String,
  lastName: String,
  fullName: String,
  phone: String,
  email: String,
  rating: Number
});

const Client = mongoose.model('Client', clientSchema)
module.exports = Client;