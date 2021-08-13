//TÄMÄ ON PÄÄSOVELLUS nodejs serveri
//index.js as server
const express = require('express');
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

//Static files & lukaisee muu kansion ja nimen, mikäli haluttaan kuin käyttää tai julkaista esim. image kuvaa 
app.use(express.static('public'));
app.use('/css', express.static((__dirname + 'public/css'))); //stylecheet css
app.use('/js', express.static((__dirname + 'public/js'))); //javascript
app.use('/img', express.static((__dirname + 'public/img'))); //images

// index page / default home page
app.get('/', function(req, res) {

  var mascots = [
    { name: 'Jimmy', organization: "DigitalDeepSea", birth_year: 2002},
    { name: 'Roy', organization: "MineSoft", birth_year: 1996},
    { name: 'Ada Dock', organization: "Docker", birth_year: 2010}
  ];
  var tagline = "Code may not work. Let's change nothing and run it again. ";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
  //console.log("Homepage")
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
  //console.log("About");
});

// blog pääkotisivu
app.get('/blog', function(req, res) {
  res.render('pages/blog');
  //console.log("Blog");
});

app.get('/blog-2', function(req, res) {
  res.render('pages/blog-2');
  //console.log("Blog-2");
});

// contract 
app.get('/contract', function(req, res) {
  res.render('pages/contract');
  //console.log("contract");
});

// skills pääkotisivu
app.get('/skills', function(req, res) {
  res.render('pages/skills');
  //console.log("skills");
});

//mikäkin tuntematon sivu polku, näyttää oletuksen 404 / error sivuston, tämä on kuin pakollinen asetus sivusto
app.use(function(req, res) {
    res.status(404)
    res.render('pages/404')
    //console.log("Error")
});

app.listen(PORT, () => console.info(`Serveri käynnistyy... ${PORT}`));
