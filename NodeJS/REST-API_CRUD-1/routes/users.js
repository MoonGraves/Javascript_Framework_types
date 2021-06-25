import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes in here starting with /users
router.get('/', getUsers);

router.post('/', createUser);

//path::    /users/id   => req.params { id:2 } & yritetään löytää täsmälleen se oikea id
router.get('/:id', getUser);

//käyttäjä/user poistaminen, poistettaisi yksittäisen & riittää kopsaa id:n ja poistaa sen mukaan
router.delete('/:d', deleteUser);

//päivitys tietokantaan eli määrityn id:n mukaan, nimi muuttuu tai ikä ja yms
router.patch('/:id', updateUser);

//exportettaan tämä js tiedosto, että index pääsovellus tietää tämän olemassa olevan js tiedoston
export default router;