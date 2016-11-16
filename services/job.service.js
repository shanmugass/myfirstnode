var express = require('express');

var mongoose = require('mongoose');
var db='mongodb://mongouser:mongopass@ds013991.mlab.com:13991/shanmugadb';

var Job = require('./../models/Job.model.js');

mongoose.connect(db);

var jobRouter = express.Router();

jobRouter.route('/:id').get(function(req,res)
{
    res.send('I am in APi '+ req.params.id);
});

jobRouter.route('').get(function(req,res){
Job.find({})
    .exec(function(err, jobs) {
      if(err) {
        res.send('error occured')
      } else {
        res.json(jobs);
      }
    });
});

jobRouter.route('').post(function(req, res) {
  var newjob = new Job();
  newjob.AgentId=1;  
  newjob.save(function(err, book) {
    if(err) {
      res.send('error saving book');
    } else {
      res.send(book);
    }
  });
});

module.exports=jobRouter;