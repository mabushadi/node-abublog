var express = require('express');
var db = require('../db');
var blogDal = require('../model/blog');
var router = express.Router();

// GET blog articles listing
router.get('/', function(req, res) {
	console.log(blogDal);
	new blogDal().getArticles(null, function(docs){
		res.render('articles', {title : "Blog", "articles" : docs});
	});
  	
});

router.get('/add', function(req, res){
	res.render('articleadd', {title:"Add article"});
});

router.post('/save', function(req, res){
	
	console.log(req.body);

	console.log('saving: ' + req.body.title + ', ' + req.body.article);
	new blogDal().saveArticle({
		Title : req.body.title,
		Article : req.body.article
	}, function(err, docs){
		if(err){
			res.write(err.message);
			res.end();
		} else{
			res.redirect('/articles');
		}
	});
});

module.exports = router;
