serving static files with express
Http post requests with express and body
working with json data with express

npm install body-parser

tässä toiminassa on yhteydessä julkis index.html kanssa, vaikka kansiossa lukee static, 
sitä ei kuitenkaan julkaista, koska emme halua että käyttäjä tai muu henkilö tietäisi sen kansion nimeä siksi,
tässä on yksi methodi kuin (public) ja app.get se lukaisee tämän html-http parametrin tekijänsä, mitä sieltä kuin halutaan lukaista niitä täydentämiä kenttiä 

Melkoinen toinen toiminta kuin edellisen kansion (ExpressFramework1) - mutta tässä täydennetään lomake tyyppistä asiaa

viimeisenä funktiona, että tunnistaa html body sisäisen asiansa mitä se kuin lähettää submit juttuja, että lukaisee niiitä argumenttejä

urlencoded express false, jonka avulla voimme jäsentää URL-koodatut lomakkeet 
