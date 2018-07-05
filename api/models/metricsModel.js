'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var metricsSchema = new Schema({
    sliceName: String,
    track: String,
    calculate: String,
    column: String,
    groupBy: String
  }); 

module.exports = mongoose.model('Metrics', metricsSchema);