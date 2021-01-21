// current timestamp in milliseconds
let date_ob = new Date();

// tän hetkisen pv.kk.vvvv ja aika
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

//päiväys asentaminen erikseen joko pv.kk tai kk.pv (maku asia) ja aika
console.log("Tänään on: " + date + "-" + month + "-" + year + " \n" + hours + ":" + minutes + ":" + seconds);


var http = require('http');
//var dt = require('index');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("asdfasdf \n" );
    
    response.write("Today is: " + date + "-" + month + "-" + year);
    //Tallentaa joku tämmöisen json database tietokanta ja lukaisee minkä file paketin
    //res.write("Today is... " + dt.myDateTime());
    response.end();
}

http.createServer(onRequest).listen(8000);
