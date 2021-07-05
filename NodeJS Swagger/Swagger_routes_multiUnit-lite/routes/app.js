//Swagger RESTful actions (POST, GET, PUT & DELETE)

//datoille tai nimitykselle pitää olla aina tyyppi, että onko kyse teksti, kirjain, tosi/taru ja jne. lisää tietoa: https://swagger.io/docs/specification/data-models/data-types/

const express = require("express");
const router = express.Router();

//exist folder & file, read the data the json informations
const data = require("../data.js");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // to use body object in requests

/*antaa käytää apin, polku session, että luoo jonkinlaisen json luettelon, tämä lukaisee kuin käyttäjän lukemat, ja tämä julkaisee sen sivulle esim) https://directquickwittedmoto.zhaotan18x.repl.co/api/getData?name=ideapad

tämä julkaistuu sinne sivustolle,;
{"name":"ideapad"}
*/

//Toinen tag START HERE:: & pieni testaus, muuten menee edellisen tag mukaan, jos on useita toimintoja
//Otsikko / väliotsikko & tummennettu teksti

/**
 * @swagger
 * tags:
 *  names: MainData
 *  description: This is just main data
 * /api/getData:
 *  get:
 *      tags: [MainData]
 *      parameters:
 *          - name: page_number
 *            default: 1
 *            in: query
 *            schema:
 *              type: integer
 * 
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schema:
 *              type: integer
 * 
 *      responses:
 *          default:
 *              description: This is the default responses item
 */
router.get("/getData", (req, res) => {
  const {page_number, page_length} = req.query;

  res.send(req.query);
});

/**
 * @swagger
 * tags:
 *  names: MainData
 *  description: This is just main data
 * /api/login:
 *  post:
 *      tags: [MainData]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              default: coder
 *                          password:
 *                              type: string
 *                              default: coder123
 *      responses:
 *          default:
 *              description: This is the default responses item
 */

/*Tämä vain klikkaa POST toiminnan niin avautuu toi token (tunnus) teksti, tai kuin koodi tunnus & mitä vähä scrollaa ylös päin näkyy oikealla toi lukko merkki (Authorize), mitä sinne liitettään se token (tunnus). Se on vähä kuin kirjauduttaan jonkinlaiseen tieotjärjestelmään, mutta toki voidaan syöttää jotakin vale tunnusta.

Tässä loin lisäksi jonkinlaien random salasanan tolle token tilalle, periaatteessa toimii, älä poista tai muuta sitä toistaiseksi*/

router.post("/login", (req, res) => {
  const {email, password} = req.body;

  //create random password/token or text with number
  var ranPas = Math.random().toString(36).slice(-8);
  console.log("Token code is; " + ranPas);

  const out = {
    tokenCode: `${ranPas}` //before: "thisIsAJWTTokenKeepItSafe"
  };

  res.send(out);
});

// Otettaan/haettaan jokin id tunnus, ja tulostettaan se & tässä vain tapahtuu, että haetaan id, ja sitä toistetaan kuin json tiedostona
/**
 * @swagger
 * /api/demo/{id}:
 *  get:
 *    tags: [MainData]
 *    description: Get by id
 *    parameters:
 *      - name: id 
 *        description: id to get by id
 *        in: path
 *        type: integer
 *        required: true
 *    responses:
 *      '200':
 *          description: A successful responses
 *      '404':
 *          description: Failed responses
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/DataPerson'
 */
router.get("/demo/:id", (req, res) => {

  res.status(200).json({
    getID: req.params.id
  })
});

//POST julkaise jokin nimi, ja sitä kuin on tallennettu johonkin tietokannan järjestelmäään
/**
 * @swagger
 * /api/saveData:
 *   post:
 *     tags: [MainData]
 *     description: This is a post call to save data
 *     summary: POST name of data
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
router.post('/saveData', (req,res) => {
    res.status(201).send('saved success');
});

//->>>>>>>> TÄSSÄ ALKAA TOINEN TAG <<<<<<<<<
//TOINEN tag START HERE:: & pieni testaus, muuten menee edellisen tag mukaan, jos on useita toimintoja
//Otsikko / väliotsikko & tummennettu teksti
/**
 * @swagger
 * tags:
 *  name: Books
 *  description: The Book of something
 */

//Luo joku random kirja (kirjailija , kirjannimi)
/**
 * @swagger
 * tags:
 *   description: Name the book
 * /api/getBooks:
 *   get:
 *     summary: Create a new book
 *     tags: [Books]
 *     parameters:
 *          - name: book_author
 *            description: Fullname {Firstname, Lastname}
 *            default: Mike Lowe
 *            in: query
 *            schema:
 *              type: string
 * 
 *          - name: book_title
 *            description: Book name
 *            default: The C# Programming Yellow Book
 *            in: query
 *            required: true
 *            schema:
 *              type: string
 * 
 *     responses:
 *       200:
 *         description: The created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */

router.get("/getBooks", (req, res) => {
  const {book_author, book_title} = req.query;

  res.send(req.query);
});

//Vastaanottaa olemassa oleva aihe tai esine, esim määärityn id, aihe ja jne.
/**
 * @swagger
 * tags:
 *   description: List the book
 * 
 * /api/getBook:
 *   get:
 *     summary: Show the list of the book
 *     tags: [Books]
 *     description: Get all books from data
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 * 
 */

//oletus tyhjä sivusto polku (books), sivustossa näkyy json array tiedot
router.get('/getBook', (req, res) => {
  res.send([
    {
      id: 10,
      title: "Mickey Mouse",
      pages: "256"
    },
    {
      id: 20,
      title: "Donald Duck",
      pages: "1750"
    }
    //ja jne, jatkuu voi lisätä useammankin, älä unohda lisätä pilkkua!!
  ]);
});

//Tähän tulee (PUT) toiminta, mitä kuin tietokantaan tai jollekin tekijälle tulee muutosta esim. nimi tai muu, mutta pitää täsmättä id mukaan. Koska tälle x-tuotelle on oma id ja y-tuoteella on oma id.
/**
 * @swagger
 * tags:
 *   description: Editing the book
 * 
 * /api/putBooks:
 *    put:
 *      description: Put all books
 *      tags: [Books]
 *      summary: Editing the books
 * 
 *    parameters:
 *      - name: books
 *        description: Name the book
 *        operationId: "updatedBook"
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 * 
 *    responses:
 *      '200':
 *        description: Successful new book
 * 
 *      '404':
 *        description: Creating failed
 */

router.put('/putBooks', (req, res) => {
  res.status(201).send();
});

//DELETE (deleteData) something start here
/**
 * @swagger
 *  /api/deleteBooks:
 *    delete:
 *      description: This is deleted call to delete data
 *      tags: [Books]
 *      summary: Delete the book from the list
 *      responses:
 *        200:
 *          description: Deleted or success
 * 
 */
router.delete('/deleteBooks', (req, res) => {
    res.send('Deleted success');
});


//->>>>>TÄSSÄ ALKAA LUKAISTA TIEDOSTON data.js TIETOKANNAN<<<<<

/**
 * @swagger
 * tags:
 *  name: Poster
 *  description: Post of data array
 */

/**
 * @swagger
 * /api/viestiPost/{id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Poster]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 * 
 *     responses:
 *       200:
 *         description: posts by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: post can not be found
 */

router.get("/viestiPost/:id", (req, res) => {
  const post = data.find((post) => post.id === +req.params.id);

  if (!post) {
    res.sendStatus(404);
  }

  res.send(post);
});

/**
 * @swagger
 * /api/viestiPost:
 *   post:
 *     summary: Create a new post
 *     tags: [Poster]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

router.post("/viestiPost", (req, res) => {
  try {
    const post = {
      ...req.body,
      id: data.length + 1,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }

});

/**
 * @swagger
 * /api/{id}:
 *   put:
 *     summary: updates posts by id
 *     tags: [Poster]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         decsription: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: post was not found.
 *       500:
 *         description: Some errors happend.
 *
 */

router.put("/:id", (req, res) => {
  try {
    let post = data.find((post) => post.id === +req.params.id);
    post.userId = req.body.userId;
    post.title = req.body.title;
    post.body = req.body.body;

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 *  /api/{id}:
 *    delete:
 *      summary: removes post from array
 *      tags: [Poster]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: post id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The post was deleted
 *        404:
 *          description: The post was not found
 *
 */

router.delete("/:id", (req, res) => {
  let post = data.find((post) => post.id === +req.params.id);
  const index = data.indexOf(post);

  if (post) {
    data.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

//----->>>>Schema malli kaaviot START HERE<<<<<------

/*Schema komponentti dia & esimerkki malli kaaviot,, mikä tulee alimmaksi noita RESTful toiminnasta. Toi pieni mallinnus on kuin, että näin tehdään tämä RESTful toimintoja & ja tämä on oma ikkuna malli/kaavio
*/
/**
*  @swagger
*   components:
*     schemas:
*       Book:
*         type: object
*         required:
*           - title
*           - author
*           - finished
*           - publisher

*         properties:
*           id:
*             type: integer
*             description: The auto-generated id of the book.
*           title:
*             type: string
*             description: The title of book.
*           author:
*             type: string
*             description: The book of writer
*           publisher:
*             type: string
*             description: publisher company name
*           finished:
*             type: boolean
*             description: Reader finished the book? 
*           createdAt:
*             type: string
*             format: date
*             description: The date of the record creation.

*         example:
*            title: The Programming Night
*            author: Asd F. Qwerty & Zxc V. BNM
*            publisher: John Wiley & Sons, Inc
*            finished: true
*/
//---------------------------------------------

//---------------------------------------------
/*Schema komponentti dia & esimerkki malli kaaviot, mikä tulee alimmaksi noita RESTful toiminnasta. Toi pieni mallinnus on kuin, että näin tehdään tämä RESTful toimintoja & ja tämä on oma ikkuna malli/kaavio
*/
/**
*  @swagger
*   components:
*     schemas:
*       DataPerson:
*         type: object
*         required:
*           - name
*           - continent
*           - age
*           - status

*         properties:
*           id:
*             type: integer
*             description: The person id.
*           name:
*             type: string
*             description: The person name.
*           continent:
*             type: string
*             description: Earth landmass, Europe, Asia or America
*           status:
*             type: string
*             description: Student, worker, retired or other
*           age:
*             type: number
*             description: The person age

*           createdAt:
*             type: string
*             format: date
*             description: The date of the record creation.
*
*         example:
*            id: 123-asdf
*            name: Asd F. Qwerty
*            continent: Northern Europe
*            status: Student
*            age: 18
*
*/
//---------------------------------------------

//---------------------------------------------
//Schema komponentti dia & esimerkki malli kaaviot,, mikä tulee alimmaksi noita RESTful toiminnasta. Toi pieni mallinnus on kuin, että näin tehdään tämä RESTful toimintoja & ja tämä on oma ikkuna malli/kaavio
/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 * 
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post *
 * 
 *       example:
 *         id: 1
 *         userId: 1
 *         title: Admin title
 *         body: Lorem Ipsum text
 *
 */
//---------------------------------------------

module.exports = { router };