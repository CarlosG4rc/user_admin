<h1 align="center">Administrador de usaurios para API user_admin</h1>

<li align="left">
  API user_admin ayuda a gestionar usuarios (crear, actualizar, visualizar y eliminar), dentro de los parametros para creacion de usuarios se podrán asignar roles (admin, films, people, species, locations, vehicles)
</p>

<h2 align="left">Uso de API user_admin</h2>

<ul>
  <li align="left">Para poder utilizar esta API de manera local necesitas clonar este repositorio.</li>
  <li align="left">Abrir tu consola favorita y dirigirte a la carpeta del proyecto.</li>
  <li align="left">Una vez dentro de la carpeta del repositorio debes ejecutar el comando: 
    
    npm install 
    
  </li>
  <li align="left">Y una vez terminado el proceso de instalación puedes escribir el siguiente comando: 
    
    node index.js
</li>
  <li align="left">La siguiente linea de comandos te aparecerá la liga local con la que podrás ejecutar las pruebas locales.</li>
</ul>
<h2 align="left">Creación de usuarios</h2>
<p align="left">La primer liga que podemos ejecutar es la de crear usuario.</p>
<p align="left">URL: http://localhost:5000/users</p>
<p align="left">Method: POST</p>
<p align="left">Body: </p>
<p align="left">En el body enviaremos los datos necesarios para crear un usuario, serian first_name, last_name, email y roll.</p>

<p align="left">Los tipos de datos que se manden e cada campo son:</p>

<ul>
  <li>first_name - string</li>
  <li>last_name - string</li>
  <li>email - string</li>
  <li>roll - string</li>
</ul>

Las opciones para el parametro de roll debe ser:
<ul>
  <li>admin</li>
  <li>films</li>
  <li>people</li>
  <li>locations</li>
  <li>species</li>
  <li>vehicles</li>
</ul>

<h3>Body ejemplo:</h3>

```
{
    "first_name": "Letz",
    "last_name": "Vilchis",
    "email": "john@johnson.com",
    "roll": "admin"
 }
```

En seguida te aparecera el status 200 y un texto de confirmación.
![user_creation](https://github.com/CarlosG4rc/user_admin/assets/67180099/9a8a6d74-87ef-416d-ad0d-98806b24e548)

<h2>Obtención de todos los usuarios</h2>

<p align="left">La liga para obtener todos los usuarios.</p>
<p align="left">URL: http://localhost:5000/users</p>
<p align="left">Method: GET</p>
<p align="left">En este caso no necesitamos ningun parametro.</p>

Obtendremos un paquete de usuarios tipo JSON, y el estatus 200.

![users_viewer](https://github.com/CarlosG4rc/user_admin/assets/67180099/f25feddb-ae53-4bf0-b187-9dd43cd7aa42)

<h2>Obtención de un usuario específico</h2>

<p align="left">La liga para obtener un usuario específico es:</p>
<p align="left">URL: http://localhost:5000/users/:id</p>
<p align="left">Method: GET</p>
<p align="left">Para traer a un usuario espécifico debemos enviar por medio del URL el id usuario mostrado en el endpoint anterior</p>

Obtendremos los datos del usuario con el id provisto en formato JSON y un estatus 200.

![user_viewer](https://github.com/CarlosG4rc/user_admin/assets/67180099/4f730320-7724-4a5e-b51d-bc344bd18a9e)

<h2>Actualización de un usuario</h2>

<p align="left">Los requistos para obtener actualizar los datos de un usuario es:</p>
<p align="left">URL: http://localhost:5000/users/:id</p>
<p align="left">Method: PATCH</p>
<p align="left">Para actualizar a un usuario espécifico debemos enviar por medio del URL el id usuario mostrado en el endpoint que trae todos los usuarios</p>

<h3>Body:</h3>

Para que funcione correctamente este endpoint se encesita enviar en el body un JSON en donde venga que parametro se va a modificar y porque dato será modificado como se muestra en seguida:

{ ```dato a modificar``` : ```dato modificado```}

por ejemplo:

```
{
    "last_name":"hernandez"
}
```
Tenemos los sigientes usuarios segun el endpoint anterior:
![users_first](https://github.com/CarlosG4rc/user_admin/assets/67180099/9d268b2a-83c6-4aa0-95d9-efe07a6e9f20)

Ejecutamos el endpoint para modificar usuario:

![update_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/684e6a50-6168-4ef8-a327-45f9de6cee7d)

y podemos revisar que haya cambiado el dato:



<h2>Borrado de usuario especifico</h2>

<p align="left">Los requistos para borrar a un usuario son:</p>
<p align="left">URL: http://localhost:5000/users/:id</p>
<p align="left">Method: DELETE</p>
<p align="left">Para borrar a un usuario espécifico debemos enviar por medio del URL el id usuario mostrado en el endpoint que trae todos los usuarios</p>

![delete_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/1835fe12-4dcc-498d-9d42-0dfba8029280)

Podemos revisar a todos los usuarios y veremos que y no esta en los registros:

![updated_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/1be41921-0ba7-45b7-b4da-157f5731377d)


![deleted_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/c08319c6-e1a3-4591-abdc-feb66b8d428d)



