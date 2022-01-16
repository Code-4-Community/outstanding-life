import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

export default function makeRoute() {
  return nc<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end('Something broke!');
    },
    onNoMatch: (req, res, next) => {
      res.status(404).end('Page is not found');
    },
  }).use(cors());
}