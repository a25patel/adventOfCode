// Bring in the puzzle data 
var fs = require('fs');
var data = fs.readFileSync('./practicePuzzle.txt');

data = data.toString().split(/\n/g);
var array = [];
for (var i = 0; i < data.length; i++) {
  var dimensions = data[i].split('x');
  array.push(dimensions);
}
console.log(array);
