//Tässä muutama esimerkki js funktiosta, että kuinka lukaisee json tiedoston ja output, mitä ne tulostaa siinä komentolähteessä
//Osassa saattaa olla melko sama methodi, mutta toiminnaltaan oikein 

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
output::
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
output::
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
output::
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
output::
Infinity Loop Drive
Texas
*/


///////////////////////////////
//TODO type 5
const fs = require("fs");

try {
  const jsonString = fs.readFileSync("customer.json", "utf-8");
  const customer = JSON.parse(jsonString);
  console.log(customer.city);
} catch(err) 
  {
    console.log(err);
  }

const newObject = {
  name: 'Newbie Corp',
  order_count: 123,
  address: 'Some box Way',
  city: 'LA'
}

const jsonString2 = JSON.stringify(newObject);
const jsonString2Parse = JSON.parse(jsonString2);
console.log(jsonString2Parse.address);

/*
output::
Texas
Some box Way
*/

///////////////////////////////
//TODO type 6
const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'customer.json'));
let student = JSON.parse(rawdata);
console.log(student);

/*
output::
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
output::
Infinity Loop Drive
*/

