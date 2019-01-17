var express = require('express');
var router = express.Router();
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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Welcome to Jim's site", students:students});
});

router.get('/reverse', function(req, res, next) {
// mySQL.query(select from iCrimes where crimetype === rape){
  res.render('indexReverse', { 
    title: "Welcome to Jim's reverse site", students: students});
});

router.get('/pithos', function (req,res, next){
  res.render('localhost:3000/pithos');
})

// router.get('/pithos', function(req, res, next) {
//   // mySQL.query(select from iCrimes where crimetype === rape){
//     res.render('indexReverse', { 
//       title: "Welcome to Jim's reverse site", students: students});
//   });

// router.get('/memory-game', function(req, res, next) {
//   // mySQL.query(select from iCrimes where crimetype === rape){
//     res.render('indexReverse', { 
//       title: "Welcome to Jim's reverse site", students: students});
//   });

// router.get('/blackjack', function(req, res, next) {
//   // mySQL.query(select from iCrimes where crimetype === rape){
//     res.render('indexReverse', { 
//       title: "Welcome to Jim's reverse site", students: students});
//   })

// router.get('/reverse', function(req, res, next) {
//   // mySQL.query(select from iCrimes where crimetype === rape){
//     res.render('indexReverse', { 
//       title: "Welcome to Jim's reverse site", students: students});
//   })

module.exports = router;
