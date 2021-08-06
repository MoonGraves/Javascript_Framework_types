//TÄMÄ ON PÄÄSOVELLUS & SERVER
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

//loading node's file systems
const fs = require('fs');

//Aktivoidaan tämä ejs html-editoitava pohja setti
const ejs = require('ejs');
//EJS Engine & ensimmäinen sivu
app.set('view engine', 'ejs');
app.use(cookieParser());

//lukaisee/käsittelee olemassa olevan kansion ja sisäisen tiedoston json muodon & ja ejs kohdassa pitää määrittää sama tekijä, että tämä on kuin kohde osoite
app.locals.classUsers = require('./data/users.json');

//configure our express instance with some body-parser settings
//including handling JSON datas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Tähän voisi kokeilla esim. pääsovellus vastaanottaa url json datat ja siitä julkaisee itse erillisenä polkuna tiedostossa
app.get("/about", (req, res ) => {
  res.render("about");
});

//consider routes path folder/files, it will set to default home page
const routes = require('./routes/routes.js')(app, fs);

//set server running and port number
const server = app.listen(8080, () => {
  console.log('Server is running %s...', server.address().port);
});
