let express = require('express'); 
let cookieParser = require('cookie-parser'); 
//setup express app 
let app = express() 

app.use(cookieParser()); 


//JSON file & mielellään kirjoittaa tarkuudella, ei yhteen pötköön, koska millo päättyy aaltosulku { } tai tavallinen sulku () , pilkku ja jne..
let users = 
{
name : "Tantta", 
Age : "24",
country: "Finland",
city : "Helsinki",
  work : 
  {
    school: "Hamk",
    subject: "it"
  },
      hobby : 
    {
      gym: "Full body",
      drama: "CIA",
      music: "Rock band"
    }
}
//////////////////////////////////////////////////////
//basic homepage 
app.get('/', (req, res)=>{ 
res.send('This is a home page'); 
}); 

//setuser & getuser & delete it
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
res.cookie("userData", users); 
res.send('user data added to cookie'); 

}); 

//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
//shows all the cookies 
res.send(req.cookies);
}); 

//ei mitään erikoista perus kuin homepage
app.get("/private", (req, res) => {
  res.status(200).send("Private web");
});

//delete cookies & sen määritty json luettelo
app.get('/logout', (req,res )=> {
  res.clearCookie("userData", users);
  return res.status(200).redirect('/login');
});

///////////////////////////////////////////

//määritetty portti luku 
app.listen(8080, (err)=>{ 
if(err) 
throw err; 
console.log('listening on port 8080'); 
}); 

///////////////////////////////////////////
/*Output & localhost:8080
-tavallinen localhost:8080 kotisivu ensimäisenä avauttuu pieni teksti lukee: This is a home page

-jos välilehteen url laitettaan polku ./BlahBlah jotakin, sieltä avautuu jotakin, tässä muutama kohde mitä tässä softassa on tehty
1)getuser avauttuu määrittyjen json data, mitä pääsovelluksen asetuksissa on määritetty, koska se on kuin tallennettu sinne x.y.vvvv, ei tietoa koska

Localhost:8080/getuser
{"userData":{"name":"Tantta","Age":"24","country":"Finland","city":"Helsinki","work":{"school":"Hamk","subject":"it"},"hobby":{"gym":"Full body","drama":"CIA","music":"A7x"}}}


2)toisena voidaan poistaa ensimmäisen valikkoiman, mitä on määritetty kuin tietokanta tämä json file tiedosto, 
tai korvata url (./setuser) mitä kuin korvaa sen edellisen tallenteen, ilmoiituksena syttyy (user data added to cookie). 
Lisäksi palaa takaisin url (getuser), niin sieltä näkyy se päivitetty versio tietokanta, 
paitsi tämä on kirjoitettu yhteenpötkään, toki voidaan määrittää sitä paljon paremmin fetch - ladattujen paketti tyyppillä. & 
voi toki tarkistaa F12 --> Sources --> sisäisen kansiossa on se json tiedosto.

3)(./logout) eli kirjauttuu ulos, mikä tarkoittaa kuin puhdistaa samantien vanhan edellisen json tiedoston mitä siellä oli, voidaan määrittää takaisin (.setuser), sen vanhan/uus
json datan käyntiin & se kuitekin päästää käyttäjän sisään, kuin vain puhdistettu vanhat roskat tiedostot


*/
