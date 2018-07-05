'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrainSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  project: {
    type: String,
    required: 'Kindly enter the name of the schema'
  },
  grainName: {
    type: String,
    required: 'Kindly enter the name of the table'
  },
  schemaName: {
    type: String,
    required: 'Kindly enter the alias name'
  },
  table: {
    type: Number,
    default: true
  },
  uniqueId: {
    type: Number,
    default: true
  },
  CreatedDate: {
    type: Date,
    default: Date.now
  },
  UpdatedDate: {
    type: Date,
    default: Date.now
  }
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // },
  // matrics: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Matrics'
  // }]
});

module.exports = mongoose.model('Grain', GrainSchema);