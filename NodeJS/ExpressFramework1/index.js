var express = require('express');
var app = express();
const fs = require('fs');

//Julkaisu määrittyjen kansion/tekijä nimi 
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('This is homepage');
})

app.get('/example', function (req, res) {
   res.send('This is example');
})

/*
-tavallisesti olisi, jos syöttääisi nimi ja iän urliin näin, ja res.send sieltä näyttäisi etusivus nimi ja iän mukaan, kuin toistuu nämä parametrit: localhost:8080/examples/Johnny/20

-vaihtoehtoinen lisätä useampi parametri/objekti/asianssa loppuun perän iän jälkeen, tulisi kysymysmerkki, koska että mitä halutaan lisätä, aihe:mitä ja jos jatkuu useampi, niiden väliin tulee alt 6  eli &::
localhost:8080/example/tantta/24?koulu=University&subject=Engineer&student_id=Team21&kurssit=matikka
*/
app.get('/example/:name/:age/', (req, res) => {
  console.log(req.params); //vastaanottaa objektin nimi ja iän ja consoliin ilmestyy se 
  //res.send('example with blah blah');

  //Console&Cmd ei tulostaisi yhteen pötköön siksi tossa lopussa on: null, 2
  console.log( /*req.query */ "Query: " + JSON.stringify(req.query, null, 2));

  //res.send(req.params.name + " : " + req.params.age); 
  /*sivustoon näkyy käyttäjän objekti, mitä url on kirjoitettu & parametrit & voidaan luoda useampi objekti tai tekijä johon juttuun kuten json asianssa liittyvä tyyppi.
  */

  res.send(JSON.stringify(req.query, null, 2));
  //kuin edellinen, että näyttää nimi ja iän, mutta tässä osuudessa näyttää iän jälkisen asianssa ja mitä

  //Urliin syötetttään niitä asioita mitä me haltutaan kuin muodostaase ja toiminnaltaan tässä tallentuu se järjestelmä
  let data = JSON.stringify(req.params && req.query, null, 2);
  
  fs.writeFileSync('test.json', data);
  console.log("Saved");

})

//localhost:8080 porttin luku
var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
