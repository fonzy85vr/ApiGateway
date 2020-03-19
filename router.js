var express = require('express')
var router = express.Router();
var config = require('./config/api-config');

for (let i = 0; i < config.applications.length; i++) {
    var application = config.applications[i];
    router.all(application.route, (req, res, next) => {
        res.send(req.body);
    });
}

module.exports = router;