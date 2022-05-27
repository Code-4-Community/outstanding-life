import prisma from '../../prisma/prisma';
import { ProgramsWrite, programsWriteSchema } from '../types/dtos/createProgramsRequest.dto';
import { BadRequestError } from '../utils/errors/badRequestError';
import type { NextApiRequest, NextApiResponse } from 'next';
import { S3_BASE_URL, uploadToS3 } from '../aws';
import { getImageBufferFromBase64 } from '../utils/utils';
import { ZodError } from 'zod';

export const getAllProgramsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await prisma.programs.findMany());
};

export const postProgramHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    title,
    content,
    base64EncodedImage,
    eventDateISOString: eventDate,
    location,
  }: ProgramsWrite = validateCreateProgramRequest(req.body);

  const eventDateWithoutPeriods: string = eventDate.replace('.', '_');
  await uploadToS3(
    `${eventDateWithoutPeriods}_${title}`,
    getImageBufferFromBase64(base64EncodedImage),
    'base64',
    'image/jpeg',
  );

  const pictureS3Url = `${S3_BASE_URL}/${eventDateWithoutPeriods}_${title}`;
  await prisma.programs.create({
    data: { title, content, eventDate, location, pictureS3Url },
  });
  res.status(201).end();
};

const validateCreateProgramRequest = (maybePrograms: unknown): ProgramsWrite => {
  try {
    return programsWriteSchema.parse(maybePrograms);
  } catch (err) {
    if (err instanceof ZodError) {
      console.log(err.issues);
    }
    throw new BadRequestError(
      `Received error(s): ${
        err instanceof ZodError ? err.issues : err
      }Programs must include title, content, location, eventDateISOString, and base64EncodedImage`,
    );
  }
};
