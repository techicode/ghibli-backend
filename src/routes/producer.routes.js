import express from 'express';
import {
  getAllProducers,
  getProducer,
} from '../controller/producer.controller.js';

export const producerRouter = express.Router();

producerRouter.get('/', getAllProducers);
producerRouter.get('/:id/', getProducer);
