/*Tää on kopio Method3:sta, mutta tässä yritetään kuin luoda yhteenvedon useista toiminnasta, jos saisi esim REST toiminnan json kanssa & Eli periaatteessa kaikenlaista multi toimintaa tänne ohjelmaan/harjoitukseen & saa nähdä mitä kaikkea voidaan muodostaa

*/

//TÄMÄ ON PÄÄSOVELLUS, MISSÄ LATAUTUU NOI PAKETIT JA YMS OSAT MÄÄRITYKSET
//Lataukset NPM paketit
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");

const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const lowDb = require("lowdb");

const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const { nanoid } = require("nanoid");

//read exist file/folder
const db = lowDb(new FileSync('db.json')); //note of data
const { router } = require("./routes/app");

const app = express();
const PORT = 8080;

//let user write db notes something 
db.defaults({ notes: [] }).write()

dotenv.config();

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(bodyParser.json())

//Alku oman ominaisuudet esim. tämän sovelluksen yrityksen nimi, versio ja muu yhteystiedot, avainsanat tai # jostakin kuvauksesta/infosta ja jne.
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
        title: 'Mynthix June 2021',
        termsOfService: "http://swagger.io/terms/",
        version: '1.0.4',
            description: "Mynthix API infot & More about Swagger at [http://swagger.io] (http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). \n This is sample description, something about the api key `special-key` & `nodejs js`to test the authorization filters.",
        contact: {
              name: "Mynthix Oy",
              url: 'https://Mynthix.net',
              email: 'Mynthix@yahoo.com',
        },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
		},

//tämän url pitää täsmätä tämän repl.it mukaan, normaalisti se olisi localhost:8080   
		servers: [{
				url: "https://routes-swaggermethod3type-project.zhaotan18x.repl.co/",
        description: "API of the system"
			},
		],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [{
        bearerAuth: [],
      },
    ],
	},
  //määrittys polku methodi menetelmän operaatio, missä tapahtuu /**pälä pälä **/ @swagger toimintoja
	apis: ["./routes/*.js"],
};

//now home page of the swagger & {explorer: true} , tämä on kuin haku palkki, että siinä on boxi että käyttäjä voi syöttää jotakin sinne haku kohteeseen
const specs = swaggerJsDoc(options);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true } ));

//TODO: before, if put path api-docs will show the swagger app // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


//antaa käytää apin, polku session, että luoo jonkinlaisen json luettelon, tämä kuin antaa olemassa olevan tiedston julkaista ja käyttää
app.use("/api", router);

//TODO: Default home page
/*
app.get("/", (req, res) => {
  res.send("Default home page");
});
*/

//Show the notes as inside file of the json, tämän http://polku/notes
app.get('/notes', (req, res) => {
  const data = db.get("notes").value()
  return res.json(data)
})

app.post('/notes/new', (req, res) => {
  const note = req.body
  db.get("notes").push({
    ...note, id: nanoid()
  }).write()
  res.json({ success: true })
})


app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
