
import axios from 'axios';
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
    res.send(`User with the name ${user.first_name} added to the database with the ${user.roll} roll!`);
})
///// Trae un usuario en especifco
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

///// Ejecutar rol
router.post('/films/:id', async (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    let data = '';

    if (foundUser.roll === 'admin' || foundUser.roll === 'films') {
        
        const film = req.body;
        // si viene vacia la variable film.id ejecuta la busqueda por id
        let film_id = '';
        if (film.id === undefined || film.id === null){
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/films',
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('Error al obtener los datos');
            }
        }
        else
        {   
            film_id = film.id;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/films/${film_id}`,
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

router.post('/people/:id', async (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    let data = '';

    if (foundUser.roll === 'people' || foundUser.roll === 'admin') {
        
        const people = req.body;
        // si viene vacia la variable people.id ejecuta la busqueda por id
        let people_id = '';
        if (people.id === undefined || people.id === null){
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/people',
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
        else
        {
            people_id = people.id;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/people/${people_id}`,
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

router.post('/location/:id', async (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    let data = '';

    if (foundUser.roll === 'location' || foundUser.roll === 'admin') {
        
        const location = req.body;
        // si viene vacia la variable location.id ejecuta la busqueda por id
        let location_id = '';
        if (location.id === undefined || location.id === null){
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/location',
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
        else
        {
            location_id = location.id;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/location/${location_id}`,
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});


router.post('/species/:id', async (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    let data = '';

    if (foundUser.roll === 'species' || foundUser.roll === 'admin') {
        
        const species = req.body;
        // si viene vacia la variable species.id ejecuta la busqueda por id
        let species_id = '';
        if (species.id === undefined || species.id === null){
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/species',
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
        else
        {
            species_id = species.id;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/species/${species_id}`,
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

router.post('/vehicles/:id', async (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    let data = '';

    if (foundUser.roll === 'vehicles' || foundUser.roll === 'admin') {
        
        const vehicles = req.body;
        // si viene vacia la variable vehicles.id ejecuta la busqueda por id
        let vehicles_id = '';
        if (vehicles.id === undefined || vehicles.id === null){
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/vehicles',
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
        else
        {
            vehicles_id = vehicles.id;
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/vehicles/${vehicles_id}`,
                headers: { }
                };
                
            try {
                const response = await axios.request(config);
                const data = JSON.stringify(response.data);
                res.send(data);
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado');
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

export default router;