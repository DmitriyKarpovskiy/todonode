const path = require('path');
const Project = require('../models/project');

exports.create = function(req, res) {
    var newProject = new Project(req.body);
    console.log(req.body);
    newProject.save(function(err) {
        if (err) {
            res.status(400).send('Unable to save');
        } else {
            res.redirect();
        }
    })
}

exports.list = function(req, res) {
    Project.find({}).exec(function(err, projects) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getproject', {
            project: projects
        });
    });
};