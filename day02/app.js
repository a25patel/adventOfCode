var fs = require('fs');
var data = fs.readFileSync('./puzzle.txt');
var presents = data.toString().split(/\n/g);

function paper(l,w,h){
  var min = Math.min(l*w , w*h, h*l);
  return (2*l*w + 2*w*h + 2*h*l + min);
}

function ribbon(l,w,h){
  var l = Number(l);
  var w = Number(w);
  var h = Number(h);
  var min = Math.min(l+w, w+h, h+l);
  var cubicFt = l*w*h;
  var perimeterRibbon = 2 * min;
  return (perimeterRibbon + cubicFt);
}

var totalWrapping =0;
var totalRibbon = 0;
presents.forEach(function(present){
  var dimensions = present.split('x');
  var l = dimensions[0];
  var w = dimensions[1];
  var h = dimensions[2];
  if (!l){
     return;
  }
  var presentWrapping = paper(l,w,h);
  totalWrapping += presentWrapping;
  var presentRibbon = ribbon(l,w,h);
  totalRibbon += presentRibbon;
});
console.log('The total wrapping paper needed is: ' + totalWrapping + ' square feet');
console.log('The total ribbon needed is: ' + totalRibbon + ' feet');
