import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
  _id: Number,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  rating: Number
});

const Client = mongoose.model('Client', clientSchema)
module.exports = {
  Client,
}