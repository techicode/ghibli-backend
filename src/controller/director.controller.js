import { PrismaClient } from '@prisma/client';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

// returns all the directors
export const getAllDirectors = async (req, res) => {
  try {
    const directors = await prisma.director.findMany();

    return res.status(200).send(directors);
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }
};

// return an specific director by the request id param
export const getDirector = async (req, res) => {
  const { id } = req.params;
  const directorId = numberValidator(id);

  // check if the given id is a valid number
  if (typeof directorId !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  try {
    const director = await prisma.director.findUnique({
      where: { id: directorId },
    });
    // if director is not found, return an 404 error
    if (!director) return res.status(404).send({ error: 'Director not found' });

    return res.status(200).send(director);
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }
};

// get an array of all movies from the given id director
export const getMoviesFromDirector = async (req, res) => {
  const { id } = req.params;
  const directorId = numberValidator(id);

  // check if the given id is a valid number
  if (typeof directorId !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  // find a director with and id, this is to validate if the director exists
  const director = await prisma.director.findUnique({
    where: { id: directorId },
  });

  // if director is not found, return an 404 error
  if (!director) return res.status(404).send({ error: 'Director not found' });

  try {
    // find all movies from the founded director
    const moviesFromDirector = await prisma.movie.findMany({
      where: {
        director_id: directorId,
      },
    });

    return res.status(200).send(moviesFromDirector);
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }
};
