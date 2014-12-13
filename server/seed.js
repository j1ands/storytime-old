var async = require('async');
var mongoose = require('mongoose');
var models = require('./models');

var Search = models.Search;

var data = {
	Search: [
	{alchemyKey:"e62409e7c167782bfc36cdb8011512f81b00c0d4", nytArticleKey:"b6234da8d654d10783f2c77fdd9199ad:8:70354710"}
	]
};

mongoose.connection.on('open', function() {
	mongoose.connection.db.dropDatabase(function(){

		console.log("Dropped old data, now inserting data");
		async.each(Object.keys(data),
			function(modelName, outerDone){
				async.each(data[modelName],
					function(d, innerDone){
						models[modelName].create(d, innerDone);
					},
					outerDone
				);
			},
			function(err){
				console.log("Finished inserting data");
				console.log("Control-C to quit");
			}
		);
	});
});