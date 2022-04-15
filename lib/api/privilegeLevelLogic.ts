import { PrivilegeLevel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import privilegeLevel from '../../pages/api/user/[email]/privilegeLevel';
import { BadRequestError } from '../utils/errors/badRequestError';
import {
  getPrivilegeLevelFromSession,
  isAuthorizedToUpdatePrivilegeLevels,
  privilegeLevelCompareTo,
} from '../utils/privilegeLevelUtils';
import { LOWEST_AUTHORIZED_PRIVILEGE_LEVEL } from '../utils/privilegeLevelUtils';
import { Context, RequestParameters } from './updatePrivilegeLevel.dto';

export const makeUpdatePrivilegeLevelHandler =
  (ctx: Context) => async (req: NextApiRequest, res: NextApiResponse) => {
    const { targetEmail, targetPrivilegeLevel } = getParameters(req);
    const mySession = await getSession({ req });
    const myPrivilegeLevel = getPrivilegeLevelFromSession(mySession);

    if (!targetEmail || !targetPrivilegeLevel) {
      console.log(`targetEmail:${targetEmail} targetPrivilegeLevel: ${targetPrivilegeLevel}`);
      res.status(400).send('Received invalid parameters for id and privilege level.');
      return;
    }

    if (!myPrivilegeLevel || !isCallerAuthorized(myPrivilegeLevel, targetPrivilegeLevel)) {
      res
        .status(401)
        .send(
          `You must have a ${LOWEST_AUTHORIZED_PRIVILEGE_LEVEL} privilegeLevel for this operation`,
        );
      return;
    }

    const targetUser = await ctx.prisma.user.findUnique({ where: { email: targetEmail } });
    if (targetUser === null) {
      throw new BadRequestError('The user you requested cannot be found. Please try again.');
    } else if (
      privilegeLevelCompareTo(myPrivilegeLevel, targetPrivilegeLevel as PrivilegeLevel) < 0
    ) {
      /* The caller can only update the target user to the target privilege level if the caller's privilege level 
      is the target privilege level or higher*/
      throw new BadRequestError(
        `Error: you must be at least ${targetPrivilegeLevel} to be able to update another user's privilege level to ${targetPrivilegeLevel}.`,
      );
    } else if (privilegeLevelCompareTo(myPrivilegeLevel, targetUser.privilegeLevel) <= 0) {
      /*
      The caller can only update the target user if it has a higher privilege level than the target user.*/
      throw new BadRequestError(
        `Error: Your privilege level is lower or equal to the user: ${targetEmail}'s privilege level. You are not authorized for this operation.`,
      );
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
  const email = req.query.email || '';
  const privilegeLevel = req.body.privilegeLevel || '';
  console.log(`privilegeLevel in server ${req.body.privilegeLevel}`);
  const targetEmail: string = typeof email === 'string' ? email : email[0];
  const targetPrivilegeLevel: string =
    typeof privilegeLevel === 'string' ? privilegeLevel : privilegeLevel[0];

  return { targetEmail, targetPrivilegeLevel };
};

/*
Returns whether the caller is at least the lowest required privilege level in order to be able update a user's privilege level (documented by LOWEST_AUTHORIZED_PRIVILEGE_LEVEL)
*/
const isCallerAuthorized = (
  sessionPrivilegeLevel: PrivilegeLevel,
  targetPrivilegeLevel: string,
): boolean => {
  const isAuthorized = isAuthorizedToUpdatePrivilegeLevels(sessionPrivilegeLevel);
  const isValidTargetPrivilegeLevel = Object.values(PrivilegeLevel).includes(
    targetPrivilegeLevel as PrivilegeLevel,
  );
  return isAuthorized && isValidTargetPrivilegeLevel;
};
