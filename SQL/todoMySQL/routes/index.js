var express = require('express');
var router = express.Router();
var config = require('../config');
var mysql = require('mysql');
var connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  const selectQuery = `select * from tasks;`;
  connection.query(selectQuery,(err,results)=>{
    res.render('index', { tasks: results 
    });
  })
});

router.post('/addItem',(req,res,next)=>{
  const taskName = req.body.taskName;
  const taskDate = req.body.taskDate;
  const insertQuery = `insert into tasks (taskName, taskDate)
  values
  (?,?);` // these question marks will be filled in by the query to follow in the form of an array
  console.log(insertQuery)
  connection.query(insertQuery, [taskName, taskDate], (err, results)=>{
    console.log(taskDate)
    if (err) throw err;
    else res.redirect('/');
  });
  // res.json(req.body)
});

router.get('/edit/:id', (req,res)=>{
  const newName = req.body.taskName;
  const newDate = req.body.taskDate;
  const updateTask = `update tasks set taskName = ? where taskName = 'req.params.taskName.id';`
  const updateDate = `update tasks set taskDate = ? where taskDate = 'req.params.taskDate.id';`
  if (newName=== undefined && newDate === undefined){
    connection.query((err)=>{
      throw err;
    })
  }else if (newDate === undefined){
    connection.query(updateDate, [newDate], (err)=>{
      res.redirect('/');
    })
  }else if (newName === undefined){
    connection.query(updateTask, [newName], (err)=>{
    console.log (updateTask);
    res.redirect('/');
    }) 
  } else{
    connection.query(updateTask, [newName], (err)=>{
    res.redirect('/');
    })
    connection.query(updateDate, [newDate], (err)=>{
      res.redirect('/');
    })
  }
})



// a wild card route in express has a colon in it
router.get('delete:id', (req, res)=>{
  // res.json(req.params.id);
  const deleteQuery = `delete from tasks where id = ?`;
  connection.query(deleteQuery, [req.params.id], (err)=>{
    res.redirect('/');
  })
})

module.exports = router;
