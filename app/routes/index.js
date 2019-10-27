var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ToDo Application' });
});

router.get('/auth', function(req, res, next) {
    res.render('authorization');
});

router.get('/registration', function(req, res, next) {
    res.render('registration');
});

module.exports = router;