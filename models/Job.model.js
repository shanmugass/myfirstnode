var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  AgentId: Number,
  JobName: String,
  CreateDateTime: Date,
  LastRunDateTime: Date,
  Limit: Number,
  LastProcessedTitleBSONId: Object
});

module.exports = mongoose.model('Job', JobSchema);