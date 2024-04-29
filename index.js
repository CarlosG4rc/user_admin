
import express from 'express'; // Importo express
import bodyParser from 'body-parser'; // Importo el body-parser
const app = express();
import userRouter from './routes/users.js'; // Importo el archivo de rutas

const PORT = 5000;

app.use(bodyParser.json()); // Middleware para parsear el body a JSON

app.use('/users', userRouter); // Middleware para las rutas de /users

app.get('/', (req, res) => res.send('Hola mundo!')); // Ruta de prueba 

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // Inicio el servidor
