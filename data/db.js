var mongo = require('mongodb');
var monk = require('monk');
var mongoDbConnection = require('../config').db.mongodb_dev_connection;
var db = monk(mongoDbConnection);
var blogCollection = db.get('Blog');

var Blog = function(){

	return {
		getArticles : function(query, next){			
			blogCollection.find({},{}, function(e, docs){
				next(docs);
			});
		},

		saveArticle : function(article, next){
			blogCollection.insert(article, function(err, docs){
				next(err, docs);
			});
		}
	}
}

module.exports = Blog;