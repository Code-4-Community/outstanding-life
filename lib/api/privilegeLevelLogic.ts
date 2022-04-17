import { PrivilegeLevel, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import privilegeLevel from '../../pages/api/user/privilege-level';
import { BadRequestError } from '../utils/errors/badRequestError';
import {
  getPrivilegeLevelFromSession,
  isAuthorizedToUpdatePrivilegeLevels,
  privilegeLevelCompareTo,
} from '../utils/privilegeLevelUtils';
import { LOWEST_AUTHORIZED_PRIVILEGE_LEVEL } from '../utils/privilegeLevelUtils';
import {
  updatePrivilegeLevelSchema,
  UpdatePrivilegeRequestBody,
} from '../types/dtos/updatePrivilegeLevel.dto';
import { Context } from '../types/context';

export function makeUpdatePrivilegeLevelHandler(ctx: Context) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { email: targetEmail, privilegeLevel: targetPrivilegeLevel }: UpdatePrivilegeRequestBody =
      validateUpdatePrivilegeLevelRequest(req.body);
    const mySession = await ctx.getSession({ req });
    const myPrivilegeLevel = getPrivilegeLevelFromSession(mySession);

    if (!myPrivilegeLevel || !isCallerAuthorized(myPrivilegeLevel, targetPrivilegeLevel)) {
      throw new BadRequestError(
        `You must have a ${LOWEST_AUTHORIZED_PRIVILEGE_LEVEL} privilegeLevel for this operation`,
      );
    }

    const maybeTargetUser: User | null = await ctx.prisma.user.findUnique({
      where: { email: targetEmail },
    });
    const targetUser = assertUserExists(maybeTargetUser);

    assertPrivilegeLevelisAtLeastTarget(myPrivilegeLevel, targetPrivilegeLevel);

    assertUserIsMorePrivilegedThanTargetUser(
      myPrivilegeLevel,
      targetUser.privilegeLevel,
      targetEmail,
    );

    assertUserIsNotAlreadyTargetPrivilegeLevel(targetUser, targetPrivilegeLevel);
    await ctx.prisma.user.update({
      where: {
        email: targetEmail,
      },
      data: {
        privilegeLevel: targetPrivilegeLevel as PrivilegeLevel,
      },
    });
    res.status(200).json({ message: `The user has been updated to ${privilegeLevel}` });
  };
}
const validateUpdatePrivilegeLevelRequest = (
  maybeUpdatePrivilegeLevel: unknown,
): UpdatePrivilegeRequestBody => {
  try {
    return updatePrivilegeLevelSchema.parse(maybeUpdatePrivilegeLevel);
  } catch (e) {
    throw new BadRequestError('Please submit an email and target privilege level');
  }
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

function assertUserIsNotAlreadyTargetPrivilegeLevel(
  targetUser: User,
  targetPrivilegeLevel: string,
) {
  if (targetUser.privilegeLevel === targetPrivilegeLevel) {
    throw new BadRequestError('The user you requested is already of that privilege level.');
  }
}

function assertUserIsMorePrivilegedThanTargetUser(
  myPrivilegeLevel: PrivilegeLevel,
  targetUserPrivilegeLevel: PrivilegeLevel,
  targetEmail: string,
) {
  if (privilegeLevelCompareTo(myPrivilegeLevel, targetUserPrivilegeLevel) <= 0) {
    /*
    The caller can only update the target user if it has a higher privilege level than the target user.*/
    throw new BadRequestError(
      `Error: Your privilege level is lower or equal to the user: ${targetEmail}'s privilege level. You are not authorized for this operation.`,
    );
  }
}

function assertPrivilegeLevelisAtLeastTarget(
  myPrivilegeLevel: string,
  targetPrivilegeLevel: string,
) {
  if (
    privilegeLevelCompareTo(
      myPrivilegeLevel as PrivilegeLevel,
      targetPrivilegeLevel as PrivilegeLevel,
    ) < 0
  ) {
    /* The caller can only update the target user to the target privilege level if the caller's privilege level
    is the target privilege level or higher*/
    throw new BadRequestError(
      `Error: you must be at least ${targetPrivilegeLevel} to be able to update another user's privilege level to ${targetPrivilegeLevel}.`,
    );
  }
}

function assertUserExists(targetUser: User | null): User {
  if (targetUser === null) {
    throw new BadRequestError('The user you requested cannot be found. Please try again.');
  }
  return targetUser;
}
