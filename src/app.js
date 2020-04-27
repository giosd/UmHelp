const express = require('express');
const routes = require('./Routes');
const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;

