const db = require('../');
const { Client } = require('../ClientInfoModel');
const { RecentClients } = require('../RecentClientModel');
const { ClientReview } = require('../ClientReviewModel');
const getClients = (req, res) => {
  Client.find({}).sort('firstName')
    .then((clients) => {
      res.status(200).send(clients)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const getClient = (req, res) => {
  const id = parseInt(req.query.id)
  Client.find({ _id: id })
    .then((client) => {
      res.status(200).send(client)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}
const getRecentClients = (req, res) => {
  RecentClients.find({}).sort('date')
    .then((clients) => {
      res.status(200).send(clients);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
}

const getReviews = (req, res) => {
  const id = req.query.id;
  ClientReview.find({ _id: id })
    .then((review) => {
      res.status(200).send(review)
    })
    .catch((err) => {
      res.status(400).send(err);
    })
}

module.exports = { getClients, getClient, getRecentClients, getReviews }