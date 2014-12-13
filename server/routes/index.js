var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req,res,next){
	models.Search.find({}, function(err,results){
		if(err) return next(err);
		res.send(results);
	});
});

module.exports = router;