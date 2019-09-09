var http = require('http');
var fs = require('fs');

// fs.createReadStream() 을 사용해야함.

// console.log(process.argv);
var server = http.createServer(function (req, res){
    // request handling logic ...
    var stream = fs.createReadStream(process.argv[3]);
    stream.pipe(res);
    // console.log(stream);
});
server.listen(process.argv[2]);