import { v4 as uuidv4 } from 'uuid'; //id luonti

export const getUsers = (req,res) => {
  res.send(users);
}

let users = [
  
  {
    firstname : "Andy",
    lastname : "Doe",
    age : 12
  },
  {
    firstname : "Billy",
    lastname : "Lowe",
    age : 10
  } 

]
//luodaan joku id
export const createUser  = (req,res) => {
  const user = req.body;

  users.push({... user, id: uuidv4() });  
  
  //res.send('POST ROUTE REACHED');
  res.send(`New user with the username ${user.firstname} added to the database`); 
}

//vastaanotettaan käyttäjä (user)
export const getUser = (req, res) => {
  const { id } = req.params;
  
  const foundUsers = users.find((user) => user.id == id );

  res.send(foundUsers); 
}

//poistettaan käyttäjä (user)
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id );

  res.send(`User the id ${id} deleted from database `);
}

//päivitystä käyttäjälle (nimi tai ikä muutos ja yms)
export const updateUser = (req,res) => {
  const { id } = req.params;

  const {firstname, lastname, age } = req.body;
  const user = users.find((user) => user.id == id );

  if(firstname )user.firstname = firstname;
  if(lastname )user.lastname = lastname;
  if(age) user.age = age;
  
  res.send(`user id ${id} has been updated`);
}