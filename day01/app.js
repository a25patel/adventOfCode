var floors = require('./puzzle.txt');

var array = floors.split('');
var count = 0;

// Puzzle 1
for (var i = 0; i < array.length; i++) {
  if (array[i] === '(') {
    count ++;
  }else if (array[i] === ')') {
    count --;
  }
}
console.log('Santa end up on floor:' + count);

// Puzzle 2
var newArray = [];
count = 0;
for (var i = 0; i < array.length; i++) {
  if (array[i] === '(') {
    count ++;
  }else if (array[i] === ')') {
    count --;
  }
  if (count === -1 && array[i] === ')') {
    newArray.push(i);
  }
}
console.log('Santa goes into the basement on index: ' + (newArray[0] + 1));
