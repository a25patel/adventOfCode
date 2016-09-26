// 31 is too low, 274 is too high
// Nice Rules:
// 1. Must have double letter (aa, bb)
// 2. Must have at least 3 vowels
// 3. Must not contain phrases:
//    ab, cd, pq, or xy
var fs = require('fs');
var input = fs.readFileSync('./practicePuzzle.txt', 'utf8');
var lines = input.split('\n');

// Test One: Does it have double letters?
function doubles(line){
  line = line.split('');
  for (var i = 0; i < line.length; i++) {
    if (line[i] === line[i + 1]) {
      return line.join('');
    }
  }
}

lines = lines.filter(doubles);
console.log(lines);

// // Test Two: Has atleast 3 Vowels
function vowels(line){
  line = line.split('');
  vowelCount = 0;
  for (var i = 0; i < line.length; i++) {
    if (line[i] === 'a') {
      vowelCount ++;
    }
    if (line[i] === 'e') {
      vowelCount ++;
    }
    if (line[i] === 'i') {
      vowelCount ++;
    }
    if (line[i] === 'o') {
      vowelCount ++;
    }
    if (line[i] === 'u') {
      vowelCount ++;
    }
  }
  if (vowelCount >= 3) {
    return line.join('')
  }
}

lines = lines.filter(vowels);
console.log(lines);
// function vowels(line){
//   var vowelCounter = 0;
//   line = line.split('');
//   for (var i = 0; i < line.length; i++) {
//     switch (line[i]) {
//       case 'a':
//
//         break;
//       default:
//
//     }
//
//   if (vowelCounter >= 3) {
//     return "TRUE";
//   }
// }
//
// console.log(vowels('rthkunfaakmwmush'));

// // Test Three:
// // can't contain certain phrases
// function phraseChecker(line) {
//   if (line.indexOf('ab') != -1 ||
//       line.indexOf('cd') != -1 ||
//       line.indexOf('pq') != -1 ||
//       line.indexOf('xy') != -1) {
//         return false;
//   }
//
//   return true;
// }
//
//
// // going through each line here
// // and applying the tests
// for(var i = 0;i < lines.length; i++){
//   var line = lines[i];
//
//   if (vowelChecker(line) && doubleLetterChecker(line) &&phraseChecker(line)) {
//     niceLineCount++;
//   }
// }
//
// console.log(niceLineCount);
