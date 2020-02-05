const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const Feedback = 'http://localhost:3001/';

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


app.get('/entry', (req, res) => {
  axios.get('http://localhost:3001/entry')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.statusCode(500);
      res.end();
    })
})

app.get('/products/7', (req, res) => {
  axios.get('http://localhost:3007/products/7')
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.statusCode(500);
      res.end();
    })
})

app.listen(port, () => console.log(`Now listening on port ${port}`));