const path = require('path')
const connection = require('../database/connection')

const fs = require('fs')

var getPixels = require('get-pixels')

var colorYellow = 0, colorRed = 0, colorPurple = 0, colorOrange = 0, colorGreen = 0;

var colorsName = ['yellow', 'red', 'purple', 'orange', 'green'];

var colorSum = [0, 0, 0, 0, 0]

var R = 0, G = 0, B = 0;

var pixelArray = [];
module.exports = {
    async index(req, res) {
        await getPixels(path.join(__dirname, '../../uploads/verde.png'), async function (err, pixels) {
            if (err) {
                res.json(err);
                return;
            } else {
                await pixels.data.map(async pixel => {
                    pixelArray.push(pixel)
                })
                //console.log(pixelArray)
                await searchOnDataBase();
                await takeColor();
                await deleteImage();
            }
        });
    }
}

function deleteImage(){
    fs.unlink(path.join(__dirname, '..','..','uploads','last.jpg'), function(err){
            if(err){
                throw err;	
            }else{}
    })
}

function takeColor(){
    var maior = Math.max.apply(null, colorSum);
    var casa = 0;
    for (var i = 0; i <= colorSum.length - 1; i++) {
        if (colorSum[i] == maior) {
            casa = i;
        }
    }
    console.log(colorsName[casa])
}

async function searchOnDataBase() {
    for(var i =0; i <= 500; i+=4){
        R = pixelArray[i]
        G = pixelArray[i + 1]
        B = pixelArray[i + 2];
        await teste(R, G, B)
    }
}

async function teste(R, G, B) {
    colorYellow = await connection('yellow')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 50, G + 50])
        .whereBetween('B', [B - 100, B + 100]);
    colorSum.splice(0, 1, Number(colorYellow.length) + colorSum[0])

    colorRed = await connection('red')
        .whereBetween('R', [R - 100, R + 100])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.splice(1, 1, Number(colorRed.length) + colorSum[1])

    colorPurple = await connection('purple')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.splice(2, 1, Number(colorPurple.length) + colorSum[2])

    colorOrange = await connection('orange')
        .whereBetween('R', [R - 20, R + 20])
        .whereBetween('G', [G - 20, G + 20])
        .whereBetween('B', [B - 20, B + 20]);
    colorSum.splice(3, 1, Number(colorOrange.length) + colorSum[3])

    colorGreen = await connection('green')
        .whereBetween('R', [R - 20, R + 60])
        .whereBetween('G', [G - 20, G + 80])
        .whereBetween('B', [B - 30, B + 20]);
    colorSum.splice(4, 1, Number(colorGreen.length) + colorSum[4])
}