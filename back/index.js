// var array = [
//     { Rage: 1, city: 2 },
//     { age: 2, city: 1 }
// ];

const xlsxFile = require('read-excel-file/node');

xlsxFile('./uploads/purple.xlsx').then((rows) => {
    //console.log(rows[1][2]);
    todo = rows;
    var array = []
    for (var e = 198; e <= todo.length - 1; e++) {
        const R = todo[e][0],
            G = todo[e][1],
            B = todo[e][2]
        array.push({ R: R, G: G, B: B })
    }

    console.log(array.slice())
})