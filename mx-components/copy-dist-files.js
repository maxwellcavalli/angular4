var fs = require('fs');
var resources = [
  'src/assets/script/jquery-clockpicker.min.js',
  'src/assets/style/jquery-clockpicker.min.css'
];


if (!fs.existsSync('dist/src/assets'))
  fs.mkdir('dist/src/assets');

if (!fs.existsSync('dist/src/assets/script'))
  fs.mkdir('dist/src/assets/script');
  
if (!fs.existsSync('dist/src/assets/style'))
  fs.mkdir('dist/src/assets/style');


resources.map(function (f) {
  var path = f.split('/');

  var t = 'dist/src/assets/' + path[path.length - 2] + '/' + path[path.length - 1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});