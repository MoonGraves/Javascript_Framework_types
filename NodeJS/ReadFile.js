var http = require('http');
var fs = require('fs'); // file system module

http.createServer(function (req, res) {

  //Open a file on the server and return its content:
  /*Lukaisee lukaisee olemasas olevan html tiedoston, riittää vain että löytyy sellainen*/
  fs.readFile('demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  
}).listen(8080);
