console.log("this is first node app");

var mongoose = require('mongoose');
var db='mongodb://mongouser:mongopass@ds013991.mlab.com:13991/shanmugadb';

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

app.post('/job', function(req, res) {
  var newjob = new Job();
  newjob.AgentId=1;  
  newjob.save(function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      console.log(book);
      res.send(book);
    }
  });
});


app.listen(3000);