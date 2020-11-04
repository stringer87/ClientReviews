const db = require('../');
const Client = require('../ClientInfoModel');

const getClients = (req, res) => {
  Client.find({})
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

module.exports = { getClients, getClient }