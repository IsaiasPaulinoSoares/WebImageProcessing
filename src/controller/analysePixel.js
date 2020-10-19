const path = require('path')
const connection = require('../database/connection')

var getPixels = require('get-pixels');
var colorYellow = 0, colorRed = 0, colorPurple = 0, colorOrange = 0, colorGreen = 0;
var colorSum = [],
    colorsName = ['yellow', 'red', 'purple', 'orange', 'green'];

module.exports = {
    async index(req, res) {
        await getPixels(path.join(__dirname, '../../uploads/amarelo.jpg'), async function (err, pixels) {
            if (err) {
                res.json(err);
                return;
            } else {
                for (var i = 0; i <= 7; i += 4) {
                    var R = pixels.data[i],
                        G = pixels.data[i + 1],
                        B = pixels.data[i + 2];
                    teste(R, G, B)
                }
            }
        });
    }
}
async function teste(R, G, B) {
    colorYellow = await connection('yellow')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 50, G + 50])
        .whereBetween('B', [B - 100, B + 100]);
    colorSum.push(colorYellow.length)

    colorRed = await connection('red')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.push(colorRed.length)

    colorPurple = await connection('purple')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.push(colorPurple.length)

    colorOrange = await connection('orange')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.push(colorOrange.length)

    colorGreen = await connection('green')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.push(colorGreen.length)

    var maior = Math.max.apply(null, colorSum);
    var casa = 0;
    for (var i = 0; i <= colorSum.length - 1; i++) {
        if (colorSum[i] == maior)
            casa = i;
    }
    console.log(colorsName[casa])
}