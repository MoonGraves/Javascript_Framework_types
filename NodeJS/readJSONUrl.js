/*
ohje & toiminta:
tässä vain riittää liittää olemassa olevan url, missä näkyy json tiedosto muodossa. 
Tänne linkkittää sen url:in ja loppu perään polku kautta numero, mikäli pystyy & niin näyttää erikseen sen tekijän ja infon.
Koska vähentää sitä datan esiintymistä, että näkyy paremmin kuin yhteen pötköön dataa.

ainakin näitä voisi kokeilla, ja testata vähä::
https://jsonplaceholder.typicode.com/users/
https://jsonplaceholder.typicode.com/posts/

ennen sitä pitää ladata tämä paketti::
npm install require

*/

var request = require("request")

//url of the json documents
var url = "https://jsonplaceholder.typicode.com/users/1"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

/*
output cmd/shell::
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}


*/
