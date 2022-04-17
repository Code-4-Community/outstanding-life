import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

export type Context = {
  prisma: PrismaClient;
  getSession: typeof getSession;
};
