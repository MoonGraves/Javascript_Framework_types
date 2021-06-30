//Pääsovellus
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//exist folder - files names
const booksRouter = require("./routes/books");

//swagger options (yhteistiedot ja ominaisuudet)
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
        //name: 'MIT',
        //url: "https://spdx.org/licenses/MIT.html",
      },
		},
    servers: [
      {
        url: "https://miserlygrotesquevertex.zhaotan18x.repl.co/api-docs/",
      },
    ],
  },
  apis: ["./routes/books.js"],
};

const specs = swaggerJsDoc(options);
const app = express();
const PORT = 8080;

//swagger api sivu
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
