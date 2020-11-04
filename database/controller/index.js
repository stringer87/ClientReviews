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

module.exports = { getClients }