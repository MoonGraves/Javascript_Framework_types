<h1>Express sivuston video toistin 30.7.2021 </h1>

Videon toisto mitä käytetään pohjana <b>html</b> tai toista tyyppistä mm. ejs , hbs control flow tyypistä muotoa.

Tässä määritettään operaatiossa, että miten nopea videota voisi nopeuttaa sen edistymisen nopeuden.
Kun videon katsoja ei tarvitse laittaa videota hetkeksi tauolle, jotta se harmaa viiva kulkee saman matkan kuin video pyörii kuten youtubessä, näkee punaisen viivan takana on sellainen harmaa viiva/linja

<li> Nodejs methodissa käytettään "statSync", mikä palauttaa tiedoston tilastoon. </li>
<li>Tämän tilastojen joukossa on tiedostokoko, mikä on tiedettävä, kun ladattu pala on tullut tiedoston loppuun. </li>
<li>Voidaan käyttää "stat" tilannetta, kyn yrittää välttää synkronoitumista. </li>

Striimauksen tiedostossa tulee pitää luoda virran, jotta annettu tiedostossa on alku- ja loppu osa.

Palojen/osan kokoa, aloitusosassa on saatavana pyynnössä. Saadakseen, pitää tietää kuinka suuri osa tiedostoa ladataan.

<li> HTTP2, tätä käytettään osittaisessa sisllössä, mitä yhdistää headerin olevan alle, että pitää määriittää tämän alle: </li>
<br>
<b> Voi olla melkoinen monimutkainen funktio </b><br>
<br>
'Content-Range': 'bytes chunkStart-chunkEnd/chunkSize' <br>
'Accept-Ranges': 'bytes' <br>
'Content-Length': chunkSize <br>
'Content-Type': 'video/mp4' <br>

![Alt text](images/nodejs-videoPlay.PNG?raw=true "None")
