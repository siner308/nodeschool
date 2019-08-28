var fs = require('fs');

var lineCount = undefined;

function functionName(callback){
  fs.readFile(process.argv[2], function functionsNameToo(err, fileContents){
    lineCount = fileContents.toString().split('\n').length - 1;
    callback()
  })
}

function printResult(){
  console.log(lineCount)
}

functionName(printResult);

