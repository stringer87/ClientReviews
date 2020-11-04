const db = require('../');
const { ClientReview } = require('../ClientReviewModel');
const { Client } = require('../ClientInfoModel');
const updateReview = (req, res) => {
  const id = req.body.params.id;
  const update = req.body.params.update;
  console.log(id, update)
  ClientReview.findOneAndUpdate({ _id: id }, update, { new: true }, (err, doc) => {
    if (err) {
      res.status(200).send(err);
    } else {
      Client.findOneAndUpdate({ _id: id }, { rating: update.rating }, { new: true }, (err, client) => {
        if (err) {
          res.status(200).send(err);
        }
      })
      res.status(204).send(doc);
    }
  })
}

module.exports = {
  updateReview,
}