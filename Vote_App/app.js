// first, this is an express app.. maybe we should get express?

const express = require ('express');
// make an express app
let app = express();
const helmet = require('helmet');
app.use(helmet());
const config = require('./config')
// middleware is any function with access to req,res
// set up mysql connection:
const mysql = require('mysql');
let connection = mysql.createConnection(config.db);
connection.connect()

app.set('views','views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req,res, next)=>{
    const animalQuery = 'select * from animals;';
    connection.query(animalQuery,(err,results)=>{
        if (err) throw err;
        else{res.render ('index',{animals:results})};
    });
});

console.log('app is listening on port 8282');

app.listen(8282);