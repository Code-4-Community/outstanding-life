import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';
import { BadRequestError } from './errors/badRequestError';

export default function makeRoute() {
  return nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      if (err instanceof BadRequestError) {
        res.status(400).end(err.message);
      } else {
        res.status(500).end('Something broke!');
      }     
    },
    onNoMatch: (req, res, next) => {
      res.status(404).end('Page is not found');
    },
  }).use(cors());
}
