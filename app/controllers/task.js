const path = require('path');
const Task = require('../models/task');

exports.create = function(req, res) {
    var newTask = new Task(req.body);
    console.log(req.body);
    newTask.save(function(err) {
        if (err) {
            res.status(400).send('Unable to save');
        } else {
            res.redirect();
        }
    })
}

exports.list = function(req, res) {
    Task.find({}).exec(function(err, tasks) {
        if (err) {
            return res.send(500, err);
        }
        res.render('gettask', {
            task: tasks
        });
    });
};