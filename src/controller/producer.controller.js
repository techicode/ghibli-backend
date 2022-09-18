import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducers = async (req, res) => {
  const producers = await prisma.producer.findMany();

  return res.status(200).send(producers);
};

export const getProducer = async (req, res) => {
  const { id } = req.params;
  const producerId = Number.parseInt(id);
  // TODO fix response when the id is invalid (not a number)

  const producer = await prisma.producer.findUnique({
    where: { id: producerId },
  });

  if (!producer) return res.status(404).send({ error: 'Producer not found' });

  return res.status(200).send(producer);
};


// TODO response with all the movies from a single producer, example /producer/:id/movies/ 