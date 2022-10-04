import { News } from '@prisma/client';
import { EventsWrite } from '../../../lib/types/dtos/createEventRequest.dto';

export const createNews0: EventsWrite = {
  title: 'First news',
  content: ':)',
};

export const createEventsBad: unknown = {
  title: "i'm missing content field!",
};

export const createNoTitle: unknown = {
  content: "i'm missing title field!",
};

export const createEventsEmptyTitle: unknown = {
  title: '',
};

export const createEventsEmptyContent: unknown = {
  title: 'First news',
  content: '',
};

export const events0: Event = {
  id: 0,
  title: 'First news',
  content: ':)',
  createdAt: new Date('1997-08-17'),
};

export const events1 = {
  id: 1,
  title: 'Second news',
  content: ':))',
  createdAt: new Date('2001-01-15'),
};
