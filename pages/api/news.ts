// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import makeRoute from '../../lib/utils/utils';
import prisma from '../../prisma/prisma';

// TODO: handle validation errors of 400.
export default makeRoute().get(async (req, res) => {
  res.json({ news: await prisma.news.findMany() })
}).post(async (req, res) => {
    const validatedNews = validateCreateNewsRequest(req.body);
    await prisma.news.create({data : validatedNews})
    res.status(201); 
});

const validateCreateNewsRequest = (maybeNews:any) => {
  if (!maybeNews || !maybeNews.title || !maybeNews.description) {
    throw new Error('Not a well-formed news');
  }
  else {
    return maybeNews;
  }
}