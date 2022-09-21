import { PrismaClient } from '@prisma/client';

import { logger } from '../logger/logger.js';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

// get all the movies, this endpoint allow to ask for a certain page
export const getAllMovies = async (req, res) => {
  // if the given page number is invalid, transform to 0
  const page = numberValidator(req.query.page) || 0;

  // constant with hoy many items per page will be show in the api response
  const RESULTS_ITEMS = 4;

  // determinate how many items need to skip depending of the page
  const skip = page === 0 ? 0 : (page - 1) * RESULTS_ITEMS;

  if (skip < 0)
    return res.status(400).send({ error: `page can't be a negative number` });

  try {
    const movies = await prisma.movie.findMany({
      include: {
        director: true,
        producer: true,
      },
      skip: skip,
      take: RESULTS_ITEMS,
    });

    // if the array comes empty, that mean the give page is out of bounds
    if (movies.length === 0)
      return res.status(400).send({ error: 'page out of bounds' });

    return res.status(200).send(movies);
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }
};

// get a single movie with a given id
export const getSingleMovie = async (req, res) => {
  const { id } = req.params;
  const idMovie = numberValidator(id);

  // check if the given id is a valid number
  if (typeof idMovie !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  // search for an unique movie with also information about director and producer
  try {
    const movies = await prisma.movie.findUnique({
      include: {
        director: {
          select: {
            name: true,
          },
        },
        producer: {
          select: {
            name: true,
          },
        },
      },
      where: {
        id: idMovie,
      },
    });

    // if there's no movie, return 404
    if (!movies) return res.status(404).send({ error: 'Movie not found' });
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }

  return res.status(200).send(movies);
};
