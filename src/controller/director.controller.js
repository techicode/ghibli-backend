import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDirectors = async (req, res) => {
  const directors = await prisma.director.findMany();

  return res.status(200).send(directors);
};

export const getDirector = async (req, res) => {
  const { id } = req.params;
  const directorId = Number.parseInt(id);
  // TODO fix response when the id is invalid (not a number)

  const director = await prisma.director.findUnique({
    where: { id: directorId },
  });

  if (!director) return res.status(404).send({ error: 'Director not found' });

  return res.status(200).send(director);
};


// TODO response with all the movies from a single director, example /directors/:id/movies/ 