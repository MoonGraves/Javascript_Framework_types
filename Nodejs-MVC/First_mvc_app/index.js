//Tämä on pääsovellus
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const PORT = 8080;

//lukaisee polku & käsittelee tiedosto kansion -> routes/routes.js
app.use("/api", routes);

//default home page
app.use("/", (req, res) => {
  res.send("Default page");
});


app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
