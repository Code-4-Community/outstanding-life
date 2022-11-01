import { Program } from '@prisma/client';
import { ProgramsWrite } from '../../../lib/types/dtos/createProgramRequest.dto';

export const createProgram0: ProgramsWrite = {
  title: 'halloween',
  content: ':)',
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const createProgramBad: unknown = {
  title: "i'm missing content field!",
};

export const createProgramNoTitle: unknown = {
  content: "i'm missing title field!",
};

export const createProgramsEmptyTitle: unknown = {
  title: '',
};

export const createProgramsEmptyContent: unknown = {
  title: 'First news',
  content: '',
};

export const program0: Event = {
  id: 0,
  title: 'First news',
  content: ':)',
  createdAt: new Date('1997-08-17'),
};

export const program1 = {
  id: 1,
  title: 'Second news',
  content: ':))',
  createdAt: new Date('2001-01-15'),
};
