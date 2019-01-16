var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: "Welcome to Jim's site",
    students: [
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
  });
});

router.get('/reverse', function(req, res, next) {
  res.render('indexReverse', { 
    title: "Welcome to Jim's reverse site",
    students: [
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
  });
});

module.exports = router;
