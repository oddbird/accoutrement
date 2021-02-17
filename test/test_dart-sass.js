var path = require('path');
const sass = require('sass');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, '.', 'test_dart-sass.scss');
sassTrue.runSass({ file: sassFile }, { sass, describe, it });
