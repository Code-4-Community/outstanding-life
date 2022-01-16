// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import makeRoute from '../../lib/utils/utils';

type Data = {
  name: string;
};

export default makeRoute().get((req, res) => {
  res.json({ name: "Hello world" });
})