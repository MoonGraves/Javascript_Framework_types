//Pääsovellus
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//exist folder - files names
const booksRouter = require("./routes/books");

const PORT = process.env.PORT || 8080;

const FileSync = require("lowdb/adapters/FileSync");

//book array file 
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ books: [] }).write();

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
        title: 'Mynthix Test',
        version: '1.2.3',
            description: "Mynthix API infot",
            contact: {
              name: "Mynthix Sovellus",
              url: 'https://Mynthix.net',
              email: 'Mynthix@yahoo.com',
            },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
		},
		servers: [{
				url: "https://Routes-swaggerMethod.zhaotan18x.repl.co",
			},
		],
	},
  //määrittys polku methodi menetelmän operaatio, missä tapahtuu /**pälä pälä **/ @swagger toimintoja
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

//Nodejs express homepage
/*
app.use("/", (req, res) => {
  res.send("Tämä on kotisivu");
});*/

//swagger api sivu
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.db = db;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/books", booksRouter);

app.listen(PORT, () => console.log(`The server is running.. port ${PORT}`));