var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var dServer = express();

dServer.use(bodyParser.json());
dServer.use(bodyParser.urlencoded({extended: false}));

dServer.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

dServer.use('/', routes);

dServer.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//dServer.listen(3000);
module.exports = dServer;