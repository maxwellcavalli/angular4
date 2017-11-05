var fs = require('fs');
/*var resources = [
  'src/assets/script/jquery-clockpicker.min.js',
  'src/assets/style/jquery-clockpicker.min.css'
];*/

if (!fs.existsSync('dist/locale')){
  fs.mkdir('dist/locale');
  
  fs.createReadStream('src/locale/en.js').pipe(fs.createWriteStream('dist/locale/en.js'));
}


/*if (!fs.existsSync('dist/src/assets'))
  fs.mkdir('dist/src/assets');

if (!fs.existsSync('dist/src/assets/script'))
  fs.mkdir('dist/src/assets/script');
  
if (!fs.existsSync('dist/src/assets/style'))
  fs.mkdir('dist/src/assets/style');

if (!fs.existsSync('dist/mx-components/locale')){
  fs.mkdir('dist/mx-components/locale');
  
  fs.createReadStream('src/locale/en.js').pipe(fs.createWriteStream('dist/mx-components/locale/en.js'));
}

resources.map(function (f) {
  var path = f.split('/');

  var t = 'dist/src/assets/' + path[path.length - 2] + '/' + path[path.length - 1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});*/