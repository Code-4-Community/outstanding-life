import prisma from '../../prisma/prisma';
import { newsWriteSchema } from '../types/dtos/createNewsRequest.dto';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getNewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ news: await prisma.news.findMany() });
};

export const postNewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedNews = validateCreateNewsRequest(req.body);
  await prisma.news.create({ data: validatedNews });
  res.status(201).end();
};

const validateCreateNewsRequest = (maybeNews: unknown) => {
  try {
    return newsWriteSchema.parse(maybeNews);
  } catch (e) {
    throw new BadRequestError('News must include title + content');
  }
};
