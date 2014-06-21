var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://webapp:123@ds041238.mongolab.com:41238/abumain');
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