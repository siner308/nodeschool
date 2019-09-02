var http = require('http');
var concatStream = require('concat-stream');


http.get(process.argv[2], function (response) {
    response.pipe(concatStream(function (data) {
        data = data.toString();
    console.log(data)
}))});


http.get(process.argv[3], function (response) {
    response.pipe(concatStream(function (data) {
        data = data.toString();
        console.log(data)
    }))});


http.get(process.argv[4], function (response) {
    response.pipe(concatStream(function (data) {
        data = data.toString();
        console.log(data)
    }))});