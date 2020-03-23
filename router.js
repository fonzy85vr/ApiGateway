var express = require('express')
var router = express.Router();
var config = require('./config/api-config');
var adapter = require('./apiAdapter');

for (let i = 0; i < config.applications.length; i++) {
    var application = config.applications[i];
    var api = adapter(application.baseUrl);

    for (let r = 0; r < application.routes.length; r++) {
        router.all(application.routes[r].route, (req, res, next) => {
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

        router.all(application.routes[r].route + '/:id', (req, res, next) => {
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
}

module.exports = router;