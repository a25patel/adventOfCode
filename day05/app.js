// Nice Rules:
// 1. Must have double letter (aa, bb)
// 2. Must have at least 3 vowels
// 3. Must not contain phrases:
//    ab, cd, pq, or xy

// Answer: 258

var fs = require('fs');
var input = fs.readFileSync('./practicePuzzle.txt', 'utf8');
var lines = input.split('\n');
var lines2 = input.split('\n');

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
console.log(lines.length);


// --------------- Part Two ----------------
// 63 is too high, 36 is too low
// New Rules:
// 1. Any two letters appear atleast twice. No Overlapping
//   ie: xyxy OR aabejioeaajfioe NOT aaa (overlaps)
// 2. Contains one letter that repeats with one letter in between
//   ie: aya OR jfioeafajfioe

// Test One: Letter DifLetter Letter
function sandwich(line){
  for (var i = 0; i < line.length; i++) {
    if (line[i] === line[i + 2]) {
      return line
    }
  }
}
lines2 = lines2.filter(sandwich);

// Test Two: Two letters twice.

// If a string with 3 same letters in a row, take out one of the letters
function lettersThrice(line){
  for (var i = 0; i < line.length; i++) {
    if (line[i] === line[i+1] && line[i] === line[i+2]) {
      var phrase = line[i] + line[i+1] + line[i+2];
    }
  }
  if (phrase) {
    var index = line.indexOf(phrase);
    line = line.split('');
    line.splice(index, 1);
    line = line.join('');
    console.log(line);
    return line;
  }else{
    return line;
  }
}
lines2 = lines2.filter(lettersThrice);
console.log(lines2);

//
// var string =   'lactpmuhmmmzwfjl';
// console.log(string.indexOf('mmm'));
// string = string.split('')
// string.splice(8, 1)
// string = string.join('')
// console.log(string);




// Count how many times a phrase of two letters appear in a string
function letters(line, phrase){
  var count = 0;
  var twice = line.indexOf(phrase);
  while (twice !== -1) {
    count ++
    twice = line.indexOf(phrase, twice + 1)
  }
  if (count >= 2) {
    return count;
  }
}

function lettersTwice(line){
  for (var i = 0; i < line.length; i++) {
    var phrase = line[i] + line[i + 1]
    if (letters(line, phrase) >= 2) {
      return line
      break;
    }
  }
}

lines2 = lines2.filter(lettersTwice);
// console.log(lines2.length);
