<h1>Nodejs määrityksen JSON tiedostojen muutosta 31.7.2021 </h1>

Tässä vähä kerrotaan muutama nodejs funktiota ja parametriä, että kuinka voidaan tulostaa json tiedoston polkua ja tämä tiedosto on kuin olemassa.
Erillisenä, vähä tutustutaan <b> json tiedoston kirjoittamista, päivitystä ja jne </b> jokaisen toiminassa vähä kulkeutuu eri methodi, mutta toiminta on melko sama..

Tässä sisältyy muutama json funktion formaatti, mitkä kuin yritettään käsittellä sitä tiedosto json:ta, 
ja syvemmän tekijää, että tiedettäisi mitä sisällä halutaan kuin tulostaa.

esim. tiedoston sisäisen yrityksen yhteistiedot a-paikkan osoite tai b-paikkan osoie ja yms.
<ul> 
  <li>JSON.stringify</li>
  <li>JSON.parse</li>
</ul>

esim 1) lukaistaisi tämä json tiedosto, ja parse:sta valitaan se tekijä objekti esim. tulostettaisi <i> "address"</i> <br>
{ <br>
  "name": "John Dae", <br>
  "order_count": 86, <br>
  "address": "Qwerty Loop Drive", <br>
  "city": "Home" <br>
}<br>

esim2) <br>
{ <br>
  "name": <br>
  {  <br>
   "first" : "Mike", <br>
   "last": "Hill" <br>
  },
  "id" : 123, <br>
  "lives" : { <br>
    "country" : "Canada", <br>
    "city" : "Ottawa" <br>
  }
  
}

<h2>PS: </h2> 
<h3> tässä voi olla jotakin toistuu edellisen harjoituksen nodejs scriptin sovelluksiin... </h3>
