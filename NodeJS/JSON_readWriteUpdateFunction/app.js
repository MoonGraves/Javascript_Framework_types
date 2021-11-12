//Tässä muutama esimerkki js funktiosta, että kuinka lukaisee json tiedoston ja output, mitä ne tulostaa siinä komentolähteessä
//Osassa saattaa olla melko sama methodi, mutta toiminnaltaan oikea suunta & sekä erillisenä määritettään objekti tekijä, että mitä tiettyä halutaan kuin lukaista ja nähdä komentolähteessä 

/* JSON read, write & update notes::
JSON.stringify tarkoittaa: methodin muuntamista javascript:ssä, että objektin tai numeron json merkkijonoksi ja korvaa valinnaisesti arvoa

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

JSON.parse tarkoittaa: menetelmä jäsentää JSOn-merkijonoa ja muodostaa merkkijonon kuvaamista javascript arvoa tai objektia. Valinnaisen elvytystoiminnossa voi tarjota suorittamia muunnosta tuloksen olevia objektille ennen sen palautumista.
*/

//TODO type 1
const fs = require("fs");

try {
  //read exist file and name the object
  const jsonString = fs.readFileSync("./customer.json", "utf-8");
  const customer = JSON.parse(jsonString);
  console.log(customer.city);
} 
  catch(err) 
  {
    console.log(err);
  }
  
/*
output::::::::::::::::::::
Texas

*/  

///////////////////////////////
//TODO type 2
const fs = require("fs");

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
});
/*
output:::::::::::
File data: {
  "name": "Mega Corp.",
  "order_count": 83,
  "address": "Infinity Loop Drive"
}
*/

///////////////////////////////
//TODO type 3
const fs = require("fs");

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } else {
  const data = JSON.parse(jsonString); 
  console.log(data.address + "\n" + data.city);
  }
});

/*
output:::::::::::
Infinity Loop Drive
Texas

*/

///////////////////////////////
//TODO type 4
const fs = require("fs");

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(err);
  } 
  
  else 
  {
    try 
    {
      const data = JSON.parse(jsonString); 
      console.log(data.address + "\n" + data.city);
    } catch(err) {
      console.log("Error parsing json", err);
    }
  }
  
});

/*
output:::::::::::
Infinity Loop Drive
Texas
*/


///////////////////////////////
//TODO type 5 & uusi objekti
const fs = require("fs");

try {
  const jsonString = fs.readFileSync("customer.json", "utf-8");
  const customer = JSON.parse(jsonString);
  console.log(customer.city);
} catch(err) 
  {
    console.log(err);
  }

//uusi objekti
const newObject = 
{
  name: 'Newbie Corp',
  id_count: 123,
  address: 'Some Road Way',
  city: 'LA',
  phones: {
    office : "office num: 464-676-4539",
    user : {
    home: "home num: 168-594-4511",
    mobile: "mobile: +000 123-456-7890"
    },

    fax: "fax num: 0147-8520-963"
  },

  company: {
    name: 'XY company',
    country : {
      name : 'US',
      city: [ ["NY"], ["Vegas"], ["Texas"], ["Los Angeles"], ["Miami"], ["Washington"], ["New Orleans"], ["Chicago"], ["Boston"], ["Houston"], ["Seattle"], ["Austin"], ["Dallas"], ["Denver"], ["Nashville"], ["Atlanta"] ]
    }
  }

};

//käsittelee tuota toista json dataa (newObject) jokaista objektia erikseen
const jsonString2 = JSON.stringify(newObject);
const jsonString2Parse = JSON.parse(jsonString2);
console.log("\n \nsecond object parameters:: \n" + jsonString2Parse.address);

//output officen number
console.log('Käyttäjän puhelin: ' + jsonString2Parse.phones.user.mobile); 
console.log(jsonString2Parse.city);

//output this object informations about XY company, right locations country and city where company got the office for example miami, washington and ect.
console.log('Toinen yritys sijaitsee: ' + jsonString2Parse.company.country.name + ' , ' + jsonString2Parse.company.country.city);

//valitaan json sisäisen datan random/satunnaisen city-objektin
const randomCity = jsonString2Parse.company.country.city[Math.floor(Math.random() * jsonString2Parse.company.country.city.length)];
console.log(randomCity); //output one random city of array lists

/*
output:::::::::::
second object parameters::
Some Road Way
Käyttäjän puhelin: mobile: +000 123-456-7890
LA

Toinen yritys sijaitsee: US , NY,Vegas,Texas,Los Angeles,Miami,Washington,New Orleans,Chicago,Boston
[ 'Miami' ]
*/

/////////////////////////////////////////////////
//TODO type 5.1
//tämä jatkuu edelliseen 5 tehtävään/harjotukseen, mutta kaupunki osat pysyvät ennallaan ja tässä yritettään käyttä for loop - methodia ja toisteen useampi kuin yksi randomi kaupunki

//testi for loop + random (for loop, että toistetaan jotakin x-kertaa ja jne & sama tässä käytettään JSON-parsea) CHEKCH TODO 5)
for (let ranCityName = 0; ranCityName < 5; ranCityName++) {
  const randomCity2 = jsonString2Parse.company.country.city[Math.floor(Math.random() * jsonString2Parse.company.country.city.length)];
  console.log("\nKaupunki: " + randomCity2)
}


/*
output:::::::::
Kaupunki: New Orleans

Kaupunki: Vegas

Kaupunki: Chicago

Kaupunki: Chicago

Kaupunki: Austin
*/


///////////////////////////////
//TODO type 6
const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'customer.json'));
let student = JSON.parse(rawdata);
console.log(student);

/*
output:::::::::::
{ name: 'Mega Corp.', order_count: 83, address: 'Infinity Loop Drive' }
*/

///////////////////////////////
//TODO type 7

const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) 
    {
      return cb && cb(err);
    }
    try 
    {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } 
    
    catch (err) 
    {
      return cb && cb(err);
    }
    
  });
}

jsonReader("./customer.json", (err, customer) => 
{
  if (err) 
  {
    console.log(err);
    return;
  }
    console.log(customer.address); // => "Infinity Loop Drive"
});

/*
output:::::::::::
Infinity Loop Drive
*/

