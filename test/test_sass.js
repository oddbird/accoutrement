var path = require('path');
const sass = require('sass');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, '.', 'index.scss');
sassTrue.runSass({ file: sassFile }, { sass, describe, it });
