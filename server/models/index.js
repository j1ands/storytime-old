var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storytime');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var searchSchema = new mongoose.Schema({
	alchemyKey: String,
	nytArticleKey: String
});

module.exports = 
{
	Search: mongoose.model("Search", searchSchema)
};