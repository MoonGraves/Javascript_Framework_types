var http = require('http');
var dt = require('index');

function onRequest(request, response) {
    response.writeHead(250, {'Content-Type': 'text/html'});
    response.write('asdf');
    //Tallentaa joku tämmöisen json database tietokanta ja lukaisee minkä file paketin
    res.write("Today is... " + dt.myDateTime());
    response.end();
}

http.createServer(onRequest).listen(8000);

//Kun aktivoit tämän node-jsonfile.js tiedoston, pitäisi samantien luoda tämmöisen tietokanta json tiedoston
//Kuin database/tietokanta tyyppinen näköinen json. tämä on testattu toisessa editointi sivustossa, mutta melko sama tapainen

/* json tiedost näyttää tältä & voi mahdollista olla toinen paketti json mukana:::
{
  "name": "ShoddyLameCarat",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "index": "^0.4.0"
  }
}

*/
