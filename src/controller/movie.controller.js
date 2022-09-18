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

  // TODO fix response when the id is invalid (not a number)

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

  // TODO fix when the id is invalid or not found
  if (!movies) return res.status(404).send({error: 'Movie not found'})

  return res.status(200).send(movies);
};


