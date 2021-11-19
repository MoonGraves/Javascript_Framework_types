//Tässä muutama esimerkki js funktiosta, että kuinka lukaisee json tiedoston ja output, mitä ne tulostaa siinä komentolähteessä
//Osassa saattaa olla melko sama methodi, mutta toiminnaltaan oikea suunta & sekä erillisenä määritettään objekti tekijä, että mitä tiettyä halutaan kuin lukaista ja nähdä komentolähteessä 

/* JSON read, write & update notes::
JSON.stringify tarkoittaa: methodin muuntamista javascript:ssä, että objektin tai numeron json merkkijonoksi ja korvaa valinnaisesti arvoa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
JSON.parse tarkoittaa: menetelmä jäsentää JSOn-merkijonoa ja muodostaa merkkijonon kuvaamista javascript arvoa tai objektia. Valinnaisen elvytystoiminnossa voi tarjota suorittamia muunnosta tuloksen olevia objektille ennen sen palautumista.
*/

//TODO: lisäksi tämä vähä toistuu edellisen sovellukseen/harjoitukseen app1-4:seen, mutta tässä on vähä enemmän syvemmin/vaikeampi JSON tiedosto lukeminen

//tässä yritettäisi lukaista tarkemmin sisäisen json datan, että esim user/id 4 tai muu vastaavan sisisen henkilön/objektin yksityiskohdat

//TODO: tämä on json tiedosto (appSoft.json)
/*
[
  {
    "user": "user1",
    "id": 1,
    "username": "cdegoey0",
    "file": "MaurisUllamcorper.mp3",
    "App": "Treeflex"
  }, 

  { 
    "user": "user2",
    "id": 2,
    "username": "akleinbaum1",
    "file": "FelisUtAt.xls",
    "App": "Flowdesk"
  }, 

  {
    "user": "user3",
    "id": 3,
    "username": "lbrighty2",
    "file": "RhoncusAliquam.mp3",
    "App": "Tempsoft"
  }, 

  {
    "user": "user4",
    "id": 4,
    "username": "crotlauf3",
    "file": "NullaUltrices.xls",
    "App": "Bigtax"
  }, 

  {
    "user": "user5",
    "id": 5,
    "username": "vhawford4",
    "file": "CongueEtiamJusto.avi",
    "App": "Konklux"
  }, 

  {
    "user": "user6",
    "id": 6,
    "username": "jblackeby5",
    "file": "EuMassa.avi",
    "App": "Transcof"
  }, 

  {
    "user": "user7",
    "id": 7,
    "username": "smarcinkowski6",
    "file": "NullaDapibus.avi",
    "App": "Ventosanzap"
  }
]
*/

//nodejs / javasciprt annettaan jokin määritys toiminta, tai muu tekijä

//lukaisee vain JSON tiedostona, ja siellä on pieni muutos
try {
  //read exist file and name the object
  const appJSON = fs.readFileSync("./appSoft.json", "utf-8");
  const appJSONParse = JSON.parse(appJSON);

  //TODO-1:: lukaisee vain yksittäisen user/objektin tekijänssä
  console.log(appJSONParse[Math.floor(Math.random() * appJSONParse.length)]);

  console.log(typeof appJSONParse + "-------");

  //TODO-2: toistettaan rajoitettu määrä ja random id määrä & vähä kuin "range", mutta for-loop riittää & tässä toistettaan/haetaan kolme rando käyttäjää/objektia
  for (let i = 0; i < 3; i ++ )
  {
    console.log(appJSONParse[Math.floor(Math.random() * appJSONParse.length)]);
  }

}
catch (err) {
  console.log(err);
}

//OUTPUT::::::::::::::::
/*
{
  user: 'user7',
  id: 7,
  username: 'smarcinkowski6',
  file: 'NullaDapibus.avi',
  App: 'Ventosanzap'
}
object-------
{
  user: 'user2',
  id: 2,
  username: 'akleinbaum1',
  file: 'FelisUtAt.xls',
  App: 'Flowdesk'
}
{
  user: 'user3',
  id: 3,
  username: 'lbrighty2',
  file: 'RhoncusAliquam.mp3',
  App: 'Tempsoft'
}
{
  user: 'user6',
  id: 6,
  username: 'jblackeby5',
  file: 'EuMassa.avi',
  App: 'Transcof'
}
*/
