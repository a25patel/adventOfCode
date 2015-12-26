var floors = require('./puzzle.txt').split('');

// Puzzle 1
var count = 0;
floors.forEach(function(floor){
  floor === '(' ? count++ : count--
})
console.log('Santa ends up on floor:' + count);

// Puzzle 2
var index;
count = 0;
floors.forEach(function(floor){
  floor === '(' ? count++ : count--
  if (count === -1) {
    index = i + 1;
    break;
  }
})
console.log('Santa goes into the basement on index: ' + index);
