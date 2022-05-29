import { Programs } from '@prisma/client';
import { ProgramsWrite } from '../../../lib/types/dtos/createProgramsRequest.dto';

export const createPrograms0: ProgramsWrite = {
  title: 'First programs',
  content: ':)',
};

export const createProgramsBad: unknown = {
  title: "i'm missing content field!",
};

export const createNoTitle: unknown = {
  content: "i'm missing title field!",
};

export const createProgramsEmptyTitle: unknown = {
  title: '',
};

export const createProgramsEmptyContent: unknown = {
  title: 'First Programs',
  content: '',
};

export const programs0: Programs = {
  id: 0,
  title: 'First Programs',
  content: ':)',
  createdAt: new Date('1997-08-17'),
};

export const programs1 = {
  id: 1,
  title: 'Second programs',
  content: ':))',
  createdAt: new Date('2001-01-15'),
};
