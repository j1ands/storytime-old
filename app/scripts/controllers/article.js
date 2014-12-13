'use strict';

/**
 * @ngdoc function
 * @name storytimeApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the storytimeApp
 */
angular.module('storytimeApp')
  .controller('ArticleCtrl', function ($scope, $http, searchKeys) {

  	var actrl = this;

    actrl.keys = {
        keys: searchKeys.query(function(){
      })
      };


  	var articleSearchUrl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
  	var articleSearchTerms = "fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=";

  	//var articleSearchQuery = articleSearchUrl + articleSearchTerms + actrl.keys.keys[0].nytArticleKey;
    
    function articleSearchQuery()
    {
      return articleSearchUrl + articleSearchTerms + actrl.keys.keys[0].nytArticleKey;
    }

  	actrl.articleJSON = {json: ""};
 
  	actrl.findArticle = function()
  	{
  		$http.get(articleSearchQuery())
  		.success(function(data){
  			actrl.articleJSON.json = data.response.docs[0].web_url;
  		})
  		.error(function(data){
  			actrl.articleJSON.json = "error";
  			console.error("Search Fail!");
  		});
  	}


  });
