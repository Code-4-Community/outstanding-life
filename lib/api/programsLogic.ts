import prisma from '../../prisma/prisma';
import { programsWriteSchema } from '../types/dtos/createProgramsRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getAllProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ Programs: await prisma.programs.findMany() });
};

export const postProgramHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const validatedProgram = validateCreateProgramRequest(req.body);
  //upload to S3

  const pictureS3Url = ''; //get s3 url
  await prisma.programs.create({ data: { ...validatedProgram, pictureS3Url } });
  res.status(201).end();
};

//export const updateProgramHandler = async

const validateCreateProgramRequest = (maybePrograms: unknown) => {
  try {
    return programsWriteSchema.parse(maybePrograms);
  } catch (e) {
    throw new BadRequestError('Programs must include title + content');
  }
};
