var http = require("http");
var fs = require("fs");

var server = http.createServer(function(res, req){
    fs.readFile("spring.html", function(err, data){
        if(err){
            res.end("Khởi động thất bại");
        } else {
            console.log
        }


    })
    res.write("hello world 1");
    res.write("Hide");
    res.end()

});