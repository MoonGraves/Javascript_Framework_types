//Tämä on pääsovellus
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//loading node's file systems
const fs = require('fs');

//configure our express instance with some body-parser settings
//including handling JSON datas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//consider routes path folder/files, it will set to default home page
const routes = require('./routes/routes.js')(app, fs);

//set server running and port number
const server = app.listen(8080, () => {
  console.log('Server is running %s...', server.address().port);
});
