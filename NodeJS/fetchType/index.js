//fetch on alemmassa, mitä näyttää console/cmd kommentoon paremman näköisen json tiedoston, kuin yhteen pötköön kirjoitettu

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


//JSON tiedoston säätely, että näyttää paljon järkevämmältä, EI yhteen pötköön 
/*toi url linkki on vain joku tämmöinen järjestys, että SINÄ käyttäjä olet se seuraava siksi tulostuksessa näkyy id: 201
se ei kuitenkaan tallennu mihinkään
*/
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(users),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));

/*output::
{
  file: 'users',
  name: 'UserName',
  Age: '18',
  country: 'Finland',
  city: 'Vantaa',
  work: { school: 'University', subject: 'engineer' },
  hobby: { gym: 'Full body', drama: 'CIA', music: 'Rock band' },
  id: 201
}
*/
