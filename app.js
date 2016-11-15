console.log("this is first node app");

var http=require("http");
var server=http.createServer(function(request,response){
response.writeHead(200, {"Content-Type":"text/plain"});
response.end("Hello world");
});

server.listen("7000");

var express=require("express");
var app=new express();
app.get('/api/:id',function(req,res)
{
    res.send('I am in APi '+ req.params.id);
});

app.listen(3000);