//Tässä muutama esimerkki js funktiosta, että kuinka lukaisee json tiedoston ja output, mitä ne tulostaa siinä komentolähteessä
//Osassa saattaa olla melko sama methodi, mutta toiminnaltaan oikea suunta & sekä erillisenä määritettään objekti tekijä, että mitä tiettyä halutaan kuin lukaista ja nähdä komentolähteessä 

/* JSON read, write & update notes::
JSON.stringify tarkoittaa: methodin muuntamista javascript:ssä, että objektin tai numeron json merkkijonoksi ja korvaa valinnaisesti arvoa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
JSON.parse tarkoittaa: menetelmä jäsentää JSOn-merkijonoa ja muodostaa merkkijonon kuvaamista javascript arvoa tai objektia. Valinnaisen elvytystoiminnossa voi tarjota suorittamia muunnosta tuloksen olevia objektille ennen sen palautumista.
*/

//TODO: lisäksi tämä vähä toistuu edellisen sovellukseen/harjoitukseen app1 tai 2:seen, mutta tässä on vähä enemmän syvemmin/vaikeampi JSON tiedosto lukeminen

//json tiedosto
const appSoft = [
  {
    "id": 1,
    "username": "cdegoey0",
    "file": "MaurisUllamcorper.mp3",
    "App": "Treeflex"
  }, 

  {
    "id": 2,
    "username": "akleinbaum1",
    "file": "FelisUtAt.xls",
    "App": "Flowdesk"
  }, 

  {
    "id": 3,
    "username": "lbrighty2",
    "file": "RhoncusAliquam.mp3",
    "App": "Tempsoft"
  }, 

  {
    "id": 4,
    "username": "crotlauf3",
    "file": "NullaUltrices.xls",
    "App": "Bigtax"
  }, 

  {
    "id": 5,
    "username": "vhawford4",
    "file": "CongueEtiamJusto.avi",
    "App": "Konklux"
  }, 

  {
    "id": 6,
    "username": "jblackeby5",
    "file": "EuMassa.avi",
    "App": "Transcof"
  }, 

  {
    "id": 7,
    "username": "smarcinkowski6",
    "file": "NullaDapibus.avi",
    "App": "Ventosanzap"
  }, 

  {
    "id": 8,
    "username": "clum7",
    "file": "PharetraMagna.xls",
    "App": "Ximokowe"
  }, 

  {
    "id": 9,
    "username": "fportingale8",
    "file": "Suscipit.avi",
    "App": "Fix San"
  },

  {
    "id": 10,
    "username": "keddisforth9",
    "file": "LoremVitaeMattis.ppt",
    "App": "Wrapsafe"
  }
]

//pari testausta jotta voitaisi toistaa sisäisen datan esim. yksittäisen nimen/tekijänssä & muutama keinno joko "for-loop" & "try - catch" ja jne.

//TODO:: 1 - esim
//for loop testaus, jotta toistettaisi kerran tai useamman kerran:
for (let i = 0; i < 5; i++ ) {
  const objName = appSoft[i];
  console.log("Username: " + objName.username);

}

/*OUTPUT::::::::::::::::::
Username: cdegoey0
Username: akleinbaum1
Username: lbrighty2
Username: crotlauf3
Username: vhawford4
*/

//TODO:: 1.1 - esim & sama kuin 1 , mutta sisälle try-catch
//for loop + try catch, jotta toistettaisi kerran tai useamman kerran:
for (let i = 0; i < 5; i++ ) {
  const objName = appSoft[i];
  console.log("Username: " + objName.username);

  try {
    const randomName = objName[Math.floor(Math.random() * objName.length)];
    console.log("App: " + objName.App);
  }
  catch(err)
  {
    console.log(err);
  }

}

/*OUTPUT::::::::::::::::::
Username: cdegoey0
App: Treeflex
Username: akleinbaum1
App: Flowdesk
Username: lbrighty2
App: Tempsoft
Username: crotlauf3
App: Bigtax
Username: vhawford4
App: Konklux
*/

//TODO 2 - esim
//tämä perustuu kaikki JSON sisäisen datat

const appJSON = JSON.stringify(appSoft);
const appJSONParse = JSON.parse(appJSON);
console.log(appJSONParse); //tulostaa kaikki
console.log("\n");



