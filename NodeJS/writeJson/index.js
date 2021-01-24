let users = 
{
file: "users",
name : "UserName", 
Age : "18",
country: "Finland",
city : "Vantaa",
  work : 
  {
    school: "University",
    subject: "engineer"
  },
      hobby : 
    {
      gym: "Full body",
      drama: "CIA",
      music: "Rock band"
    }
}

const fetch = require('node-fetch');

/*
let todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};*/

//JSON tiedoston säätely, että näyttää paljon järkevämmältä, EI yhteen pötköön 
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(users),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));

'use strict';

const fs = require('fs');

//let data2 = JSON.stringify(users);
let data2 = JSON.stringify(users, null, 2);
fs.writeFileSync('users-2.json', data2);
