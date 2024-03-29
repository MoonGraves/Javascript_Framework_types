//TÄMÄ ON PÄÄSOVELLUS
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const request = require("request");

//loading node's file systems
const fs = require('fs');

//Aktivoidaan tämä ejs html-editoitava pohja setti
const ejs = require('ejs');
//EJS Engine & ensimmäinen sivu
app.set('view engine', 'ejs');
app.use(cookieParser());

//lukaisee/käsittelee olemassa olevan kansion ja sisäisen tiedoston JSON muodon & ja ejs kohdassa pitää määrittää sama tekijä, että tämä on kuin kohde osoite & keksi jotakin companyList:lle
app.locals.classUsers = require('./data/users.json');
app.locals.companyList = require('./data/comp.json');

//configure our express instance with some body-parser settings
//including handling JSON datas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//TODO:: JSON formaatti url linkki
const urlData = "https://jsonplaceholder.typicode.com/posts/2"

request({
    url: urlData,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body) // Print the json response
    }
});

//Tähän voisi kokeilla esim. pääsovellus vastaanottaa url json datat ja siitä julkaisee itse erillisenä polkuna tiedostossa
app.get("/about", (req, res ) => {
  res.render("about");
});

const authorData = 
{
    name : 'Some Title',
    skills: ['HTML5', 'Nodejs', 'Mongodb', 'Linux', 'Cisco', 'Adobe', 'Autodesk', 'JavaScript', 'Php', 'C#', 'C++' , 'Python' , 'Matlab', 'Reach', 'Threejs', 'Jquery', 'Django', 'Android', 'Kotlin', 'IOS'],
};

//oma main polku & toistaa authorData sisäisen json parametrit
app.get("/main", function (req, res ) {
  res.render("main" , { authorData: authorData } );
});
//consider routes path folder/files, it will set to default home page
const routes = require('./routes/routes.js')(app, fs);

const jsonAuthorData = JSON.stringify(authorData);
const jsonAuthor2Data = JSON.parse(jsonAuthorData);

for (let randomSkill = 0; randomSkill < 5; randomSkill++ ) {
  const randomSkillName = jsonAuthor2Data.skills[Math.floor(Math.random() * jsonAuthor2Data.skills.length)];

  console.log("skillit:" + randomSkillName);
};

//set server running and port number
const server = app.listen(8080, () => {
  console.log('Server is running %s...', server.address().port);
});
