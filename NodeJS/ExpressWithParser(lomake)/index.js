//serving static files with express
//Http post requests with express and body
//working with json data with express
/*
npm install body-parser

tässä toiminassa on yhteydessä julkis index.html kanssa, vaikka kansiossa lukee static, sitä ei kuitenkaan julkaista, koska emme halua että käyttäjä tai muu henkilö tietäisi sen kansion nimeä siksi, tässä on yksi methodi kuin (public) ja app.get se lukaisee tämän html-http parametrin tekijänsä, mitä sieltä kuin halutaan lukaista niitä täydentämiä kenttiä 

viimeisenä funktiona, että tunnistaa html body sisäisen asiansa mitä se kuin lähettää submit juttuja, että lukaisee niiitä argumenttejä

urlencoded express false, jonka avulla voimme jäsentää URL-koodatut lomakkeet 
*/
//tässä on pv.kk.vvv ja aika koska tämä on luottu ja uppoutuu sinne json tietokantaan ja nii pois päin & 

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');

//////
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({express: false}));
app.use(bodyParser.json());

app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
  console.log("running server port 8080");
});

//Aika funktio , suora varsinaisesta ajasta & ja määrittyy json tiedostoiksi
const aikaNyt = new Date();
aikaNyt.toJSON();

var aikaJson = JSON.stringify({'now': aikaNyt});
console.log(aikaJson);

//sovelluksen toiminta ja tms & lukaisee http indeksi.html
app.post('/', (req, res) => {
    console.log("Lomake ;  " + JSON.stringify(req.body, null, 2));
    // databse work here, give email & password
    //res.send('successfully '');

    //res.send(JSON.stringify(req.body, null, 2));
    let data = JSON.stringify(req.body, null, 2);
  
    fs.writeFileSync('user1.json', data + "\n\n" + aikaJson);
    console.log("Saved");

    res.json({success : true });
});

//console.log("listening port 8080");
app.listen(8080);
