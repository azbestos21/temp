const names = require('./exportob');
console.log(names);
const sayHi = require('./exportfun');
sayHi(names.peter);
sayHi('susan');
sayHi(names.john);
require('./export2');