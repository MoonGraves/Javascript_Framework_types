/*Tämä liittyy edellisen app.js , mutta vähä selkeämmin erottaa toisesta sovelluksesta ja toiminassa

Tänne tulee, että kirjoitettaan json tiedoston sisälle jotakin muutosta tai lisätään jotaki

READ, WRITE AND UPDATE JSON file:::
*/

//Tässä tapahtuu ensin kuin lisättäisi lisä jotakin lukua jollekin asialle vaikka tilaus luku, tai muu vastaava "value" & 
//toki on muita tapoja, että esim muutettaisi tekijän objektia esim. nimi.

const fs = require("fs");

//function read json file path and some settings
 function jsonReader(filePath, cb) 
{
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
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

//user write json file where will be updates and something will happens by wizard
jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  // increase customer order count by 1
  customer.order_count += 1;
  fs.writeFile("./customer.json", JSON.stringify(customer, null, 2), err => {
    if (err) console.log("Error writing file:", err);
  });
});

/* json file::

>>>> BEFORE <<<<
{
  "name": "John Doe",
  "id": 12345,
  "order_count": 87,
  "address": "Admin Some Drive",
  "city": "Texas"
}

>>>> AFTER <<<<
the order_count one value added
{
  "name": "John Doe",
  "id": 12345,
  "order_count": 88, 
  "address": "Admin Some Drive",
  "city": "Texas"
}
*/

//TODO:: another example if change city or something by same action :::
//change object or give a new name, and new order

//Kysyy käyttäjältä tai antaa käyttäjän antaa iskeä uuden nimen jollekn objektille
const inputName = prompt("New person name: ");
const inputCity = prompt("New city name: ");

jsonReader("./customer.json", (err, customer) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
 //receive input prompt user command, for new name and city names (method 2)
  customer.city = inputCity;
  customer.name = inputName;
 
  // increase customer order count by 1 & or change object or give a new name
//customer.city = "Miami";
//customer.name = "Billy Watson";
  fs.writeFile("./customer.json", JSON.stringify(customer, null, 2), err => {
    if (err) console.log("Error writing file:", err);
  });
  
});

/* method 1
>>>> BEFORE <<<<
{
  "name": "John Doe",
  "id": 12345,
  "order_count": 87,
  "address": "Admin Some Drive",
  "city": "Texas"
}

>>>> AFTER <<<<
the order_count one value added
{
  "name": "Billy Watson",
  "id": 12345,
  "order_count": 88,
  "address": "Admin Some Drive",
  "city": "Miami"
}
*/

/* method 2
>>>> BEFORE <<<<
{
  "name": "John Doe",
  "id": 12345,
  "order_count": 87,
  "address": "Admin Some Drive",
  "city": "Texas"
}

>>>> AFTER <<<<
the order_count one value added
{
  "name": "Christophen Hill",
  "id": 12345,
  "order_count": 88,
  "address": "Admin Some Drive",
  "city": "London"
}
*/

//Tässä on toisenlainen kirjoitus, tai kuin tallentaa json formaatin tonne tiedostolle & toki voi kirjoittaa käsin tai kopsata sen
//Toiminassa funktio luoo uuden json tiedoston nimettynä, ja muuttaa sen luettavaksi, ettei lueta sitä yhteen pötköön

const newObject = {
  name: 'Newbie Corp',
  order_count: 123,
  address: 'Some box Way',
  city: 'LA'
}

const jsonString2 = JSON.stringify(newObject);
const jsonString2Parse = JSON.parse(jsonString2);
console.log(jsonString2Parse.address);

//Tämä kuin kirjoittaa ton newObject funktion itselle, että muodostaa uutteen json tiedostoon & null, 2 tarkoitta kuin määritystä,
//että lukaista järkevämpi kuin lukee yhteenpötköön

fs.writeFile("./newCustomer.json", JSON.stringify(newObject, null, 2), err => {
  if(err) {
    console.log(err);
  } else { 
    console.log("File success");
  }
});

/*
newCustomer.json

{
  "name": "Newbie Corp",
  "order_count": 123,
  "address": "Some box Way",
  "city": "LA"
}


*/
