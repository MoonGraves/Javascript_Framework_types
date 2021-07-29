const express = require("express");
const router = express.Router();

const controller = require("../controllers/UserController");

/*
router
.route("/")
.get(function(req, res){
  res
.status(200)
.send("This is routes/routes path ");
console.log("Routes path");
});
*/

//get path folder controller and will print it out of the message
router.get("/", controller.get);

  //res.send("This is router page");


module.exports = router;
