const express = require('express');
const api = require('./app/src/api/api');
let app = express();

app.get('/', (req, res) => {
  res.sendFile('./app/src/pages/login/login.html');
});

app.listen(3000);