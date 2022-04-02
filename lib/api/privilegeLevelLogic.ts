import { PrismaClient, PrivilegeLevel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

// CONSTANTS
const LowestAuthorizedPrivilegeLevel = PrivilegeLevel.ADMIN;
const PrivilegeLevelOrdering: PrivilegeLevel[] = [PrivilegeLevel.BASIC, PrivilegeLevel.ADMIN];

//TYPES
export type Context = {
  prisma: PrismaClient;
};

type RequestParameters = {
  targetId: string;
  targetPrivilegeLevel: string;
};

//DEFINTITIONS
export const makeUpdatePrivilegeLevelHandler =
  (ctx: Context) => async (req: NextApiRequest, res: NextApiResponse) => {
    const { targetId, targetPrivilegeLevel } = getParameters(req);
    // 1.) authenticate caller and whether they can update target

    // abstract getSession into context
    const mySession = await getSession({ req });
    const myPrivilegeLevel = getPrivilegeLevelFromSession(mySession);

    if (!myPrivilegeLevel || !isCallerAuthorized(myPrivilegeLevel, targetPrivilegeLevel)) {
      res.status(401).send('User is not authorized for this operation');
      return;
    }

    // 2.) check if targetID's PL != targetId's PL
    const targetUser = await ctx.prisma.user.findUnique({ where: { id: targetId } });
    if (targetUser === null) {
      //write error message saying target user can't be found  (403/404)
      res.status(404).send('The user you requested cannot be found. Please try again.');
    } else if (targetUser.privilegeLevel === targetPrivilegeLevel) {
      //write error message saying target PL is already that
      res.status(400).send('The user you requested is already of that privilege level.');
    } else {
      //3.) change targetId's PL to target PL
      await ctx.prisma.user.update({
        where: {
          id: targetId,
        },
        data: {
          privilegeLevel: targetPrivilegeLevel as PrivilegeLevel,
        },
      });
      res.status(200).end();
    }
  };

const getParameters = (req: NextApiRequest): RequestParameters => {
  const { id } = req.query;
  const { privilegeLevel } = req.body;
  const targetId: string = typeof id === 'string' ? id : id[0];
  const targetPrivilegeLevel: string =
    typeof privilegeLevel === 'string' ? privilegeLevel : privilegeLevel[0];

  return { targetId, targetPrivilegeLevel };
};

function getPrivilegeLevelFromSession(session: Session | null): PrivilegeLevel | undefined {
  if (session === null) {
    return undefined;
  }
  const maybePrivilegeLevel = session?.user?.privilegeLevel;
  return maybePrivilegeLevel ? maybePrivilegeLevel : undefined;
}

const getIndexOfPrivilegeLevel = (privilegeLevel: PrivilegeLevel) => {
  return PrivilegeLevelOrdering.indexOf(privilegeLevel);
};

/* returns a positive number if privilegeLevel1 is higher than privilegeLevel2
- 0 if privilegeLevel1 is equal to privilegeLevel2
*/
const privilegeLevelCompareTo = (
  privilegeLevel1: PrivilegeLevel,
  privilegeLevel2: PrivilegeLevel,
) => {
  return (
    PrivilegeLevelOrdering.indexOf(privilegeLevel1) -
    PrivilegeLevelOrdering.indexOf(privilegeLevel2)
  );
};


const isCallerAuthorized = (
  myPrivilegeLevel: PrivilegeLevel,
  targetPrivilegeLevel: string,
): boolean => {
  const isAuthorized =
    privilegeLevelCompareTo(myPrivilegeLevel, LowestAuthorizedPrivilegeLevel) >= 0;
  const isValidTargetPrivilegeLevel = Object.values(PrivilegeLevel).includes(
    targetPrivilegeLevel as PrivilegeLevel,
  );
  const canUpdateTarget =
    privilegeLevelCompareTo(myPrivilegeLevel, targetPrivilegeLevel as PrivilegeLevel) >= 0;
  //if not a valid session or session.user.privilegeLevel is not authorized
  return isAuthorized && isValidTargetPrivilegeLevel && canUpdateTarget;
};``
