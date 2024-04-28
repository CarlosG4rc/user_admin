
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import userRouter from './routes/users.js';

const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRouter);

app.get('/', (req, res) => res.send('Hola mundo!'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
