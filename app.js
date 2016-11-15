console.log("this is first node app");

var mongoose = require('mongoose');
var db='mongodb://appFulfillment:!TURner2016$_DOWNSTREAM@ds039775-a0.mongolab.com:39775,ds039775-a1.mongolab.com:39775/fulfillment-dev?replicaSet=rs-ds039775';

var Job = require('./models/Job.model.js');

mongoose.connect(db);

var http=require("http");
var server=http.createServer(function(request,response){
response.writeHead(200, {"Content-Type":"text/plain"});
response.end("Hello world");
});

server.listen("7000");

var express=require("express");
var app=new express();
app.get('/job/:id',function(req,res)
{
    res.send('I am in APi '+ req.params.id);
});

app.get('/job',function(req,res){
Job.find({})
    .exec(function(err, jobs) {
      if(err) {
        res.send('error occured')
      } else {
        console.log(jobs);
        res.json(jobs);
      }
    });
});


app.listen(3000);