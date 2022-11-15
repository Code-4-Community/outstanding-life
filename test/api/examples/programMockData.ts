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
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const createProgramNoTitle: unknown = {
  content: "i'm missing title field!",
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const createProgramsEmptyTitle: unknown = {
  title: '',
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const createProgramsNoContent: unknown = {
  title: 'First program',
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
}

export const createProgramsEmptyContent: unknown = {
  title: 'First program',
  content: '',
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const createProgramsNoLink: unknown = {
  title: 'halloween',
  content: ':)',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
}

export const createProgramsEmptyLink: unknown = {
  title: 'halloween',
  content: ':)',
  link: '',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
}

export const createProgramsNoStartDate: unknown = {
  title: 'First program',
  content: 'No start date :((',
  link: 'https://www.c4cneu.com/',
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
}

export const createProgramsNoEndDate: unknown = {
  title: 'First program',
  content: 'No start date :((',
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T15:00:00.000Z')
}



export const program0: Program = {
  id: 0,
  title: 'First news',
  content: ':)',
  createdAt: new Date('1997-08-17'),
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};

export const program1: Program = {
  id: 1,
  title: 'Second news',
  content: ':))',
  createdAt: new Date('2001-01-15'),
  link: 'https://www.c4cneu.com/',
  eventStart: new Date('2022-10-31T14:00:00.000Z'),
  eventEnd: new Date('2022-10-31T15:00:00.000Z')
};
