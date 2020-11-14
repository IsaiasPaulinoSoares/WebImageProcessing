const express = require('express');
const analysePixel = require('./controller/analysePixel');
const routes = express.Router();

routes.get('/', analysePixel.index)

module.exports = routes;