import prisma from '../../prisma/prisma';
import { programsWriteSchema } from '../types/dtos/createProgramsRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ Programs: await prisma.programs.findMany() });
};

export const postProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedPrograms = validateCreateProgramsRequest(req.body);
  await prisma.programs.create({ data: validatedPrograms });
  res.status(201).end();
};

const validateCreateProgramsRequest = (maybePrograms: unknown) => {
  try {
    return programsWriteSchema.parse(maybePrograms);
  } catch (e) {
    throw new BadRequestError('Programs must include title + content');
  }
};
