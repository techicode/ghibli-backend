import { PrismaClient } from '@prisma/client';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

// returns all the producers
export const getAllProducers = async (req, res) => {
  try {
    const producers = await prisma.producer.findMany();

    return res.status(200).send(producers);
  } catch (error) {
    logger.log({
      level: 'error',
      message: error,
    });
    return res.status(500).send({ error: 'Database error' });
  }
};

// return an specific producers by the request id param
export const getProducer = async (req, res) => {
  const { id } = req.params;
  const producerId = numberValidator(id);

  // check if the given id is a valid number
  if (typeof producerId !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  const producer = await prisma.producer.findUnique({
    where: { id: producerId },
  });

  // if producer is not found, return an 404 error
  if (!producer) return res.status(404).send({ error: 'Producer not found' });

  return res.status(200).send(producer);
};

// get an array of all movies from the given id producer
export const getMoviesFromProducer = async (req, res) => {
  const { id } = req.params;
  const producerId = numberValidator(id);

  // check if the given id is a valid number
  if (!producerId) return res.status(400).send({ error: 'Invalid input' });

  // find a producer with and id, this is to validate if the producer exists
  const producer = await prisma.producer.findUnique({
    where: { id: producerId },
  });

  if (!producer) return res.status(404).send({ error: 'Producer not found' });

  // find all movies from the founded producer
  const moviesFromProducer = await prisma.movie.findMany({
    where: {
      producer_id: producerId,
    },
  });

  return res.status(200).send(moviesFromProducer);
};
