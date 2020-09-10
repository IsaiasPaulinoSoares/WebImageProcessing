const express = require('express');
const path = require('path')
const getColors = require('get-image-colors')

var getPixels = require('get-pixels');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     getColors(path.join(__dirname, 'amarelo.jpg')).then(colors => {
//         return res.json(colors[0].alpha(1))
//     })
// });
routes.get('/', (req, res) => {

    getPixels(path.join(__dirname, 'amarelo.jpg'), function(err, pixels) {
        if (err) {
            res.json(err);
            return;
        } else {
            res.json(pixels.data);
        }
    });

})

module.exports = routes;