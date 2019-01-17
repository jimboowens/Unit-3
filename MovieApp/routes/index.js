var express = require('express');
var router = express.Router();
var request = require ('request')

let students= [
  'Zac',
  'Jim',
  'JR',
  'Matt',
  'Greg',
  'Christopher',
  'Noelle',
  'Cody',
  'Jason',
  'Katie',
  'Ron',
  'Rob',
  'Brian',
  'Gbenga',
  'Michael',
  'Khanh',
  'Brandon',
  'Sean',
  'Connor',
  'Kyle',
  'Ian',
  'Robert',
]

router.get('/', function(req,res, next){
  request.get(nowPlayingUrl,(error, response, body)=>{
  // this is minified:
  // console.log(body)
  const parsedData = JSON.parse(body)
  // the two lines following are to just show what those do
  // console.log(parsedData.results[].title)
  // console.log(parsedData.results[].overview)
  // res.json(parsedData)
  res.render('now_playing',{parsedData:parsedData.results, imageBaseUrl})
  })
})

router.get('/search-movies', function(req,res, next){

  res.render('search-movies', { title: "This is the search site"});

})

const apiKey = require('../config')
const apiBaseUrl = 'http://api.themoviedb.org/3'
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
// console.log(nowPlayingUrl)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
