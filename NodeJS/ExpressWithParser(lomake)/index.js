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
const fileUpload = require('express-fileupload')
//const moment = require('moment')

const members = require('./Members'); //lukaisee olemassa olevan tiedosto polkun
const logger = require('./middleware/logger') //sama kuin edellinen, vain edessä on kansion nimi

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

///////////////
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({express: false}));
app.use(bodyParser.json());

//Static files & lukaisee muu kansion ja nimen
app.use('/js', express.static((__dirname + 'static/js'))); //javascript

//Kotisivu
app.get('/', (req,res)=> {
  //res.send('Ihme maailma');
  res.sendFile(path.join(__dirname, 'static' , '/index.html'));
  console.log("running server port 8000");
  console.log("this is homepage");
});

//Toinen polku sivusto
app.get('/about', (req,res)=> {
  res.sendFile(path.join(__dirname, 'static' , '/about.html'));
  console.log("About");
}); 

///sama url vain toinen polkku & tulostaa olemassa olevan json tiedoston, tai suoraan aluksi lukaisee, että onko tällainen tiedosto olemassa
app.get('/ping', (req,res)=> {
  //res.send("Pong")
  //res.sendFile(path.join(__dirname, pathFile)); //lukee olemassa olevan tiedoston
  res.sendFile(path.join(__dirname, './tilaus' , 'test.json'));
  console.log("pingpong");
});

//Lukaisee luoneen json formaatin ja tiedoston & nappaa kaikki henkilöt (kaks vaihtoehto toimivat)
// 1)::
/*
app.get('/api/members', (req,res) => {
  //res.json(members);
  res.end(JSON.stringify(members));
  console.log("JSON members");
});*/

// 2)::
app.get('/api/members', (req,res) => res.json(members));

//Init middleware
app.use(logger);

//get single members esim. localhost:8080/api/members/2 & jos tiedostossa ei ole sellaista id lukua sitten vaan pelkä tyhjä sivu
app.get('/api/members/:id', (req, res) => {
  //res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member exist id of: ${req.params.id} ` });
  }

});


////////////////////////////////////////////////////////////
//Create random password / numero & muu homma

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
console.log("Kalenteri:" + myDate); //pv.kk.vvvv

//var aikaJson = JSON.stringify({'': aikaNyt});
var aikaJson = JSON.stringify(new Date());
console.log("nyt:" + aikaJson); //pvkk_HhMinSs

//täs luotu formaatti salasana, mutta fs.writeFileSync kohdassa luodaan se tallentava tiedosto tyyppi. siksi lisätty random salasana funktio/parametri formaatti npm lataus & salasana pituus ja tuleeko numeroa


//tulostaa cmd/konsoliin se randomi salasana + määritty sana
//console.log(password + "asd"); 

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
    fs.writeFileSync('user_' + aikaJson + '_' + passWord + '_.json', dataLomake + "\n" + "date: " + aikaJson );
    console.log("Saved");

    //appendfile kuin kirjoittaa samaan olemassa olevaan kansioon tai tiedoston peräään kuin kirjoitettu sama asia tai vastaava
    fs.appendFile(path.join(__dirname, '/tilaus', 'test.json'), ` \n { ${dataLomake} ${myDate} } \n `,
     err => {
       if(err) throw err;
       console.log("upload kirjoituksenne..");
    });

    //res.json({success : true });

    /*Tulostetaan formaatti siis lomake nimet, sposti ja jne näkyy heti webbisivusto &
    pitää seurata joko <input type = "täää" <<< mukaan tai name ="tää" kuin id-tunnus
    tai laberl for "tämä" << mikälie 
    */
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const bDate = req.body.birthday
    const genderBox = req.body.genderRadio

    const viestiArea = req.body.textArea
    res.end(`Lomake success:: \n Fullname: ${firstName}, ${lastName} \n ${genderBox} , \n ${bDate} \n email: ${email} \n Leave the message: ${viestiArea}`);

});
app.listen(8080);
