//Pääsovellus
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//exist folder & file
const postRouter = require ("./routes/posts");

const swaggerUI = require ("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 8080;
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());

//Swagger options title navigation and short description
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.7",
      description: "Application of the software",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
      license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },

    servers: [
      {
        url: "https://swaggerroutesanddataarrayfilekesken.zhaotan18x.repl.co/",
        description: "Something about it",
      },
    ],
  },
  //määrittys polku methodi menetelmän operaatio, missä tapahtuu /**pälä pälä **/ @swagger toimintoja
  apis: ["./routes/*.js"],
};


const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

//antaa käyttää posts, polku session, että luoo jonkinlaisen json luettelon, tämä kuin antaa olemassa olevan tiedston julkaista ja käyttää & kuin polkuun lisätään jotakin tekijää, ja sille tekijällä on jokin määritys esim. y-tekijä = 2
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));