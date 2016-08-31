var fs = require('fs');
var data = fs.readFileSync('./puzzle.txt').toString();
var strings = data.toString().split(/\n/g);

// 31 is too low, 274 is too high 
