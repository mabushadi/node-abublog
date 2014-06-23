var db = require('../db')

var Blog = function(){
	this.getArticles = function(query, next){
		var blogCollection = db.get('Blog');			
		blogCollection.find({},{}, function(e, docs){
			next(docs);
		});
	},

	this.saveArticle = function(article, next){
		var blogCollection = db.get('Blog');
		blogCollection.insert(article, function(err, docs){
			next(err, docs);
		});
	}
}

module.exports = Blog;