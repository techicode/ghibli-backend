import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime/index.js';

import { ALLOWED_METHODS } from './constants/allowed-methods.js';
import { LIMITER_OPTIONS } from './constants/limiter.js';
import { directorRouter } from './routes/director.routes.js';
import { movieRouter } from './routes/movie.routes.js';
import { producerRouter } from './routes/producer.routes.js';

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apply the rate limiting middleware to all requests
// app.use(LIMITER_OPTIONS);

// check connection with the db
try {
  await prisma.$connect();
} catch (error) {
  if (error instanceof PrismaClientInitializationError) {
    console.log('Failed to connect to the database');
    console.log('Check if postgres service is up, then run again the server');
    process.exit();
  } else {
    console.log('Unexpected error');
  }
}

// block all the methods except GET
app.use('*', (req, res, next) => {
  if (!ALLOWED_METHODS.has(req.method)) {
    return res.status(405).send('Method Not Allowed');
  }

  return next();
});

// static server for images
app.use('/static', express.static('public'));

// routes for the endpoints
app.use('/movies', movieRouter);
app.use('/directors', directorRouter);
app.use('/producers', producerRouter);

app.listen(port, () => {
  console.log(`Ghibli API listening on port ${port}`);
});

export default app;