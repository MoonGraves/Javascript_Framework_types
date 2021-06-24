//index.js as server
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//Static files & lukaisee muu kansion ja nimen, mikäli haluttaan kuin käyttää tai julkaista esim. image kuvaa 
app.use(express.static('public'));
app.use('/css', express.static((__dirname + 'public/css'))); //stylecheet css
app.use('/js', express.static((__dirname + 'public/js'))); //javascript
app.use('/img', express.static((__dirname + 'public/img'))); //images

// index page / home page
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
  console.log("Homepage")
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
  console.log("About");
});

// blog page
app.get('/blog', function(req, res) {
  res.render('pages/blog');
  console.log("Blog");
});

//mikäkin tuntematon sivu polku, näyttää oletuksen 404 / error sivuston
app.use(function(req, res) {
    res.status(404)
    res.render('pages/404')
    console.log("Error")
});

app.listen(8080);
console.log('Serveri käynnistyy... 8080');