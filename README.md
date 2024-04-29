<h1 align="center">Administrador de usuarios para API user_admin</h1>

API user_admin ayuda a gestionar usuarios (crear, actualizar, visualizar y eliminar), dentro de los parametros para creacion de usuarios se podrán asignar roles (admin, films, people, species, locations, vehicles)

El stack de este proyecto en node.js y EXPRESS

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

![updated_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/1be41921-0ba7-45b7-b4da-157f5731377d)

<h2>Borrado de usuario especifico</h2>

<p align="left">Los requistos para borrar a un usuario son:</p>
<p align="left">URL: http://localhost:5000/users/:id</p>
<p align="left">Method: DELETE</p>
<p align="left">Para borrar a un usuario espécifico debemos enviar por medio del URL el id usuario mostrado en el endpoint que trae todos los usuarios</p>

![delete_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/1835fe12-4dcc-498d-9d42-0dfba8029280)

Podemos revisar a todos los usuarios y veremos que y no esta en los registros:

![deleted_user](https://github.com/CarlosG4rc/user_admin/assets/67180099/c08319c6-e1a3-4591-abdc-feb66b8d428d)

<h2>Rol de consumo de servicio en Studio Ghibli</h2>

Podemos realizar ciertas consultas de acuerdo al rol que hemos elegido.

<h3>Films</h3>

Si tenemos el rol de films podemos obtener todos los films del estudio o un film en especifico:

El primer endpointa usar tiene las siguientes características:

<p align="left">URL: http://localhost:5000/users/films/:id</p>
<p align="left">Method: POST</p>
<p align="left">Con este endpoint podemos obtener el catálogo de films del studio, en caso de que el id provisto sea de un usuario que tiene el rol de films o admin de lo contrario el acceso será restringido</p>

Si no mandamos ningún parametro por body obtendremostodo el catálogo como se muestra a continuación:

![films](https://github.com/CarlosG4rc/user_admin/assets/67180099/d2542928-acb8-49eb-b824-6f093bf4145f)

En caso de mandar un body debe ser en formato JSON.
```
{
    "id":"af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
}
```

![a_film](https://github.com/CarlosG4rc/user_admin/assets/67180099/45fad22b-2e1b-472e-b9b5-524f4a0777dc)

<h3>People</h3>

Si tenemos el rol de people podemos obtener todos las personas del estudio o de una person en especifico:

<p align="left">URL: http://localhost:5000/users/people/:id</p>
<p align="left">Method: POST</p>
<p align="left">Con este endpoint podemos obtener los datos de todas las personas del studio, en caso de que el id provisto sea de un usuario que tiene el rol de people o admin de lo contrario el acceso será restringido</p>

Si no mandamos ningún parametro por body obtendremostodo el catálogo como se muestra a continuación:

![people](https://github.com/CarlosG4rc/user_admin/assets/67180099/a8a39ea9-c782-46ee-8397-ff8d5d82f2a0)

En caso de mandar un body debe ser en formato JSON.
```
{
    "id":"af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
}
```

![a_person](https://github.com/CarlosG4rc/user_admin/assets/67180099/906fa82d-a874-43ee-a530-9b210ef5f902)

<h3>Locations</h3>

<p align="left">URL: http://localhost:5000/users/location/:id</p>
<p align="left">Method: POST</p>
<p align="left">Con este endpoint podemos obtener los datos de todas las locaciones del studio, en caso de que el id provisto sea de un usuario que tiene el rol de people o admin de lo contrario el acceso será restringido</p>

Si no mandamos ningún parametro por body obtendremostodo el catálogo como se muestra a continuación:

![locations](https://github.com/CarlosG4rc/user_admin/assets/67180099/7e0d6429-3784-4534-b11b-f5ee6f238dc5)

En caso de mandar un body debe ser en formato JSON.
```
{
    "id":"af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
}
```

![a_location](https://github.com/CarlosG4rc/user_admin/assets/67180099/42570d96-550e-48e8-8c63-406b3e94980c)

<h3>Species</h3>

<p align="left">URL: http://localhost:5000/users/species/:id</p>
<p align="left">Method: POST</p>
<p align="left">Con este endpoint podemos obtener los datos de todas las especies del studio incluidos humanos, animales y espiritus, en caso de que el id provisto sea de un usuario que tiene el rol de people o admin de lo contrario el acceso será restringido</p>

Si no mandamos ningún parametro por body obtendremostodo el catálogo como se muestra a continuación:

![species](https://github.com/CarlosG4rc/user_admin/assets/67180099/ac09e101-7d75-4a6b-aaec-cab181e8eb4c)

En caso de mandar un body debe ser en formato JSON.
```
{
    "id":"af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
}
```

![a_specie](https://github.com/CarlosG4rc/user_admin/assets/67180099/87486e28-821c-40e8-b355-23edd62c1542)

<h3>Vehicle</h3>

<p align="left">URL: http://localhost:5000/users/vehicle/:id</p>
<p align="left">Method: POST</p>
<p align="left">Con este endpoint podemos obtener los datos de todos los vehiculos, en caso de que el id provisto sea de un usuario que tiene el rol de people o admin de lo contrario el acceso será restringido</p>

Si no mandamos ningún parametro por body obtendremostodo el catálogo como se muestra a continuación:

![vehicles](https://github.com/CarlosG4rc/user_admin/assets/67180099/abce9228-d67b-49d6-b7f5-3f631da11f96)

En caso de mandar un body debe ser en formato JSON.
```
{
    "id":"af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
}
```

![a_vehicle](https://github.com/CarlosG4rc/user_admin/assets/67180099/89a084b4-a663-4359-b023-cfce2435eb72)

