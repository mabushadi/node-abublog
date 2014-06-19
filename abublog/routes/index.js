var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/article/add', function(req, res){
	res.render('articleadd', {title:"Add article"});
});

router.get('/article/save', function(req, res){
	res.write('saving');
	res.end();
});

module.exports = router;
