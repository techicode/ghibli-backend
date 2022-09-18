import express from 'express';
import {
  getAllDirectors,
  getDirector,
} from '../controller/director.controller.js';

export const directorRouter = express.Router();

directorRouter.get('/', getAllDirectors);
directorRouter.get('/:id/', getDirector);
