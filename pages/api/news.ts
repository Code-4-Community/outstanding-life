// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import makeRoute from '../../lib/utils/utils';
import prisma from '../../prisma/prisma';
import { NewsWrite, newsWriteSchema } from '../../lib/api/createNewsRequest.dto';
import { BadRequestError } from '../../lib/utils/errors/badRequestError';

export const getNewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ news: await prisma.news.findMany() });
};

export const postNewsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedNews = validateCreateNewsRequest(req.body);
  await prisma.news.create({ data: validatedNews });
  res.status(201);
};

export default makeRoute().get(getNewsHandler).post(postNewsHandler);

const validateCreateNewsRequest = (maybeNews:unknown) => {
  try {
    return newsWriteSchema.parse(maybeNews);  
  } catch (e) {
    throw new BadRequestError('News must include title + content');
  }
};
