/*RESTful toiminnat ja määritykset (GET, POST, PUT & DELETE)
ilman app.get(pälä)

*/

const express = require("express");
const router = express.Router();

//Schema komponentti dia & esimerkki malli
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
*            author: Asd F. Qwerty / Zxc V. BNM
*            publisher: John Wiley & Sons, Inc
*            finished: true
*/

//Tagi otsikko
/**
 * @swagger
 * tags:
 *  name: Books
 *  description: Swagger Book API software
 */

//Luo kirja
/**
 * @swagger
 * path:
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
 *         description: The created book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */

//Julkaise tai tuo olemassa listattut kirjat
/**
 * @swagger
 * /books:
 *    get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Book'
 */

//Hakea tai etsiä yksittäisen kirjan id mukaan
/**
 * @swagger
 * /books {id}:
 *    get:
 *     summary: Gets a book by id
 *     tags: [Books]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: The book id
 *     responses:
 *       200:
 *         description: The list of books
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Book'
 *       404:
 *        description: Book not found
 */

//Hakea tai etsiä yksittäisen kirjan id mukaan, sille tehdään joko päivitys tai muokkaus sessio
/**
 * @swagger
 * /books {id}:
 *    put:
 *     summary: Gets a book by id
 *     tags: [Books]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *    responses:
 *      "204":
 *        description: Update was successfully
 *      "404":
 *        description: Book not found
 * 
 */

//Hakea tai etsiä yksittäisen kirjan id mukaan, ja sitä poistettaan listasta id mukaan kaikki tiedot
/**
 * @swagger
 * /books{id}:
 *   delete:
 *    summary: Delete the book by id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The book id
 *    responses:
 *      "204":
 *        description: Delete was success
 *      "404":
 *        description: Book not found* 
 * 
 */

module.exports = router;
