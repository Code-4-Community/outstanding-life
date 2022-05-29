import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';
import { BadRequestError } from './errors/badRequestError';
import { Buffer } from 'buffer';

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

export function getImageBufferFromBase64(base64string: string): Buffer {
  const cleanedBase64String: string = base64string.replace(/^data:image\/\w+;base64,/, '');
  return Buffer.from(cleanedBase64String, 'base64');
}

export function getDate(date: Date = new Date()) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayString = days[date.getDay()];
  const monthNum = date.getMonth();
  const monthString = months[monthNum];

  return {
    year: date.getFullYear(),
    monthNumber: monthNum,
    date: date.getDate(),
    monthString: monthString,
    day: dayString,
  };
}
