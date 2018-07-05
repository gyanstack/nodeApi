'use strict'

var mongoose = require('mongoose'),
    Metrics = mongoose.model('Metrics');

exports.getAll = function (req, res) {
    Metrics.find({}, function (err, result) {
        if (err)
            res.status(500).send(err);
        else
            res.json(result);
    });
}

exports.getMetrics = function (req, res) {
    // console.log('here : ' + req.params.GrainId);
    Metrics.findById(req.params.Id, function (err, metrics) {
        if (err)
            res.status(500).send(err);
        else
            res.json(metrics);
    });
}

exports.postData = function (req, res) {
    var metrics = new Metrics(req.body);
    metrics.save(function (err, result) {
        if (err)
            res.status(500).send(err);
        else
            res.status(201).json(result);
    })
}