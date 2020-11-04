const mongoose = require('mongoose');
const { Schema } = mongoose;

const recentClientsSchema = new Schema({
  _id: Number,
  fullName: String,
  avatar: String,
  service: String,
  date: String
});

const RecentClients = mongoose.model('RecentClients', recentClientsSchema)
module.exports = { RecentClients };