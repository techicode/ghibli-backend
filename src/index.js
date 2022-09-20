import express from 'express';
import cors from 'cors';

import { ALLOWED_METHODS } from './constants/allowed-methods.js';
import { LIMITER_OPTIONS } from './constants/limiter.js';
import { directorRouter } from './routes/director.routes.js';
import { movieRouter } from './routes/movie.routes.js';
import { producerRouter } from './routes/producer.routes.js';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply the rate limiting middleware to all requests
// app.use(LIMITER_OPTIONS);

app.use('*', (req, res, next) => {
  if (!ALLOWED_METHODS.has(req.method)) {
    return res.status(405).send('Method Not Allowed');
  }

  return next();
});

app.use('/movies', movieRouter);
app.use('/directors', directorRouter);
app.use('/producers', producerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
