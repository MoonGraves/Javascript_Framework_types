var http = require('http'); //http 
const _ = require('lodash');

var theItems = ["apple", "carrot", "orange", "cheese", "tomate", "lemon", "pork", "olive", "banana", "potato"];

var newItems = [];
//var items = ['Yes', 'No', 'Maybe'];

for(var i = 0; i < 5; i++) {
  var idx = Math.floor(Math.random()*theItems.length);
  newItems.push(theItems[idx]);
  theItems.splice(idx,1);
}
//Tulostettaann random safkat, edellisen valittujen forloop funktiosta
console.log("Random food now: " + newItems)



//funktio & serverin luonti 
function onRequest(request, response) {
    response.writeHead(250, {'Content-Type': 'text/html'});
    response.write('Random food is::  ');
    response.write(`${newItems}`);
    response.end();
}

http.createServer(onRequest).listen(8000);

/*Output & console/cmd and website localhost:8000:::

Random food now: olive,orange,cheese,carrot,apple
Localhost website: Random food is:: orange,apple,lemon,cheese,olive

*/
