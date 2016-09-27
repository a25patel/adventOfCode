// Nice Rules:
// 1. Must have double letter (aa, bb)
// 2. Must have at least 3 vowels
// 3. Must not contain phrases:
//    ab, cd, pq, or xy

// Answer: 258

var fs = require('fs');
var input = fs.readFileSync('./puzzle.txt', 'utf8');
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

// Test Three: must not contain phrases- ab, cd, pq, or xy
function phrases(line){
  var phrases = 0
  if (line.indexOf('ab') !== -1) {
    phrases ++
  }
  if (line.indexOf('cd') !== -1) {
    phrases ++
  }
  if (line.indexOf('pq') !== -1) {
    phrases ++
  }
  if (line.indexOf('xy') !== -1) {
    phrases ++
  }
  if (phrases === 0) {
    return line
  }
}
lines = lines.filter(phrases);
console.log(lines);
console.log(lines.length);
