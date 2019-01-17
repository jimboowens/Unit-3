var express = require('express');
var router = express.Router();
const apiBaseUrl = 'http://api.themoviedb.org/3'
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
