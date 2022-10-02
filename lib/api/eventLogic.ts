import prisma from '../../prisma/prisma';
import { eventWriteSchema } from '../types/dtos/createEventRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getNewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ news: await prisma.news.findMany() });
};

export const postEventsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedEvent = validateCreateEventRequest(req.body);
  await prisma.news.create({ data: validatedEvent });
  res.status(201).end();
};

const validateCreateEventRequest = (maybeEvent: unknown) => {
  try {
    return eventWriteSchema.parse(maybeEvent);
  } catch (e) {
    throw new BadRequestError('Event must contain: title, content, link, event start and event end times.');
  }
};
