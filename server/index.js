const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const { getClients, getClient } = require('../database/controller');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/api/clients', (req, res) => {
  getClients(req, res);
})

app.get('/api/client', (req, res) => {
  getClient(req, res);
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})