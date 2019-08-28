var i = 2;
var ret = 0;
for (i;i < process.argv.length;i++){
    ret += Number(process.argv[i]);
}
console.log(ret);
