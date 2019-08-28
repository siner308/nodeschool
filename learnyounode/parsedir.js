var fs = require('fs');

function readDir(callback){
    fs.readdir(process.argv[2], function sendDir(err, dirContents){
        callback(dirContents, process.argv[3]);
    });
}

function parseDir(dirContents, extension){
    for (var i = 0; i < dirContents.length; i++){
        target = dirContents[i];
        if (target.endsWith('.' + extension)){
            console.log(target);
        }
    }
}

readDir(parseDir);
