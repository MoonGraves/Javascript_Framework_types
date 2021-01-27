// this is node ja application 

/*
npm install body-parser

tässä toiminassa on yhteydessä julkis index.html kanssa, vaikka kansiossa lukee static, sitä ei kuitenkaan julkaista, koska emme halua että käyttäjä tai muu henkilö tietäisi sen kansion nimeä siksi, tässä on yksi methodi kuin (public) ja app.get se lukaisee tämän html-http parametrin tekijänsä, mitä sieltä kuin halutaan lukaista niitä täydentämiä kenttiä 

viimeisenä funktiona, että tunnistaa html body sisäisen asiansa mitä se kuin lähettää submit juttuja, että lukaisee niiitä argumenttejä

urlencoded express false, jonka avulla voimme jäsentää URL-koodatut lomakkeet 

*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({express: false}));
app.use(bodyParser.json());

app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
  console.log("running server port 8080");
});

app.post('/', (req, res) => {
    console.log(req.body);
    // databse work here, give email & password
    //res.send('successfully '');
    res.json({success : true });
});

app.listen(8080);
