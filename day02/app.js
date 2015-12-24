// Bring in the puzzle data
var fs = require('fs');
var data = fs.readFileSync('./puzzle.txt');

// Split the data at new line, create an array
data = data.toString().split(/\n/g);
var array = [];

// Take each boxes dimensions, split at 'X' and make an array of arrays
for (var i = 0; i < data.length; i++) {
  var dimensions = data[i].split('x');
  array.push(dimensions);
}
// console.log(array);

// Find the Surface Area
var surfaceAreaArray = [];
for (var i = 0; i < array.length -1; i++) {
  var surfaceArea = (
    (2 * array[i][0] * array[i][1]) +
    (2 * array[i][1] * array[i][2]) +
    (2 * array[i][2] * array[i][0])
  )
  surfaceAreaArray.push(surfaceArea);
}
// console.log(surfaceAreaArray.length);

var extraWrapping = [];
for (var i = 0; i < array.length; i++) {
  var lenWid = array[i][0] * array[i][1];
  var widHei = array[i][1] * array[i][2];
  var heiLen = array[i][2] * array[i][0];
  if (lenWid <= widHei && lenWid <= heiLen ) {
    extraWrapping.push(lenWid);
  }else if (widHei <= heiLen && widHei <= lenWid) {
    extraWrapping.push(widHei);
  }else if (heiLen <= widHei && heiLen <= lenWid) {
    extraWrapping.push(heiLen);
  }
}
// console.log(extraWrapping.length);

var total = [];
for (var i = 0; i < surfaceAreaArray.length; i++) {
  var addition = surfaceAreaArray[i] + extraWrapping[i]
  total.push(addition);
}
console.log(total);

var totalWrapping = 0;
for (var i = 0; i < total.length; i++) {
  totalWrapping += total[i];
}

console.log(totalWrapping);
