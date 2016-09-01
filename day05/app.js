// 31 is too low, 274 is too high

var fs = require('fs');
var input = fs.readFileSync('./practicePuzzle.txt', 'utf8');
var lines = input.split('\n');

// looking for nice lines rules:
// 1. must have double letter (aa, bb)
// 2. must have at least 3 vowels
// 3. must not contain phrases:
//    ab, cd, pq, or xy

var niceLinesCount = 0;
console.log(lines);

// Test One: Does it have double letters?
function doubles(line){
  line = line.split('');
  for (var i = 0; i < line.length; i++) {
    if (line[i] === line[i + 1]) {
      return ("TRUE" + line[i] + line[i+1]);
    }
  }
}

console.log(doubles('rthkunfaakmwmush'));

Test Two: Has atleast 3 Vowels



//
// // Test One:
// // does it have 3 vowels?
// function vowelChecker(line) {
//   'use strict';
//   var vowelChecker = 0;
//
//   for (var n = 0; n < line.length; n++) {
//     switch (line[n]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         vowelChecker++;
//         break;
//     }
//   }
//
//   // if vowel count < 3, line is
//   // not eligible for nice list
//   if (vowelChecker < 3) {
//     return false;
//   }
//
//   return true;
// }
//

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
