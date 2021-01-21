var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

//var adr = 'https://www.iltalehti.fi/digiuutiset/a/697bf5f7-0743-4304-a402-042256cc13c9';
//Parse the address:
var q = url.parse(adr, true);


/*The parse method returns an object containing url properties*/
console.log("Protokolla: " + q.protocol);
console.log("sivusto :" + q.host);
console.log("asia: " + q.pathname);
console.log("Haku: " + q.search);
console.log("Portti: " + q.port);

console.log("\n" + adr);


/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
//console.log(qdata.month);

/*______________________*/
//Output::::
/*

Protokolla: https:
sivusto :www.iltalehti.fi
asia: /digiuutiset/a/697bf5f7-0743-4304-a402-042256cc13c9
Haku: null
Portti: null

https://www.iltalehti.fi/digiuutiset/a/697bf5f7-0743-4304-a402-042256cc13c9

----Toinen esim---

Protokolla: http:
sivusto :localhost:8080
asia: /default.htm
Haku: ?year=2017&month=february
Portti: 8080

*/
