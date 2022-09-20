import { PrismaClient } from '@prisma/client';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

export const getAllMovies = async (req, res) => {
  const page = numberValidator(req.query.page) || 0;

  const RESULTS_ITEMS = 4;

  const skip = page === 0 ? 0 : (page - 1) * RESULTS_ITEMS;

  if (skip < 0)
    return res.status(400).send({ error: `page can't be a negative number` });

  const movies = await prisma.movie.findMany({
    include: {
      director: true,
      producer: true,
    },
    skip: skip,
    take: RESULTS_ITEMS,
  });

  if (movies.length === 0)
    return res.status(400).send({ error: 'page out of bounds' });

  return res.status(200).send(movies);
};

export const getSingleMovie = async (req, res) => {
  const { id } = req.params;
  const idMovie = numberValidator(id);

  if (typeof idMovie !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

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

  if (!movies) return res.status(404).send({ error: 'Movie not found' });

  return res.status(200).send(movies);
};
