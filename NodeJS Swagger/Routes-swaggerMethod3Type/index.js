const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");

//exist folder & file
const { router } = require("./routes/app");

const app = express();
const PORT = 8080;

app.use(express.json());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
        title: 'Mynthix June',
        version: '1.2.3',
            description: "Mynthix API infot",
            contact: {
              name: "Mynthix Heinakuu",
              url: 'https://Mynthix.net',
              email: 'Mynthix@yahoo.com',
            },
        license: {
          name: 'Apache 2.0',
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
		},

		servers: [{
				url: "https://routes-swaggermethod3type.zhaotan18x.repl.co/",
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

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

//antaa käytää apin, polku session, että luoo jonkinlaisen json luettelon, tämä kuin antaa olemassa olevan tiedston julkaista ja käyttää
app.use("/api", router);

//Home page
app.get("/", (req, res) => {
  res.send("This is a default home page");
});


app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));