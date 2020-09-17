const path = require('path')
const connection = require('../database/connection')
    //const getColors = require('get-image-colors')

var getPixels = require('get-pixels');
var ongs = 0;
module.exports = {
    async index(req, res) {
        //     getColors(path.join(__dirname, 'amarelo.jpg')).then(colors => {
        //         return res.json(colors[0].alpha(1))
        //     })
        await getPixels(path.join(__dirname, '../../uploads/amarelo.jpg'), async function(err, pixels) {
            if (err) {
                res.json(err);
                return;
            } else {
                for (var i = 0; i <= pixels.length - 1; i += 4) {
                    var R = pixels.data[0],
                        G = pixels.data[1],
                        B = pixels.data[2]
                    ongs = await connection('yellow')
                        .select('*')
                        .where('R', '>', R - 20)
                        .andWhere('R', '<', R + 20)
                        .andWhere('G', '>', G - 50)
                        .andWhere('G', '<', G + 50)
                        .andWhere('B', '>', B - 100)
                        .andWhere('B', '<', B + 100);
                }
                res.json(ongs);
            }
        });


        // return res.json(ongs)


    }
}