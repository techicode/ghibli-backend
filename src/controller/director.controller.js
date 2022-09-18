import { PrismaClient } from '@prisma/client';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

export const getAllDirectors = async (req, res) => {
  const directors = await prisma.director.findMany();

  return res.status(200).send(directors);
};

export const getDirector = async (req, res) => {
  const { id } = req.params;
  const directorId = numberValidator(id);

  if (typeof directorId !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  const director = await prisma.director.findUnique({
    where: { id: directorId },
  });

  if (!director) return res.status(404).send({ error: 'Director not found' });

  return res.status(200).send(director);
};

export const getMoviesFromDirector = async (req, res) => {
  const { id } = req.params;
  const directorId = numberValidator(id);

  if (!directorId) return res.status(400).send({ error: 'Invalid input' });

  const director = await prisma.director.findUnique({
    where: { id: directorId },
  });

  if (!director) return res.status(404).send({ error: 'Director not found' });

  const moviesFromDirector = await prisma.movie.findMany({
    where: {
      director_id: directorId,
    },
  });

  return res.status(200).send(moviesFromDirector);
};
