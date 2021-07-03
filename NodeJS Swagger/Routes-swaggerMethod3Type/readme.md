<h2> Swagger ohjelmisto linkki polku methodi 2.7.2021</h2>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käyteättvien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

<h3> Lisää tietoa;; https://goswagger.io/use/spec/route.html </h3>

Operaatiossa ei mitään erikoista, koska tässä ei lueta mitään json tietokantaa ja jne. Vain kuin lähettää pari random/vale lukua, ja toistuvat uudestaan kuin api luettavana tiedostona. Ja yksi (POST) toiminnassa, avauttuu kuin lukko, jotta sieltä tulostuu tunnus (token) id, mitä tämä id liitettään (Authorize):lle. Varsinaisesti tälle AUthorize:lle voidaan syöttää vale tunnustakin, niin kuin tämä järjestelmä ollaan kuin kirjauduttu sisään.

Token:lle on luotu random tunnus luku, mitä käyttään JavaScript määritystä.

Tämä on melko sama kuin se edellinen (Router-swaggerMethod) ja (Router-swaggerMethod2) harjoitus, mutta tässä kaikki RESTful operaatiot tapahtuu tiedoston app.js (/routes/app.js). App.js:ssä pitää vain olla installattu (express) ja reititys (router) ja lopput RESTful (PUT, POST, GET & DELETE) anonyymi funktion komentti /** *Blah blah */

<b>Home page</b><br>
![Alt text](images/Node-Swagger-1.PNG?raw=true "None")

<b>Swagger default pages </b>
![Alt text](images/Node-Swagger-2.PNG?raw=true "None")
![Alt text](images/Node-Swagger-3.PNG?raw=true "None")

<b>Swagger get API-data lite</b>
![Alt text](images/Node-Swagger-4.PNG?raw=true "None")
![Alt text](images/Node-Swagger-4-1.PNG?raw=true "None")

<b>Swagger POST token password</b>
![Alt text](images/Node-Swagger-5.PNG?raw=true "None")
![Alt text](images/Node-Swagger-5-1.PNG?raw=true "None")
![Alt text](images/Node-Swagger-5-2.PNG?raw=true "None")

<b>Swagger token to Authorizations</b>
![Alt text](images/Node-Swagger-6.PNG?raw=true "None")
![Alt text](images/Node-Swagger-6-1.PNG?raw=true "None")






