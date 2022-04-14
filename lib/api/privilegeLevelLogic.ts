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
import { Context, RequestParameters } from './privilegeLevelTypes';

//DEFINTITIONS
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
  const email = req.query.email || '';
  const privilegeLevel = req.body.privilegeLevel || '';
  console.log(`privilegeLevel in server ${req.body.privilegeLevel}`);
  const targetEmail: string = typeof email === 'string' ? email : email[0];
  const targetPrivilegeLevel: string =
    typeof privilegeLevel === 'string' ? privilegeLevel : privilegeLevel[0];

  return { targetEmail, targetPrivilegeLevel };
};

const isCallerAuthorized = (
  sessionPrivilegeLevel: PrivilegeLevel,
  targetPrivilegeLevel: string,
): boolean => {
  const isAuthorized = isAuthorizedToUpdatePrivilegeLevels(sessionPrivilegeLevel);
  const isValidTargetPrivilegeLevel = Object.values(PrivilegeLevel).includes(
    targetPrivilegeLevel as PrivilegeLevel,
  );
  const canUpdateTarget =
    privilegeLevelCompareTo(sessionPrivilegeLevel, targetPrivilegeLevel as PrivilegeLevel) >= 0;
  //TODO validation that
  const callerHasHigherPrivilegeLevel =
    privilegeLevelCompareTo(sessionPrivilegeLevel, targetPrivilegeLevel as PrivilegeLevel) >= 0;
  return isAuthorized && isValidTargetPrivilegeLevel && canUpdateTarget;
};
