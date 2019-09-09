var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    // console.log(req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var datetime = url.parse(req.url, true).query['iso'];
    if (req.url.startsWith('/api/parsetime')){
        var time = datetime.toString().split('T')[1].split('.')[0];
        var hour = time.split(':')[0];
        var minute = time.split(':')[1];
        var second = time.split(':')[2];

        var dict = {
            'hour': Number(hour) + 9,
            'minute': Number(minute),
            'second': Number(second)
        };

        res.end(JSON.stringify(dict));
    }
    else{
        var unixtime = new Date(datetime).getTime();
        var dict = {
            'unixtime': unixtime,
        };
        res.end(JSON.stringify(dict));
    }
});

server.listen(process.argv[2]);