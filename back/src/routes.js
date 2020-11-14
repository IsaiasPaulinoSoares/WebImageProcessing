const multer = require('multer')
const uploadConfig = require('./config/upload')

const express = require('express');
const analysePixel = require('./controller/analysePixel');
const reciveData = require('./controller/reciveData')

const routes = express.Router();

const upload = multer(uploadConfig);

routes.post('/', upload.array('images'),function(req, res){reciveData.index})
routes.get('/result',analysePixel.index)

module.exports = routes;