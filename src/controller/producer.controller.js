import { PrismaClient } from '@prisma/client';
import { numberValidator } from '../utils/number-validator.js';

const prisma = new PrismaClient();

export const getAllProducers = async (req, res) => {
  const producers = await prisma.producer.findMany();

  return res.status(200).send(producers);
};

export const getProducer = async (req, res) => {
  const { id } = req.params;
  const producerId = numberValidator(id);

  if (typeof producerId !== 'number')
    return res.status(400).send({ error: 'Invalid input' });

  const producer = await prisma.producer.findUnique({
    where: { id: producerId },
  });

  if (!producer) return res.status(404).send({ error: 'Producer not found' });

  return res.status(200).send(producer);
};

export const getMoviesFromProducer = async (req, res) => {
  const { id } = req.params;
  const producerId = numberValidator(id);

  if (!producerId) return res.status(400).send({ error: 'Invalid input' });

  const producer = await prisma.producer.findUnique({
    where: { id: producerId },
  });

  if (!producer) return res.status(404).send({ error: 'Producer not found' });

  const moviesFromProducer = await prisma.movie.findMany({
    where: {
      producer_id: producerId,
    },
  });

  return res.status(200).send(moviesFromProducer);
};
