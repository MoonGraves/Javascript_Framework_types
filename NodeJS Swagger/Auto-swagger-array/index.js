const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

// tekijän tiedot, kuin tämän sivun (sovelluksen) ominaisuudet, versiot, yhteistiedot ja jne. 
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', //vain 2.0 tai 3.0 versio
      info: 
      {
        title: "Library API PäläPälä",
        version: '1.2.3', //versio, se näkyy polussa /api-docs
        description:'Something programming about API software',
        //yhteistiedot
        contact:{
                name:'PäläPälä Lounas',
                url:'https://blahblah.com',
                email:'blah@gmail.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
    },
    apis: ["index.js"], //tämä pääsovelluksen nimi
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); //polku käytettään tätä aktivoituneena

//Home page
app.get('/', (req, res) => { 
    //console.log('[Test]');

    res.send("Moikka")
});


//Vastaanottaa olemassa oleva aihe tai esine, esim määärityn id, aihe ja jne.
/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 * 
 */
//oletus tyhjä sivusto polku (books), sivustossa näkyy json array tiedot
app.get('/books', (req, res) => {
  res.send([
    {
      id: 10,
      title: "Mickey Mouse",
      pages: 500,
    },
    {
      id: 20,
      title: "Donald Duck",
      pages: 123,
    }
    //ja jne, jatkuu voi lisätä useammankin, älä unohda lisätä pilkkua!!

  ])
});

//Kirjan tai aihe julkaisu
/**
 * @swagger
 * /books:
 *   post:
 *     description: Get all books
 *     tags:
 *       -  POST books
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      - pages: title
 *        type: int
 *     responses:
 *       201:
 *         description: Created
 */
app.post('/books', (req, res) => {
  res.status(201).send();
});

/**
 * @swagger
 * /books:
 *    put:
 *      description: Put all books
 *    parameters:
 *      - name: books
 *        in: query
 *        description: Name the book
 *        required: true
 *        type: string
 *      - pages: title
 *        types: int
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successful created users
 */

app.put('/books', (req, res) => {
  res.status(201).send();
});

app.listen(8080, () => console.log("listening on 8080"));