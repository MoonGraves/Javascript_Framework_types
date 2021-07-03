<b> Swagger ohjelmisto linkki polku methodi</b>

<b>Swagger routes operaatio:</b>
Pääsovellus (index.js) lukaisee operaation toisesta tiedoston kautta, että sieltä kuin vastaanottaa/lähettää toiminnan mitä sieltä haluttaan kuin tehdä. Toisessa kansion tiedostosta on määritetty RESTful toiminta, eli (PUT, POST, GET & DELETE) teknisiä ominaisuuksia. 

Lisäksi käytettävien reittiä voi olla monta, mutta tätä työkalua ei riitä vain, että jäsentää polun ja tekijä antaa valitsemanssa reitityskirjaston. Tässä teossa pitää olla määreltävinä polkumalli teossa kelvolliseen syntaksiin.

Lisää tietoa;; https://goswagger.io/use/spec/route.html

Tämä toiminta sovellus perustuu edellisen ohjelmasta, mitä on kuin yhteenveto ja lisätään monipuolisia toimintoja mitä voi olla mahdollista yhteen kokonaiseen projektiin. Sekä tähän vaikuttaa pientä käyttöliittymää (UI, user interface) & ja useiden toimintojen rakenteita, että ettei ne mene ristiin ja sekaisin.


Tämä oli alunperin kopio (Router-swaggerMethod3Type):stä, mutta lisätty muita osia sisään edellisien harjoituksien ohjelmistoista. Kokonaisuudessan tämä on kuitenkin RESTful operaatio toiminta, että yritettään katsoa saadaanko vielä yksi yksikkö sisään. Tässä puuttuu kuin json tiedosto, mikä perustuu n. 3-4 tiedosto paketti lataukseen, mitkä ovat "lowdb", "morgan", "nanoid" & "cors". Jokaisella on oma toiminta paketti järjestelmä, että "FileSync" on tämmöinen paikallinen JSOn tietokanta, mitä tukee NodeJS ja yms ohjelmistoa.

<b> 
- lowdb : datan varastointi <br>
- morgan : pyyntojen vastaanotto <br>
- nanoid : tunnuksen/id luomiseen <br>
- cors : alkuperäisen välisen politiikan laatimiseksi. <br>
</b>


<b>Home page</b><br>
![Alt text](images/Node-Swagger-1.PNG?raw=true "None")