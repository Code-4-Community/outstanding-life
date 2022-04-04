import { PrismaClient, PrivilegeLevel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import privilegeLevel from '../../pages/api/user/[id]/privilegeLevel';
import { LOWEST_AUTHORIZED_PRIVILEGE_LEVEL } from '../constants';
import { BadRequestError } from '../utils/errors/badRequestError';
import {
  getPrivilegeLevelFromSession,
  privilegeLevelCompareTo,
} from '../utils/privilegeLevelUtils';

//TYPES
export type Context = {
  prisma: PrismaClient;
};

type RequestParameters = {
  targetEmail: string;
  targetPrivilegeLevel: string;
};

//DEFINTITIONS
export const makeUpdatePrivilegeLevelHandler =
  (ctx: Context) => async (req: NextApiRequest, res: NextApiResponse) => {
    const { targetEmail, targetPrivilegeLevel } = getParameters(req);
    const mySession = await getSession({ req });
    const myPrivilegeLevel = getPrivilegeLevelFromSession(mySession);

    if (!targetEmail || !targetPrivilegeLevel) {
      res.status(401).send('Received invalid parameters for id and privilege level.');
      return;
    }

    if (!myPrivilegeLevel || !isCallerAuthorized(myPrivilegeLevel, targetPrivilegeLevel)) {
      res.status(401).send('User is not authorized for this operation');
      return;
    }

    // 2.) check if targetID's PL != targetId's PL
    const targetUser = await ctx.prisma.user.findUnique({ where: { email: targetEmail } });
    if (targetUser === null) {
      throw new BadRequestError('The user you requested cannot be found. Please try again.');
    } else if (targetUser.privilegeLevel === targetPrivilegeLevel) {
      throw new BadRequestError('The user you requested is already of that privilege level.');
    } else {
      await ctx.prisma.user.update({
        where: {
          email: targetEmail,
        },
        data: {
          privilegeLevel: targetPrivilegeLevel as PrivilegeLevel,
        },
      });
      res.status(200).json({ message: `The user has been updated to ${privilegeLevel}` });
    }
  };

const getParameters = (req: NextApiRequest): RequestParameters => {
  const id = req.query.id || '';
  const privilegeLevel = req.body || '';
  const targetId: string = typeof id === 'string' ? id : id[0];
  const targetPrivilegeLevel: string =
    typeof privilegeLevel === 'string' ? privilegeLevel : privilegeLevel[0];

  return { targetEmail: targetId, targetPrivilegeLevel };
};

const isCallerAuthorized = (
  myPrivilegeLevel: PrivilegeLevel,
  targetPrivilegeLevel: string,
): boolean => {
  const isAuthorized =
    privilegeLevelCompareTo(myPrivilegeLevel, LOWEST_AUTHORIZED_PRIVILEGE_LEVEL) >= 0;
  const isValidTargetPrivilegeLevel = Object.values(PrivilegeLevel).includes(
    targetPrivilegeLevel as PrivilegeLevel,
  );
  const canUpdateTarget =
    privilegeLevelCompareTo(myPrivilegeLevel, targetPrivilegeLevel as PrivilegeLevel) >= 0;
  //if not a valid session or session.user.privilegeLevel is not authorized
  return isAuthorized && isValidTargetPrivilegeLevel && canUpdateTarget;
};
