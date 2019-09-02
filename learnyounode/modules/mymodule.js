let fs = require('fs');


module.exports = function readDir(dir, ext, callback){
    fs.readdir(dir, function callcallback(err, dirContents){
        if (err){
            return callback(err)
        }
        array = [];
        for (var i = 0; i < dirContents.length; i++){
            if (dirContents[i].endsWith('.' + ext)){
                array.push(dirContents[i]);
            }
        }
        callback(null, array);
    })
};
