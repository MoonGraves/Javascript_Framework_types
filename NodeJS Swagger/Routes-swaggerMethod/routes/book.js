/* Polku methodi menetelmä, tässä tapahtuu niitä RESTful juttuja (PUT,DELETE, POST & GET) toimintoja, sekä index.js on pääsovellus, että tämä polku kuin vastaanotta ja lähettää oman osanssa toiminnan mentelmän.

Pääsovelluksessa pitää kuitenkin määrittää olemassa olevan kansio/tiedoston.js, että tiedoston.js (books.js) on jotakin toimintoja.

Toki voidaan muodostaa yhteen pötköön nämä toiminnat, ehkä voi mahdollista olla vaikea lukea.

________________________________

(GET, PUT, POST, DELETE);
https://swagger.io/docs/specification/components/

schema voidaan kuin määrittää päällekkäisen url datan mallinnan & tai sitä voidaan määrittää sisäisesti tai niihin voi viitata ulkoisesta määritelmästä $ ref: n kautta. Voit myös antaa esimerkki vastauksia erilaisille sisältötyypeille. 
________________________________

@swagger components pälä pälä teksti
näissä pitää olla tarkkana mitä yrittää kuin selostaa, koska tämän (components section) parametrin funktio käsky. Samoin monta väliä tai tab pitää olla, sekä rivin järjestys ja kuvaus.
________________________________
*/
const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");

const idLength = 8;

//Tämä on vain schema, oletuksena malli tälle sovellukselle & mitä kaikkea tähän (kirja) toimintaan tulee olemaan
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - publisher
 * 
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *         publisher:
 *           type: string
 *           description: The book publisher
 * 
 *       example:
 *         id: a1Sd_zxcV
 *         title: The Programming Night
 *         author: Asd F. Qwerty
 *         publisher: John Wiley & Sons, Inc
 */

//Otsikko / väliotsikko & tummennettu teksti
/**
 * @swagger
 * tags:
 *  name: Books
 *  description: The books manager API software
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get whole list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

router.get("/", (req, res) => {
	const books = req.app.db.get("books");

	res.send(books);
});

//Lukaisee olemassa olevan id mukaan, seuraa tiedoston json mukaan
/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

router.get("/:id", (req, res) => {
  const book = req.app.db.get("books").find({ id: req.params.id }).value();

  if(!book) {
    res.sendStatus(404);
  }

	res.send(book);
});

//Julkaisu & lisää jokin tuote/muu yksittäisenä itsensä, esim (kirja). vain otsikko/tekijä ja jne
/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

router.post("/", (req, res) => {
	try {
		const book = {
			id: nanoid(idLength),
			...req.body,
		};

    req.app.db.get("books").push(book).write();
    
    res.send(book)
	} catch (error) {
		return res.status(500).send(error);
	}
});

//PUT kuin asettaa tai tehdä sille jotakin. Valitsee olemassa olevan id - mukaan, ja siihen tehdään se päivitys/muokkaus
/**
 * @swagger
 * /books/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id", (req, res) => {
	try {
		req.app.db
			.get("books")
			.find({ id: req.params.id })
			.assign(req.body)
			.write();

		res.send(req.app.db.get("books").find({ id: req.params.id }));
	} catch (error) {
		return res.status(500).send(error);
	}
});

//Poistaminen, valitse/tuo olemassa oleva id, ja sitä määrittyn id - mukaan poistuu sieltä tietokannasta (json)
/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

router.delete("/:id", (req, res) => {
	req.app.db.get("books").remove({ id: req.params.id }).write();

	res.sendStatus(200);
});

//Toinen tag START HERE:: & pieni testaus, muuten menee edellisen tag mukaan, jos on useita toimintoja
//Otsikko / väliotsikko & tummennettu teksti
/**
 * @swagger
 * tags:
 *  name: Names
 *  description: The name of something
 */

module.exports = router;
