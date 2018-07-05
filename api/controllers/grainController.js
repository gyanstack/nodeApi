'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Grain');

exports.getAll = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.status(500).send(err);
        else
            res.json(task);
    });
}

exports.getTask = function (req, res) {
    Task.findById(req.params.Id, function (err, task) {
        if (err)
            res.status(500).send(err);
        else
            res.json(task);
    });
}

exports.postData = function (req, res) {
    var new_task = new Task(req.body);
    console.log(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).json(task);
    });
};

exports.updateTask = function (req, res) {
    Task.findOneAndUpdate(
        { _id: req.params.Id },
        req.body,
        function (err, task) {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(task);
        });
};


exports.deleteTask = function (req, res) {
    Task.remove({
        _id: req.params.Id
    }, function (err, task) {
        if (err)
            res.status(500).send(err);
        else
            res.json({ message: 'Task successfully deleted' });
    });
};
