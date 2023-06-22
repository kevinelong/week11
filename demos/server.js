const express = require("express"); //WEB SERVER FRAMEWORK
const bodyParser = require('body-parser')
const fs = require('fs'); //FILE SYSTEM FOR "DATABASE"

const app = express(); //CREATE INSTANCE OF WEB SERVER
//ADD THE JSON PLUGIN FOR THE SERVER
app.use(express.json({extended: true, limit: '1mb'}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
   
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S!mpl312",
  database: 'blog'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }); 
//MAP A ROUTE. (GET /author => lambda)
app.get('/author',(req, res) => {
    con.query(`SELECT * FROM author;`, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

//BEGIN LISTENING FOR WEB REQUESTS ON PORT 3000
app.listen(3000, () => console.log("Started on PORT 3000"));