/* TÄMÄ ON PÄÄSOVELLUS */
const express = require('express')
const app = express()
const port = 8080
const fs = require("fs");

//default page
app.get('/', (req, res) => res.send('Hello qwer!'))

//TODO: lisää polkuun niin avautuu tämmöinen lite json formaatti
app.get('/users', (req,res) => {
  res.json([{
    id: 1,
    name: 'User Userson'
  }])
})

app.get('/products', (req, res) => {
  res.json([{
    id: 1,
    name: 'The Bluest Eye'
  }])
})

//TODO polku näyttää koko json tiedoston
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      //console.log( data );
      res.end( data );
   });
})

//TODO (1) SHOW DETAIL:: hankii json tiedoston sisäisen id mukaan ja tulostaa syvemmän yksityiskohdan datat
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      res.end( JSON.stringify(user));
   });
})

//TODO (1.1) SHOW DETAIL:: sama kuin edellinen, että lukaisee json tiedoston formaatit, mutta lopussa lisätään id numero
app.get('/listUsers/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      res.end( JSON.stringify(user));
   });
})



app.listen(port, () => console.log(`App is running.. ${port}!`))
