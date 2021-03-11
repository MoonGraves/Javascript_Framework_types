/* CRASH COURSE__::

GET, POST, DELETE request

POST  - (create a resource or generally provide data)
GET   - (retrieve an index of resources or an individual resource)
PUT   - (create or replace a resource)
PATCH - (update/modify a resource)
DELTE - (remove a resource)
*/ 

//npm install libraries 
const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const crypto = require("crypto");

const nimiListat = require('./nimiData') //read file path

//const request = require('request');

const app = express();
app.use(express.json())

app.use(morgan('short')) //mittaa / analysoi, että kuinka kauan käyttäjältä menee aika johonkin polku sivustoon vaik olisikin kotisivu, about, muu ja jne. Muita valintoja on mm. combined, common, dev, short & tiny


app.use(bodyParser.urlencoded({extended: true}));

const id_luku = crypto.randomBytes(5).toString("hex"); //luodaan random id tunnus vastaava

var ip_addrs = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));


/*>>> TOIMIVAT POLKUT HTTP - PROTOKOLLOSSA:::<<<
localhost:8080/index.html << ilman index.html toimii myös koska se on pääsivu
localhost:8080/about

localhost:8080/muu/ << lukaisee kokonaisen nimiData.js tiedoston kaikki henkilöt
localhost:8080/muu/3 << lukaisee vain tietyn henkilönn nimiData.js tiedostosta id mukaan
localhost:8080/

muu toimivat protokollat & muu työkaluina (postman)
VAIN>> put & delete

*/

//Lukaisee kokonaisen json tiedoston & määritettynä url kautta
/*https://www.youtube.com/watch?v=YCPiIrkkdUg
request({
  url: "https://jsonplaceholder.typicode.com/posts",
  json: true
}, (err, response, body) => {
  //console.log(JSON.stringify(body, undefined, 15));
  //console.log(body);
});
*/


//static files / folder
//app.use('/public', express.static(path.join(__dirname, 'static')));

//Static files & lukaisee muu kansion ja nimen
//app.use('/js', express.static((__dirname + 'static/js'))); //javascript

//Home 
/*
app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static' , '/index.html'));
  console.log("Home");
});*/
//------------------------------------------------------------------------

//EJS 
app.set('view engine', 'ejs');

//static folder & public
app.use(express.static('./public'));

//Kotisivu index.ejs methodit
app.get('/', function (req, res) {
  res.render('index', {title: 'Kotisivu'}) //home kotisivu on vain välilehden palkki editoitu & siks siel titlessä lukee <%= title %>

  console.log('Home')
});

//kotisivu & käyttäjä syöttää jotakin avautuu sama sivusto & kuin luoo uuden käyttäjä henkilön
app.post('/', (req,res) => {
  //res.send('Ihme maailma');
  
  const uusnimiLista = {
    id: id_luku,
    name: req.body.name,
    email: req.body.email,
    ip_address: ip_addrs,
    country: req.body.country,
    status: "active"
  }
  if (!uusnimiLista.name || !uusnimiLista.email) {
    res.status(400).json({ msg: 'Please include a name and email' })
  }
  nimiListat.push(uusnimiLista);
  res.json(nimiListat); // lisääntyy sinne json tiedostoon vain näkyvään olevaan http protokollaan, ei varsinaisesti LISÄÄNNY SINNE nimiData.JSON tiedostoon (kuin esikatselu)
  

  res.end(JSON.stringify(req.body));
});

//------------------------------------------------------------------------

//about 
app.get('/about', (req, res) => {
  //res.send('Ihme maailma');
  
  const blogs = [
    {title: 'Asia 1 ', snippet: 'Lorem ipsum dolor sit amet'},
    {title: 'Asia 2 ', snippet: 'Lorem ipsum dolor sit amet'},
    {title: 'Asia 3 ', snippet: 'Lorem ipsum dolor sit amet'},
  ];

  console.log("about");

  res.render('about', {title: 'About', blogs}); //home kotisivu on vain välilehden palkki editoitu & siks siel titlessä lukee <%= title %>
});

//about ejs siel on box-missä käyttäjä syöttää jotakin, niin se <form> action pitää tunnistaa, että post niin kuin lähettää sen eteenpäin tai julkais
app.post('/about', (req, res) => {
  //res.send('Ihme maailma'); 
  res.end(JSON.stringify(req.body));
  return 
});

//------------------------------------------------------------------------

//blog 
app.get('/blog', (req, res) => {
  //res.send('Ihme maailma');
  res.render('blog', {title: 'Bloggi'}) //home kotisivu on vain välilehden palkki editoitu & siks siel titlessä lukee <%= title %>
  console.log("blog");
});

app.get('/blog/create', (req, res) => {
  //res.send('Ihme maailma');
  res.render('blog', {title: 'Bloggi'}) //home kotisivu on vain välilehden palkki editoitu & siks siel titlessä lukee <%= title %>
});

//------------------------------------------------------------------------

//Lukaisee create.ejs formaattin toiminnan blogs
app.post('/create', (req, res) => {
  console.log(req.body); //lukaisee käyttäjä näppyttää sinne lomakkeseen jotakin

});

//create
app.get('/create', (req, res) => {
  //res.send('Ihme maailma');
  res.render('create', {title: 'Luo'}) //home kotisivu on vain välilehden palkki editoitu & siks siel titlessä lukee <%= title %>

  console.log("create");
});

//------------------------------------------------------------------------

//Get all names of the list
app.get('/muu', (req, res) => {
  //res.send('Ihme maailma');
  res.end(JSON.stringify(nimiListat)); //toimii myös >> res.end(nimiListat);
  console.log("Nimilista");
});

//Get single member/name of the list & nimiListat << alussa mitä määritetty, että se lukee tiedoston polkun nii kuin nimen tai tekijänsä
app.get('/muu/:id', (req, res) => {
  const found = nimiListat.some( nimiLista => nimiLista.id === parseInt(req.params.id ));

  //JOS löytyy tai EI löydy lähettää viestin sivustoon
  if (found) {
    res.json(nimiListat.filter(nimiLista => nimiLista.id === parseInt(req.params.id)));
    console.log("nimiLista id: " + `${req.params.id}`);

  } else {
    res.status(400). json( { msg: `No member with the id of ${req.params.id}` })
  }

});

//------------------------------------------------------------------------
//>>> TESTAUKSET KÄYTETTY SIVUSTOA POSTMAN - REPL.IT TÄSSÄ EI TOIMI VARSINAISESTI, MUUTEN TOIMII STSRT HERE::::: <<<<

app.put('/muu/members/:id', (req, res) => {
   const found = nimiListat.some( nimiLista => nimiLista.id === parseInt(req.params.id ));

    //jos sellainen id luku/tunnus olemassa tiedostosta
   if (found) 
   {
      const updateNimiLista = req.body;
      nimiListat.forEach(nimiLista => {

        if (nimiLista.id == req.params.id) {
         //määrityksen muutokset tapahtuu tässä, että tiettyt muutokset annettaan niille JOS halutaan tai ei, sama homma jos on määrittämättömiä objekti / stringi tekijänssä se ei muuttu (esim. muutettaan sposti kokonaan tai muu)
          nimiLista.first_name = updateNimiLista.first_name ? updateNimiLista.first_name : nimiLista.first_name;
          nimiLista.last_name = updateNimiLista.last_name ? updateNimiLista.last_name : nimiLista.last_name;

          nimiLista.email = updateNimiLista.email ? updateNimiLista.email : nimiLista.email;
          nimiLista.country = updateNimiLista.country ? updateNimiLista.country : nimiLista.country;
          res.json({ msg: 'Nimilista updated', nimiLista })

          console.log(updateNimiLista)
         }
      })
   } //if (found) ENDS HERE
    else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
   }
});


//Tää toimii vain postman sivustossa, että valitsee toiminnan (delete) ja mitäkin id-tunnusta & muuten toimii
//delete member & poistaa henkilöstö listasta id perusteella
app.delete('/muu/delete/:id', (req, res) => {

  const found = nimiListat.some( nimiLista => nimiLista.id === parseInt(req.params.id ));

  //jos sellainen id luku/tunnus olemassa tiedostosta
  if (found) {
    res.json({ msg: 'Member Deleted', nimiListat: nimiListat.filter(nimiLista => {
        return nimiLista.id === parseInt(req.params.id)
      })
    })
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }

});

//------------------------------------------------------------------------

app.listen(8080);
