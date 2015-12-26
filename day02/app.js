var fs = require('fs');
var data = fs.readFileSync('./practicePuzzle.txt');
var presents = data.toString().split(/\n/g);

// Find the Surface Area & Slack square feet
function sqFeet(l,w,h){
  var min = Math.min(l*w , w*h, h*l);
  return (2*l*w + 2*w*h + 2*h*l + min);
}
console.log(sqFeet(2,3,4));

// Split the data at the X, assign length, width, height, run sq foot function, total the wrapping paper
presents.forEach(function(present){
  var dimensions = present.split('x');
  var l = dimensions[0];
  var w = dimensions[1];
  var h = dimensions[2];
  if (!l){
     return;
  }
  console.log(dimensions, l, w, h);

});
