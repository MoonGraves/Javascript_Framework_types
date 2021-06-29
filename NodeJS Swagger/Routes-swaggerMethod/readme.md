<b> Swagger ohjelmisto linkki polku methodi</b>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käyteättvien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

Lisää tietoa;; https://goswagger.io/use/spec/route.html

Operaation tiedosto lukemista tässä json:ssa käytettään esim. kirjaa, sen kohdistuva (random) id tunnus & kirjan nimi, kirjoittaja ja julkaisu kustantamo (esim. otava, john wiley & pälä pälä)


<b>Huom! </b> Latauksessa/installation pitää huomioida, että tämä swagger ohjelmiston paketti "swagger-jsdoc" pitää olla 6.0.1, muuten se ei toimi & sama homma lowdb pitää olla 1.0.0

<b> npm i swagger-jsdoc@6.0.1 </b>
<b> npm install lowdb@1.0.0 </b>

<b>Swagger page API</b><br>
![Alt text](images/Node-Swagger1.PNG?raw=true "None")


![Alt text](images/Node-Swagger2.PNG?raw=true "None")
![Alt text](images/Node-Swagger3.PNG?raw=true "None")
![Alt text](images/Node-Swagger4.PNG?raw=true "None")
![Alt text](images/Node-Swagger5.PNG?raw=true "None")
![Alt text](images/Node-Swagger6.PNG?raw=true "None")
![Alt text](images/Node-Swagger7.PNG?raw=true "None")
