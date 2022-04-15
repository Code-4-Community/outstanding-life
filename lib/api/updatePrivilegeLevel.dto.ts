import { PrismaClient } from '@prisma/client';

export type Context = {
  prisma: PrismaClient;
};

export type RequestParameters = {
  targetEmail: string;
  targetPrivilegeLevel: string;
};
