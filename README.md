<h1 align="center">Administrador de usaurios para API user_admin</h1>

<li align="left">
  API user_admin ayuda a gestionar usuarios (crear, actualizar, visualizar y eliminar), dentro de los parametros para creacion de usuarios se podrán asignar roles (admin, films, people, species, locations, vehicles)
</p>

<h2 align="left">Uso de API user_admin</h2>

<ul>
  <li align="left">Para poder utilizar esta API de manera local necesitas clonar este repositorio.</li>
  <li align="left">Abrir tu consola favorita y dirigirte a la carpeta del proyecto.</li>
  <li align="left">Una vez dentro de la carpeta del repositorio debes ejecutar el comando: npm install </li>
  <li align="left">Y una vez terminado el proceso de instalación puedes escribir el siguiente comando: node index.js
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

{
    "first_name": "Letz",
    "last_name": "Vilchis",
    "email": "john@johnson.com",
    "roll": "admin"
}

En seguida te aparecera el status 200 y un texto de confirmación.
![user_creation](https://github.com/CarlosG4rc/user_admin/assets/67180099/9a8a6d74-87ef-416d-ad0d-98806b24e548)

<h2>Obtención de tods los usuarios</h2>
