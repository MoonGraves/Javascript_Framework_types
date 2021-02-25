//--------------------------------------------
//serving static files with express
//Http post requests with express and body
//working with json data with express
/*
npm install body-parser

tässä toiminassa on yhteydessä julkis index.html kanssa, vaikka kansiossa lukee static, sitä ei kuitenkaan julkaista, koska emme halua että käyttäjä tai muu henkilö tietäisi sen kansion nimeä siksi, tässä on yksi methodi kuin (public) ja app.get se lukaisee tämän html-http parametrin tekijänsä, mitä sieltä kuin halutaan lukaista niitä täydentämiä kenttiä & periaatteessa 

viimeisenä funktiona, että tunnistaa html body sisäisen asiansa mitä se kuin lähettää submit juttuja, että lukaisee niiitä argumenttejä

urlencoded express false, jonka avulla voimme jäsentää URL-koodatut lomakkeet 
*/
//tässä on pv.kk.vvv ja aika koska tämä on luottu ja uppoutuu sinne json tietokantaan ja nii pois päin & 


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const fs = require('fs');

//Lukaisee jos tällainen tiedosto on olemassa
/*
const pathFile = 'user1.json';
fs.access(pathFile, (err) => {
    if (err) {
        console.log("The file does not exist.");
    } else {
        console.log("The file exists.");
    }
});
*/

/////
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({express: false}));
app.use(bodyParser.json());

app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
  console.log("running server port 8000");
  console.log("this is homepage");
});

///sama url vain toinen polkku & tulostaa olemassa olevan json tiedoston, tai suoraan aluksi lukaisee, että onko tällainen tiedosto olemassa
app.get('/ping', (req,res)=> {
  //res.send("Pong")
  //res.sendFile(path.join(__dirname, pathFile)); //lukee olemassa olevan tiedoston
  res.sendFile(path.join(__dirname, 'user1.json'));
  console.log("pingpong");
});

//Create random password & muu homma
var generator = require('generate-password');
var passWord = generator.generate({
	length: 5,
	numbers: true,
});
console.log(passWord);

//middleware function & että antaa lomake täydentämisen mikälie reittiin näkyä 
app.use(express.urlencoded({
  extended: true
}));

//Aika funktio , suora varsinaisesta ajasta & ja määrittyy json tiedostoiksi
const aikaNyt = new Date();
aikaNyt.toJSON();

var myDate = (aikaNyt.getUTCFullYear()) + "/" + (aikaNyt.getMonth() + 1)+ "/" + (aikaNyt.getUTCDate());
console.log("Kalenteri:" + myDate);

//var aikaJson = JSON.stringify({'': aikaNyt});
var aikaJson = JSON.stringify(new Date());
console.log("nyt:" + aikaJson);

//sovelluksen toiminta ja tms & lukaisee http indeksi.html
//toi.. aikaJson kirjoitettaan loppuun päättyyn kuin millon tämä json on luotu aika ja pv.kk
app.post('/', (req, res) => {
    console.log("Lomake ;  " + passWord + JSON.stringify(req.body, null, 2));
    // databse work here, give email & password
    //res.send('successfully '');

    //res.send(JSON.stringify(req.body, null, 2));
    let dataLomake = JSON.stringify(req.body, null, 2);
  
    //Täs luodaan kuin tallennus tiedosto, että käyttäjä x-aika ja jotakin muuta infoa
    //eli user_milloin(pvKkvv.Aika)luotu_pienitunnus, ja sisäisen lomake kirjoitus ja päiväys
    fs.writeFileSync('user_' + aikaJson + '_' + passWord + '_.json', dataLomake + "\n\n" + aikaJson);
    console.log("Saved");

    //res.json({success : true });

    //Tulostetaan formaatti siis lomake nimet, sposti ja jne näkyy heti webbisivustossa
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const bDate = req.body.birthday
    res.end(`Lomake success:: \n Fullname: ${firstName}, ${lastName} , ${bDate} \n email: ${email}`);

});
app.listen(8080);
