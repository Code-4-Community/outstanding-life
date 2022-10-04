import { Program } from '@prisma/client';
import { ProgramsWrite } from '../../../lib/types/dtos/createEventRequest.dto';

export const createProgram0: ProgramsWrite = {
  title: 'First news',
  content: ':)',
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
