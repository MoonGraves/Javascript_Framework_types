/*
GET, POST, DELETE request

POST  - (create a resource or generally provide data)
GET   - (retrieve an index of resources or an individual resource)
PUT   - (create or replace a resource)
PATCH - (update/modify a resource)
DELTE - (remove a resource)

>>> request type <<<
localhost:8080/index.html         - GET
localhost:8080/index.html/about   - GET
localhost:8080/index.html         - POST

localhost:8080/index.html/:id     - GET
localhost:8080/index.html/:id     - DELETE
localhost:8080/index.html/:index  - PUT

Tää esimerkki on vähä kuin edellisen harjoitus tooi yksi:  crash-GET/POST

Client ---(GET / POST / PUT / DELETE ---> <---- JSON / XML ---- REST API <------> Database

CRUD (Create, Read, Update, Delete)

*/


import express from 'express';
import bodyParser from 'body-parser';

import usersRouters from './routes/users.js'; //olemassa tiedosto ja polku kansio tiedosto

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', usersRouters); //import polku sieltä 

//home page
app.get('/', (req, res) => { 
    //console.log('[Test]');

    res.send("Moikka")
});

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));