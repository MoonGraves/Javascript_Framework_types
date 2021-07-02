//Swagger RESTful actions (POST, GET, PUT & DELETE)
const express = require("express");

const router = express.Router();

/*antaa käytää apin, polku session, että luoo jonkinlaisen json luettelon, tämä lukaisee kuin käyttäjän lukemat, ja tämä julkaisee sen sivulle esim) https://directquickwittedmoto.zhaotan18x.repl.co/api/getData?name=ideapad

tämä julkaistuu sinne sivustolle,;
{"name":"ideapad"}
*/

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
 *            schemna:
 *              type: integer
 * 
 *          - name: page_length
 *            default: 10
 *            in: query
 *            required: true
 *            schemna:
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

//Tämä vain klikkaa POST toiminnan niin avautuu toi token (tunnus) teksti, tai kuin koodi tunnus & mitä vähä scrollaa ylös päin näkyy oikealla toi lukko merkki (Authorize), mitä sinne liitettään se token (tunnus). Se on vähä kuin kirjauduttaan jonkinlaiseen tieotjärjestelmään, mutta toki voidaan syöttää jotakin vale tunnusta.
//Tässä loin lisäksi jonkinlaien random salasanan tolle token tilalle, periaatteessa toimii :3

router.post("/login", (req, res) => {
  const {email, password} = req.body;

  //create random password/token or text with number
  var ranPas = Math.random().toString(36).slice(-8);
  console.log(ranPas);

  const out = {
    token: `${ranPas}` //before: "thisIsAJWTTokenKeepItSafe"
  };

  res.send(out);
});



module.exports = { router };