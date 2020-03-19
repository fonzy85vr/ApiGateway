var express = require('express')
var app = express()
var router = require('./router');

app.use(express.json())

app.use(router);
app.listen(3000)