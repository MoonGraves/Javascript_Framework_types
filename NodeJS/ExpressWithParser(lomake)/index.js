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

const members = require('./Members'); //lukaisee olemassa olevan tiedosto polkun

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

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : path.join(__dirname,'tmp'),
})); //jokin tiedoston uppotaminen

/////
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
  res.sendFile(path.join(__dirname, 'user1.json'));
  console.log("pingpong");
});

//Lukaisee luoneen json formaatin & nappaa kaikki henkilöt (kaks vaihtoehto toimivat)
// 1)::
/*
app.get('/api/members', (req,res) => {
  //res.json(members);
  res.end(JSON.stringify(members));
  console.log("JSON members");
});*/

// 2):: localhost:8080/api/memmbers
app.get('/api/members', (req,res) => {
  res.json(members)}
);

//joka kerta kun käyttäjä syöttää polkuu loppuosan eli /done, niin se kuin avaisi toisen sivuston, vain määritetty olemassa oleva linkki. esim html; kun klikkaat sitä sinistä tekstin-osoittavaa polkua niin se avaa toisen url sivuston
/*
app.get('/done', (req,res)=> { 
    res.statusCode = 302;
  res.setHeader("Location", "https://ExpressWithParseremailandpasslomake.zhaotan18x.repl.co/ping");
  res.end();
});
*/

//////////////////////////////////////////////////////////////////////////////
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

//täs luotu formaatti salasana, mutta fs.writeFileSync kohdassa luodaan se tallentava tiedosto tyyppi. siksi lisätty random salasana funktio/parametri formaatti npm lataus & salasana pituus ja tuleeko numeroa

//tulostaa cmd/konsoliin se randomi salasana + määritty sana
//console.log(password + "asd"); 

//sovelluksen toiminta ja tms & lukaisee http indeksi.html
//toi.. aikaJson kirjoitettaan loppuun päättyyn kuin millon tämä json on luotu aika ja pv.kk


app.post('/', (req, res) => {

    if (req.files) 
    {
      console.log(req.files)
      var file = req.files.file //loppu osan file, koska html on määritetty sen id-tunnus mukaa
      var filename = file.name
      console.log(filename);

      file.mv('./uploads/' +filename, function(err) {
        if (err) {
          res.send(err)
        }
        else {
          console.log("File uploaded");
          //res.send("file uploaded")
        }
      }) //funktio siirrettään tiety kansioon/kohteeseen
    }

    
    console.log("Lomake ;  " + passWord + JSON.stringify(req.body, null, 2));
    // databse work here, give email & password
    //res.send('successfully '');

    //res.send(JSON.stringify(req.body, null, 2));
    let dataLomake = JSON.stringify(req.body, null, 2);
  
    //Täs luodaan kuin tallennus tiedosto, että käyttäjä x-aika ja jotakin muuta infoa
    //eli user_milloin(pvKkvv.Aika)luotu_pienitunnus, ja sisäisen lomake kirjoitus ja päiväys
    fs.writeFileSync('user_' + aikaJson + '_' + passWord + '_.json', dataLomake + "\n\n" + aikaJson );
    console.log("Saved");

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
