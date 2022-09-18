import express from 'express';
import {
  getAllMovies,
  getSingleMovie,
} from '../controller/movie.controller.js';

export const movieRouter = express.Router();

movieRouter.get('/', getAllMovies);
movieRouter.get('/:id/', getSingleMovie);
