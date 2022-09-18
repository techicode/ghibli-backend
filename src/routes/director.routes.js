import express from 'express';
import {
  getAllDirectors,
  getDirector,
  getMoviesFromDirector,
} from '../controller/director.controller.js';

export const directorRouter = express.Router();

directorRouter.get('/', getAllDirectors);
directorRouter.get('/:id/', getDirector);
directorRouter.get('/:id/movies/', getMoviesFromDirector);
