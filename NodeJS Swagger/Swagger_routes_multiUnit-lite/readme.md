<H1> Swagger ohjelmisto linkki polku methodi</H1>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käytettävien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

Lisää tietoa;; https://goswagger.io/use/spec/route.html

Tämä toiminta sovellus perustuu edellisen ohjelmasta, mitä on kuin yhteenveto ja lisätään monipuolisia toimintoja mitä voi olla mahdollista yhteen kokonaiseen projektiin. Sekä tähän vaikuttaa pientä käyttöliittymää (UI, user interface) & ja useiden toimintojen rakenteita, että ettei ne mene ristiin ja sekaisin.


Tämä oli alunperin kopio <b> (Router-swaggerMethod3Type):stä </b>, mutta lisätty muita osia sisään edellisien harjoituksien ohjelmistoista. Kokonaisuudessan tämä on kuitenkin RESTful operaatio toiminta, että yritettään katsoa saadaanko vielä yksi yksikkö sisään. Tässä puuttuu kuin json tiedosto, mikä perustuu n. 3-4 tiedosto paketti lataukseen, mitkä ovat <b> "lowdb", "morgan", "nanoid" & "cors" </b>. Jokaisella on oma toiminta paketti järjestelmä, että <b> "FileSync" </b> on tämmöinen paikallinen JSON tietokanta, mitä tukee NodeJS ja yms ohjelmistoa.

Näitä n.3-4kpl tiedostosta löytyy lisää npm sivustosta kuitenkin, mitkä perustuvat sieltä.

<b> 
- lowdb : datan varastointi <br>
- morgan : pyyntojen vastaanotto <br>
- nanoid : tunnuksen/id luomiseen <br>
- cors : alkuperäisen välisen politiikan laatimiseksi. <br>
</b> <br>


<h3>Default NodeJS home page</h3><br>
![Alt text](images/Node-Swagger-1.PNG?raw=true "None") <br>

<h3>Swagger home page, options and RESTful </h3>
![Alt text](images/Node-Swagger-2.PNG?raw=true "None")
![Alt text](images/Node-Swagger-2-1.PNG?raw=true "None") <br>

<h3>Schema show two items and examples </h3>
![Alt text](images/Node-Swagger-3.PNG?raw=true "None")