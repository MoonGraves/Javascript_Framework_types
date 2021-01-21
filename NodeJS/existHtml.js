/*Kuin avatatisi localhost protokolla ja portti 8080 linkki uuteen tyhjään välilehteen ja loppuun sijoitettun pathname/search. Kuin esim. www.iltalehti.fi/digia-Pala.pala.html (tää on vale sivu)
eli tähän käynnistäessä cmd tai komento node index.js , tyhjään sivustoon määrittyy se localhost:8080, sekä loppu osaan sijoitetaan se olemasas html sivusto, millä tiedostossa on nimetty eli: localhost:8080/kesa.html
*/

var http = require('http');
var url = require('url');
var fs = require('fs');

/*
fs = file system
http = luodaan http protokolla serveri 
*/

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

}).listen(8080);
