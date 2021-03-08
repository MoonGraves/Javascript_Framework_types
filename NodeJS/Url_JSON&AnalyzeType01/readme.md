Muutama esimerkki, jotta tässä lukaisee linkkin (url) polkun json tiedoston, mikä näyttää hirveältä, kun lukaisee sen. 
Koska JSON on avoimen standardin tiedostomuotoinen tiedonvälityskniikka & saman aikaisesti on paljon objektia ja määritystä sen kanssa.
Media tyyppi on aina>> application/json

- Tässä on näytetty yksi niistä api:sta mitä analysoi varsinaisen sateliittin seurannan sen (latitude & longitude) eli leveys- ja pituusaste &
yksinkertaisin on seurata tämä - satellites/[id] & samana html sisäisen avoimelähteeseen tulee sijoittaa funktio, jotta määrittyy se asteikko
Samana F12 -> console:ssa näkyy se tämän sateliittin ominaisuudet ja muut tiedot. Vain html body sisään haluttaan vain sijoittaa sen asteikko, toki voidaan sijoittaa muitakin objektia
https://wheretheiss.at/w/developer

- Toinen esimerkkinä on myös lukaista url, mutta sisäisen rakennettu toiminta jotta kysyy URL osoiteen/sovellus liittymän tietojen palauttamista.
Periaatteessa ei tuhoa sitä varsinaista toimintaa, antaa vain sattunnaisen id-tunnuksen ja luomisen aika määritystä ei vaikuta aika järjestelmään (kesä- ja talviaika)
https://reqres.in/api/users

- Kolmas on tämmöinen liikenne traffic aika seuranta, mitä voidaan anayloida x- julkisen välineiden gps, navigoinnin sijaintia, nopeus ja jne. 
Osasta päivittyy tiettyn, että käyttäjä ei voi analysoida jatkuvasti sitä samaa tiettyä kulkuvälinettä esim. juna xy ja sijainti on a-paikassa ja nopeus kulkeutuu näin paljon.
Paitsi kun avaa tämän linkkin>> https://rata.digitraffic.fi/api/v1/train-locations/latest/ << mitä sijoittaa sen junan numeron mukaan, mitä näkee paljon vähemmän tietoa, 
silti yhä vaikea lukaista sitä jatkuvasti. 
Periaatteessa voidaan lukaista tyhjässä sivuston F12 > console:ssa lukaista niitä analysointi tietoja, kun on määritetty html script:in sisällä ja järjestyksen fetch

https://www.digitraffic.fi/rautatieliikenne/


![Alt text](Image/Node1.PNG?raw=true "None")
![Alt text](Image/Node2.PNG?raw=true "None")
![Alt text](Image/Node2-1.PNG?raw=true "None")
![Alt text](Image/Node2-2.PNG?raw=true "None")
![Alt text](Image/Node2-3.PNG?raw=true "None")
