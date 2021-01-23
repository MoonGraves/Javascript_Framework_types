/*Tässä toiminassa perus protokollan url avataan olemassa olevan kansion image ja tms.
eli periaattess voi lukaista kaikki tiedostot (txt, pdf, kuvat jpg, PNG ja jne mitä pystyy)Käyttänössä url toimii, määrittyjen portti 8080::: localhost:8081/files/lista.json
public kansio tarkoittaa tässä tilanteessa mitä ollaan JULKAISEMASSA, sisäisen kansio on periaateessa se mitä esittellään

ennen sitä pitää installaa/ladataa express, jos check sitä versiota: npm express -v
install kommento::: npm install express
uninstall kommento:::: npm uninstall express

*/

var express = require('express');
var app = express();

//Julkaisu määrittyjen kansion/tekijä nimi 
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('This is homepage');
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
