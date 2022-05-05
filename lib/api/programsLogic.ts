import prisma from '../../prisma/prisma';
import { ProgramsWrite, programsWriteSchema } from '../types/dtos/createProgramsRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadToS3 } from '../aws';
import { getImageBufferFromBase64 } from '../utils/utils';

export const getAllProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ Programs: await prisma.programs.findMany() });
};

export const postProgramHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, base64EncodedImage, eventDateISOString }: ProgramsWrite =
    validateCreateProgramRequest(req.body);
  // TODO: make URL safe title (replace . with _)
  await uploadToS3(
    `${eventDateISOString}_${title}`,
    getImageBufferFromBase64(base64EncodedImage),
    'base64',
    'image/jpeg',
  );

  // const pictureS3Url = ''; //get s3 url
  // await prisma.programs.create({ data: { ...validatedProgram, pictureS3Url } });
  res.status(201).end();
};

//export const updateProgramHandler = async

const validateCreateProgramRequest = (maybePrograms: unknown): ProgramsWrite => {
  try {
    return programsWriteSchema.parse(maybePrograms);
  } catch (e) {
    throw new BadRequestError('Programs must include title + content');
  }
};
