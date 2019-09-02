var concatStream = require('concat-stream');
var http = require('http');


http.get(process.argv[2], function (response) {
    response.pipe(concatStream(function (data) {
        console.log(data.length);
        data = data.toString();
        console.log(data)
    }))
});

// function concatStream(err, callback){
//     http.get(process.argv[2], function(response){
//         response.pipe(concatStream(function (data) { /* ... */ }))
//     });
// }
