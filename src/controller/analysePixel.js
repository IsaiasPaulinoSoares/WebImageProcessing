const path = require('path')
const getColors = require('get-image-colors')

var getPixels = require('get-pixels');

module.exports = {
    index(req, res) {
        getPixels(path.join(__dirname, '../../uploads/amarelo.jpg'), function(err, pixels) {
            if (err) {
                res.json(err);
                return;
            } else {
                res.json(pixels.data[0]);
            }
        });
        //     getColors(path.join(__dirname, 'amarelo.jpg')).then(colors => {
        //         return res.json(colors[0].alpha(1))
        //     })
    }
}