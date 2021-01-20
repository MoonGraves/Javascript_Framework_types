var http = require('http');

//funktio & serverin luonti 
function onRequest(request, response) {
    response.writeHead(250, {'Content-Type': 'text/plain'});
    response.write('asdf');
    response.end();
}

http.createServer(onRequest).listen(8000);

//cmd:ssä & kommenossa aktivoit tämän js tiedoston eli: node firstApp.js (mikä sen tiedston nimi onkaan)
//tyhjän välilehdessä sitten avaat localhost:8080


//jos olisi määritetty 127.0.0.1 alussa sitten avataan välilehdessä: 127.0.0.1:8080
//mutta tämä on toinen asia
