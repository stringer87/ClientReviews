const { RecentClients } = require('../RecentClientModel');

const deleteRecent = (req, res) => {
  const id = req.query.id;
  RecentClients.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send(result);
    }
  })
}

module.exports = {
  deleteRecent
}