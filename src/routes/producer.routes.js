import express from 'express';
import {
  getAllProducers,
  getMoviesFromProducer,
  getProducer,
} from '../controller/producer.controller.js';

export const producerRouter = express.Router();

producerRouter.get('/', getAllProducers);
producerRouter.get('/:id/', getProducer);
producerRouter.get('/:id/movies/', getMoviesFromProducer);
