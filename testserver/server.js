var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req, res){
    fs.readFile("files/test.html", function(err, data){
        if(err){
            res.end("connect fail!!");
        } else {
            res.end(data.toString());
        }

    })
});
server.listen(2905, function(){
    console.log("connect success 2905!!");
});
