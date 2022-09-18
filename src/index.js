import express from 'express';
import { directorRouter } from './routes/director.routes.js';
import { movieRouter } from './routes/movie.routes.js';
import { producerRouter } from './routes/producer.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', movieRouter);
app.use('/directors', directorRouter);
app.use('/producers', producerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
