var fs = require('fs')

var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString();

var list = str.split('\n')

console.log(list.length -1);
