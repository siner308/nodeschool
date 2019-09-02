var net = require('net');
// var strftime = require('strftime');
var date = new Date();

var server = net.createServer(function (socket) {
    // strftime(new Date.now(), 'YYYY-mm-dd HH:MM');
    // var now = date.getTime();
    // socket.write(strftime(now, 'YYYY-mm-dd HH:MM'));

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10){
        month = String('0' + month)
    }
    let day = date.getDay() + 1;
    if (day < 10){
        day = String('0' + day)
    }
    let hour = date.getHours();
    let minute = date.getMinutes();

    let ret = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n';
    socket.write(ret);
    socket.end();
});
server.listen(process.argv[2]);