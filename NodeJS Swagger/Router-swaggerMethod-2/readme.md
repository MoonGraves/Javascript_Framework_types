<b> Swagger ohjelmisto linkki polku methodi</b>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käyteättvien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

Lisää tietoa;; https://goswagger.io/use/spec/route.html

Operaation tiedosto lukemista tässä json:ssa käytettään esim. kirjaa, sen kohdistuva (random) id tunnus & kirjan nimi, kirjoittaja ja julkaisu kustantamo (esim. otava, john wiley & pälä pälä)

Tämä on melko sama kuin se edellinen (Router-swaggerMethod) harjoitus, mutta tässä kaikki RESTful operaatiot tapahtuu tiedoston book.js (/routes/book.js). Books.js :ssä pitää vain olla installattu (express) ja reititys (router) ja lopput RESTful (PUT, POST, GET & DELETE) anonyymi funktion komentti /** *Blah blah */

<b>Home page</b><br>
![Alt text](images/Node-Swagger-1.PNG?raw=true "None")
