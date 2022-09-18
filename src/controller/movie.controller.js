import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMovies = async (req, res) => {
  const movies = await prisma.movie.findMany({
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
  });

  return res.status(200).send(movies);
};

export const getSingleMovie = async (req, res) => {
  const { id } = req.params;
  const idMovie = Number.parseInt(id);

  if (Number.isNaN(idMovie))
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
