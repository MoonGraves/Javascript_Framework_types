//Tämä on pääsovellus
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//set the view engine to ejs
app.set("view engine", "ejs");

//Aluksi valmiita oletus esimerkkejä, että näitä voi poistaa sitten, kun käynnistää tämän sovelluksen & sekä poistamisesta siirtyvät alempaan kerrokseen kuin jäävät historiaan listattuna, että nämä xyz tehtävät on tehty
const task = ["Buy new keyboard", "practise with javascript"];
const complete = ["finish java tutorial 30min"];

//post the new task where user added
app.post("/addtask", function(req, res) {
    const newTask = req.body.newtask;
    //add the new task from the post 
    task.push(newTask);
    res.redirect("/");
});

//julkaisee lista tehtävän, että mitä pitä tehdä ja check zxy tehtävä mikäli on tehty ja yms.
app.post("/removetask", function(req, res) {
    const completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);

        //määrittää xyz tehtävän jos on tehty niin sitä tiputettaan kuin xy tehtävä on tehty listasta, ettei se jää roikkumaan listassa tekemättä
        task.splice(task.indexOf(completeTask), 1);
        
    } else if (typeof completeTask === "object") {
        for (const i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

//default home page & renderöi käyttöön se kansion nimen mukaan
app.get("/", function(req, res) {
    res.render("pages/index", { task: task, complete: complete });
});

//mikäkin tuntematon sivu polku, näyttää oletuksen 404 / error sivuston & renderöi käyttöön se kansion nimen mukaan
app.use(function(req, res) {
    res.status(404)
    res.render('pages/404')
    console.log("Error")
});

//listen to the port 
app.listen(8080);
console.log('Serveri käynnistyy... 8080');
