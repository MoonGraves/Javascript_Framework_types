//server.js or how it calls~~ 

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //File path dynamic & build file path
  let filePath = path.join(__dirname, 
  'public', req.url === '/' ? 
  'index.html' : req.url);

  //console.log(filePath);
  //res.end();

  //extension of file
  let extname = path.extname(filePath);

  //initial content Type
  let contentType = 'text/html'

  //check ext and set content type 
  switch(extname) {
    case '.js':
    contentType = 'text/javascript';
    break;

    case '.css':
    contentType = 'text/css';
    break;

    case '.json':
    contentType = 'application/javascript';
    break;

    case '.png':
    contentType = 'image/png';
    break;

    case '.jpg':
    contentType = 'image/jpg';
    break;
  }

  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if(err.code == 'ENOENT'){
        //page not found & lukaisee minkä tahanssa polkujen loppuosan esim. localhost:8080/asdf
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(content, 'utf8');
        })
      } else {
        //some server error 
        res.writeHead(500);
        console.log("Error page 404");
        res.end(`Server error: ${err.code}`);
      }
    } else {
      //success & mikä tahansa sivusto polku osa esim. localhost:8080/about.html & kotisivusto on pelkä: localhost:8080/ <<< sama >>> localhost:8080/index.html
      res.writeHead(200, {'Content-Type': contentType });
      console.log(`Success page: ${filePath}`);
      res.end(content, 'utf8');
    }
  });

}); //http.serverServer ENDS


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running port ${PORT}`));
