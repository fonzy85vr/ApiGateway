var express = require('express')
var router = express.Router();
var config = require('./config/api-config');
var axios = require('axios');
var adapter = require('./apiAdapter');

var api = adapter('http://localhost:3030');

for (let i = 0; i < config.applications.length; i++) {
    var application = config.applications[i];
    router.all(application.route, (req, res, next) => {
        var method = req.method.toLowerCase();
        var path = req.path;
        console.log(path);
        if (method === 'get' || method === 'delete') {
            api[method](path).then(function (response) {
                res.send(response.data);
            }).catch(function (error) {
                res.send(error);
            });
        } else {
            api[method](path, req.body).then(function (response) {
                res.send(response.data);
            }).catch(function (error) {
                res.send(error.Error);
            });
        }
    });

    router.all(application.route + '/:id', (req, res, next) => {
        var method = req.method.toLowerCase();
        var path = req.path;
        console.log(path);
        if (method === 'get' || method === 'delete') {
            api[method](path).then(function (response) {
                res.send(response.data);
            }).catch(function (error) {
                res.send(error);
            });
        } else {
            api[method](path, req.body).then(function (response) {
                res.send(response.data);
            }).catch(function (error) {
                res.send(error.Error);
            });
        }
    });
}

module.exports = router;