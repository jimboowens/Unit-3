var express = require('express');
var router = express.Router();

// usethe mysql module to connect and query from express/node.
// the mysql is not part of core, so we have to npm install it.

var mysql = require('mysql');
var config = require('../config');
var connection = mysql.createConnection(config);

connection.connect();

router.get('/', function(req, res, next) {
  // we want to load a list of our restaurants on the homepage
  // they are inside mysql.
  // before we res.render a view, we want to query the db and get the data,
  // then send it to the view.
  const query = 'select * from restaurant;';
  connection.query(query,(err, results)=>{
    if (err) throw err;
    else{
      console.log('this worked!')
      res.json(results);
    }
  })
});

router.get('/takeout', function (req,res){
  const takeoutQuery = 'select restaurantname from restaurant where doesTakeout = true;'
  connection.query(takeoutQuery,(err, results)=>{
    if (err) throw err;
    else{
      res.json(results);
    }
  })
});

module.exports = router;
