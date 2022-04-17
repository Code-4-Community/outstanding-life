import { News } from '@prisma/client';
import { NewsWrite } from '../../../lib/types/dtos/createNewsRequest.dto';

export const createNews0: NewsWrite = {
  title: 'First news',
  content: ':)',
};

export const createNewsBad: unknown = {
  title: "i'm missing content field!",
};

export const createNoTitle: unknown = {
  content: "i'm missing title field!",
};

export const createNewsEmptyTitle: unknown = {
  title: '',
};

export const createNewsEmptyContent: unknown = {
  title: 'First news',
  content: '',
};

export const news0: News = {
  id: 0,
  title: 'First news',
  content: ':)',
  createdAt: new Date('1997-08-17'),
};

export const news1 = {
  id: 1,
  title: 'Second news',
  content: ':))',
  createdAt: new Date('2001-01-15'),
};
