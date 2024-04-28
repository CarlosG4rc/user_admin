import express from  'express';
const router = express.Router();

import {v4 as uuidv4 } from 'uuid';

let users = [];

///// Traer todos los usuarios
router.get('/', (req, res) => {
    res.send(users);
});


///// Agregar nuevos usuarios
const new_users = [];

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.first_name} added to the database!`);
})
///// trae unusuario en especifco
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

///// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);
});

///// Actualizar un usuario
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
});

export default router;