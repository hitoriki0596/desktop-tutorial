var fs = require("fs");

fs.readFile("files/summer.html",function(e, d){
    if(e){
        console.log(""+ e);
    } else {
        console.log(""+ d);
    }
});
