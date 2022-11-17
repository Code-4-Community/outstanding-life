import prisma from '../../prisma/prisma';
import { programsWriteSchema } from '../types/dtos/createProgramRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ news: await prisma.program.findMany() });
};

export const postProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedProgram = validateCreateProgramsRequest(req.body);
  await prisma.program.create({ data: validatedProgram });
  res.status(201).end();
};

const validateCreateProgramsRequest = (maybeProgram: unknown) => {
  try {
    return programsWriteSchema.parse(maybeProgram);
  } catch (e) {
    throw new BadRequestError(
      'Program must contain: title, content, link, program start and program end times.',
    );
  }
};
