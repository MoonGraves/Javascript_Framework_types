// load up our shiny new route for users & allow it will run with express servers and controls something
const userRoutes = require('./users');

//Tässä lukaistaan se polku tiedosto eli json datat, ja katsotaan jos pystyy tulostaa komentolähteeseen, ja toimiii & tässä perustuu ton "read" json toiminta, että yksittäinen objekti mitä halutaan tulostaa ja jne.
/*
const fs = require("fs");
fs.readFile("./data/users.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const userData = JSON.parse(jsonString);
  console.log("File data:", userData.peopleToinenData);
}); */

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes & will receive consider index.js as server where will set this as default home page
  // at the base API url
  //käsittää/vastaanottaa jo pääsovelluksen tulevaa data pakettia mitä ladattu, ja tämä kuin vastaanottaa ja tämä on oletus etusivu, tiedostosta (view/index)
  app.get('/', (req, res) => {
    res.render("index");
    //console.log("Routes index page");
  });

  // run our user route module here to complete the wire up
  userRoutes(app, fs);
  
};

// this line is unchanged
module.exports = appRouter;
