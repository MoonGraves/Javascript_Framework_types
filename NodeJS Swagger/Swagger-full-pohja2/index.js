import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();
const PORT = 8080;

//Kuin yhteistiedot, tekniset ja sovellus ominaisuudet
const swaggerAPIDesc = swaggerJsDoc({
  swaggerDefinition: {
    info: {
        title: 'Mynthix Test',
        version: '1.0.0',
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
  apis:['index.js'] //tämän tiedoston nimi mitä on käytössä
});

//default home page
app.get('/', (req, res) => {
  res.send("Tämä on kotisivu");
})

//avaa swagger sovelluksen polkun
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerAPIDesc));

//Get (getData) something start here
/**
 * @swagger
 * /getData:
 *    get:
 *      description: This is just API test
 *      responses:
 *        200:
 *          description: Success
 */
app.get('/getData', (req, res) => {
  res.send(
    [
      {
        name : 'test'
      }
  ])
});

//POST (saveData) do something start here
/**
 * @swagger
 * /saveData:
 *   post:
 *     description: This is a post call to save data
 *     responses:
 *       201:
 *         description: Success or Saved
 *       403:
 *         description: Unauthorised
 *     parameters:
 *       - name: Title
 *         in: formData
 *         required: true
 *         type: string
 *         description: name of person    
 */
app.post('/saveData', (req,res) => {
    res.status(201).send('saved success');
});

//PUT (updateData) something start here
/**
 * @swagger
 *  /updateData:
 *    put:
 *      description: This is a put call to update data
 *      responses:
 *        200:
 *          description: Success
 */
app.put('/updateData', (req, res) => {
    res.send('updated success');
});

//DELETE (deleteData) something start here
/**
 * @swagger
 *  /deleteData:
 *    delete:
 *      description: This is deleted call to delete data
 *      responses:
 *        200:
 *          description: Deleted or success
 * 
 */
app.delete('/deleteData', (req, res) => {
    res.send('deleted success');
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));