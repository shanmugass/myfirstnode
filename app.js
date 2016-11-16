var express=require("express");
var jobRouter=require("./services/job.service.js")
var app=new express();

app.use("/job",jobRouter);

app.listen(3000,function() {
  console.log('Server listening on port 3000');
});