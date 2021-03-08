const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//EJS 
app.set('view engine', 'ejs');

//static folder & public
app.use(express.static('./public'));

//Kotisivu index.ejs
app.get('/', (req, res) => {
  res.render('index')
  console.log('Home')
  
});

//about
app.get('/about', (req,res)=> {
  //res.send('Ihme maailma');
  res.render('/about')
  console.log("About");
});

//////////////////////////////////////////////

app.listen(8080);
