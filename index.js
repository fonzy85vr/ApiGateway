var express = require('express')
var app = express()
var router = require('./router');
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.use(router);
app.listen(3000)