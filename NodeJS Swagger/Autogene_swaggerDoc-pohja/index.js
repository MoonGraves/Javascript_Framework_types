const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 8080;

//extemded>>> ttps://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.2.3",
      title: "Mynthix API",
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
  },
  //['.routes/*js]
  apis: ["index.js"],
};

//Home page nodejs
app.get('/', (req, res) => {
  res.send("This is just a home page");
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: Success response
 */
/*Routes kommenti sisällä pitää olla @swagger ja mitäkin polkua, kuin merkintä linkittä polun menetelmän. Tämä operaatio saa yksilöllisen id:n ,jota käytettään eri paikoissa menetelmien nimessä. Yksi tällainen käyttö menetelmän nimissä esim. asiakkaan tai jokin asian luomiseen varten.
Koska käytettävissä on monia reitittimiä, tämä työkalu ei yritä jäsentää polkuja, jotka annoit valitsemallesi reitityskirjastolle. Joten sinun on määritettävä polkumallisi itse kelvollisessa syntaksiin. 
*/
app.get('/customers', (req, res) => {
  console.log("request");
  res.status(200).send("Henkilo results");
});

/**
 * @swagger
 * /customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name the our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successful created users
 */

app.put('/customers', (req, res) => {
  res.status(200).send("Successful updates from the customers");
});

/**
 * @swagger
 * /customers:
 *   post:
 *     description: Post all the customers
 *     parameters:
 *      - name: title
 *        description: Name the customers
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.post('/customers', (req, res) => {
  res.status(201).send();
});


app.listen(port, () => {
  console.log(`Serveri käynnistyy porttiin... ${port}`);
});