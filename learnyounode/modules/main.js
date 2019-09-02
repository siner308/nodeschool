let mymodule = require('./mymodule');


function filterExtension(err, data){
    for (var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
}

mymodule(process.argv[2], process.argv[3], filterExtension);