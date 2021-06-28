<b> Swagger ohjelmisto pohja</b>

Tämä on valmis js pohja sovellus, että itse saa säätää siitä eteenpäin mitä haluaa. Eli lisää swagger ohjelmiston ominaisuuksia, mitkä liittyy siihen RESTful tiedonsiirtoon & mutta tässä on lisätty kaikki mitä siinä pitää olla, periaatteessa valmis RESTful osat, oletuksena määrittämättömiä.

Routes kommenti sisällä pitää olla @swagger ja mitäkin polkua, kuin merkintä linkittä polun menetelmän. Tämä operaatio saa yksilöllisen id:n ,jota käytettään eri paikoissa menetelmien nimessä. Yksi tällainen käyttö menetelmän nimissä esim. asiakkaan tai jokin asian luomiseen varten.
Koska käytettävissä on monia reitittimiä, tämä työkalu ei yritä jäsentää polkuja, jotka annoit valitsemallesi reitityskirjastolle. Joten sinun on määritettävä polkumallisi itse kelvollisessa syntaksiin. 

![Alt text](images/Node-Swagger1Routes.PNG?raw=true "None")

Ennen sitä pitää antaa terminal (komentolähteeseen) mitä npm pakettia pitää ladata. 
NPM on pakettihallintaohjelmisto javascriptiin varten.npm on JavaScript-ajonaikaisen ympäristön Node.js paketin oletushallinta. Se koostuu komentoriviasiakkaasta, jota kutsutaan myös nimellä npm, ja online-tietokannasta julkisista ja maksetuista yksityisistä paketeista, nimeltään npm-rekisteri. Rekisteriin pääsee asiakkaan kautta, ja saatavilla olevia paketteja voi selata ja hakea npm-verkkosivuston kautta.

Tämä on melko sama pohja kuin (Auto-swagger-array), mutta ei lisätty listaan jotakin tekijöitä tai tuotetta. Vain get - osassa lisätty yksi tekijä, että tarkistettaan kuin että tämä toimii & muissa ei varsinaisesti ei tee mitään, vain nähdään se kommento kuin, että oikeasti on tapahtunut jotain. esim. (UPDATE) päivitettäisi tekijän nimi, ja simulaatiossa se oikeasti kuin muuttui ja sama homma (DELETE) , (PUT) ....

<b>Home page</b><br>
![Alt text](images/Node-Swagger1.PNG?raw=true "None")


<b>Swagger page API</b>
![Alt text](images/Node-Swagger2.PNG?raw=true "None")
![Alt text](images/Node-Swagger3.PNG?raw=true "None")
![Alt text](images/Node-Swagger4.PNG?raw=true "None")
![Alt text](images/Node-Swagger5.PNG?raw=true "None")
![Alt text](images/Node-Swagger6.PNG?raw=true "None")
![Alt text](images/Node-Swagger7.PNG?raw=true "None")