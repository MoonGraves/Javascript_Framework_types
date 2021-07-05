<H1> Swagger ohjelmisto lukee data json formaatin 5.7.2021</H1>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käytettävien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

<H3> Lisää tietoa;; https://goswagger.io/use/spec/route.html </H3>

Tässä operaatiossa tapahtuu, että pääsovellus yhdistyy polku reitimmen (routes) kansion kuin tämmöinen RESTful oma toinen asetus ohjelma. Toisessa ohjelmassa kuin lukaisee json tiedoston, missä sisällä (id, title ja teksti), RESTful toiminasta, että tehdään jotakin tälle JSON tiedostolle esim. lukaista, muokata tai poistaa jotakin id-mukaan. Mutta tässä vain toistetaan sen id, mukaan ja lukaistaan määrityn id mukaan oleva sisäisen ominaisuus.


<b>Swagger Default Home Page</b><br>
![Alt text](images/Node-Swagger1.PNG?raw=true "None")

<b>Swagger RESTful posts and Schemas</b>
![Alt text](images/Node-Swagger2.PNG?raw=true "None")