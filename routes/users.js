
import axios from 'axios';
import express from  'express';
const router = express.Router();

import {v4 as uuidv4 } from 'uuid'; // usamos uuid para generar un id unico para cada usuario

let users = []; // creamos un array vacio para almacenar los usuarios

///// Traer todos los usuarios
router.get('/', (req, res) => {
    res.send(users); // enviamos la lista de usuarios
});


///// Agregar nuevos usuarios
router.post('/', (req, res) => {
    const user = req.body; // obtenemos el usuario del body, el cual viene en formato JSON

    users.push({ ...user, id: uuidv4() }); // agregamos el usuario al array de usuarios y asignamos un id unico
    res.send(`User with the name ${user.first_name} added to the database with the ${user.roll} roll!`); // enviamos un mensaje de confirmacion
})
///// Trae un usuario en especifco
router.get('/:id', (req, res) => { 
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    res.send(foundUser); // enviamos el usuario encontrado
});

///// Eliminar un usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params; // obtenemos el id del usuario que queremos eliminar

    users = users.filter((user) => user.id !== id); // filtramos el array de usuarios y eliminamos el usuario con el id especificado

    res.send(`User with the id ${id} deleted from the database.`); // enviamos un mensaje de confirmacion
});

///// Actualizar un usuario
router.patch('/:id', (req, res) => {
    const { id } = req.params; // obtenemos el id del usuario que queremos actualizar
    const { first_name, last_name, age } = req.body; // obtenemos los nuevos datos del usuario

    const user = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    if (first_name) user.first_name = first_name; // si el nombre del usuario es diferente al actual, lo actualizamos
    if (last_name) user.last_name = last_name; // si el apellido del usuario es diferente al actual, lo actualizamos
    if (age) user.age = age; // si la edad del usuario es diferente a la actual, la actualizamos

    res.send(`User with the id ${id} has been updated`); // enviamos un mensaje de confirmacion
});

///// Ejecutar rol

////// Ejecutar rol films
router.post('/films/:id', async (req, res) => {
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    let data = '';

    if (foundUser.roll === 'admin' || foundUser.roll === 'films') { // si el usuario tiene el rol de admin o films, ejecuta la busqueda
        
        const film = req.body; // obtenemos el film del body, el cual viene en formato JSON
        // si viene vacia la variable film.id ejecuta la busqueda por id
        let film_id = '';
        if (film.id === undefined || film.id === null){ // si viene vacia la variable film.id ejecuta la busqueda
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity, 
                url: 'https://ghibliapi.vercel.app/films', // url de la api
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error); // si hay un error, lo mostramos en consola
                res.status(404).send('Error al obtener los datos'); // enviamos un mensaje de error
            }
        }
        else // si viene un id en la variable film.id, ejecuta la busqueda por id
        {   
            film_id = film.id; 
            let config = {  // configuracion de la peticion
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/films/${film_id}`, // url de la api con el id del film
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
    } else {
        res.status(403).send('No tienes permiso para realizar esta acción'); // si el usuario no tiene permisos, enviamos un mensaje de error
    }
});

///////// Ejecutar rol people
router.post('/people/:id', async (req, res) => { // ruta para buscar personas
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    let data = '';

    if (foundUser.roll === 'people' || foundUser.roll === 'admin') { // si el usuario tiene el rol de people o admin, ejecuta la busqueda
        
        const people = req.body; // obtenemos la persona del body, el cual viene en formato JSON
        let people_id = '';
        if (people.id === undefined || people.id === null){ // si viene vacia la variable people.id ejecuta la busqueda 
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/people', // url de la api
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
        else // si viene un id en la variable people.id, ejecuta la busqueda por id
        {
            people_id = people.id; 
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/people/${people_id}`, // url de la api con el id de la persona
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
    } else { // si el usuario no tiene permisos, enviamos un mensaje de error
        res.status(403).send('No tienes permiso para realizar esta acción'); 
    }
});

///////// Ejecutar rol location
router.post('/location/:id', async (req, res) => { // ruta para buscar locaciones
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    let data = '';

    if (foundUser.roll === 'location' || foundUser.roll === 'admin') { // si el usuario tiene el rol de location o admin, ejecuta la busqueda
        
        const location = req.body; // obtenemos la locacion del body, el cual viene en formato JSON
        
        let location_id = '';
        if (location.id === undefined || location.id === null){ // si viene vacia la variable location.id ejecuta la busqueda
            let config = {
                method: 'get',  // metodo get
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/location', // url de la api
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
        else // si viene un id en la variable location.id, ejecuta la busqueda por id
        {
            location_id = location.id;
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/location/${location_id}`, // url de la api con el id de la locacion
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error); 
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
    } else { // si el usuario no tiene permisos, enviamos un mensaje de error
        res.status(403).send('No tienes permiso para realizar esta acción'); 
    }
});

///////// Ejecutar rol species
router.post('/species/:id', async (req, res) => {  // ruta para buscar especies
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    let data = '';

    if (foundUser.roll === 'species' || foundUser.roll === 'admin') { // si el usuario tiene el rol de species o admin, ejecuta la busqueda
        
        const species = req.body; // obtenemos la especie del body, el cual viene en formato JSON
        
        let species_id = '';
        if (species.id === undefined || species.id === null){ // si viene vacia la variable species.id ejecuta la busqueda
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/species', // url de la api
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
        else // si viene un id en la variable species.id, ejecuta la busqueda por id
        {
            species_id = species.id;
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/species/${species_id}`, // url de la api con el id de la especie
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
    } else { // si el usuario no tiene permisos, enviamos un mensaje de error
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

///////// Ejecutar rol vehicles
router.post('/vehicles/:id', async (req, res) => { // ruta para buscar vehiculos
    const { id } = req.params; // obtenemos el id del usuario que queremos buscar

    const foundUser = users.find((user) => user.id === id); // buscamos el usuario en el array de usuarios

    let data = '';

    if (foundUser.roll === 'vehicles' || foundUser.roll === 'admin') { // si el usuario tiene el rol de vehicles o admin, ejecuta la busqueda
        
        const vehicles = req.body; // obtenemos el vehiculo del body, el cual viene en formato JSON
        
        let vehicles_id = '';
        if (vehicles.id === undefined || vehicles.id === null){ // si viene vacia la variable vehicles.id ejecuta la busqueda
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: 'https://ghibliapi.vercel.app/vehicles', // url de la api
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
        else // si viene un id en la variable vehicles.id, ejecuta la busqueda por id
        {
            vehicles_id = vehicles.id;
            let config = {
                method: 'get', // metodo get
                maxBodyLength: Infinity,
                url: `https://ghibliapi.vercel.app/vehicles/${vehicles_id}`, // url de la api con el id del vehiculo
                headers: { }
                };
                
            try {
                const response = await axios.request(config); // ejecutamos la peticion a la api
                const data = JSON.stringify(response.data); // convertimos la respuesta a JSON
                res.send(data); // enviamos la respuesta
            } catch (error) {
                console.log(error);
                res.status(404).send('No encontrado'); // si hay un error, enviamos un mensaje de error
            }
        }
    } else { // si el usuario no tiene permisos, enviamos un mensaje de error
        res.status(403).send('No tienes permiso para realizar esta acción');
    }
});

export default router;