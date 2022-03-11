import { PrivilegeLevel } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useSession } from 'next-auth/react';
import prisma from '../../prisma/prisma';

enum AuthorizedPrivilegeLevel {
  ADMIN = 'ADMIN',
}

export const updatePrivilegeLevelHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, privilegeLevel } = req.query;
  const targetId: string = typeof id === 'string' ? id : id[0];
  const targetPrivilegeLevel: string =
    typeof privilegeLevel === 'string' ? privilegeLevel : privilegeLevel[0];

  // 1.) authenticate caller
  const session = await useSession();
  const isUnauthorized = !Object.values(AuthorizedPrivilegeLevel).includes(session.user.privilegeLevel as PrivilegeLevel);
  const isInvalidPrivilegeLevel = !Object.values(PrivilegeLevel).includes(targetPrivilegeLevel as PrivilegeLevel)

  //if not a valid session or session.user.privilegeLevel is not authorized
  if (!session || isUnauthorized || isInvalidPrivilegeLevel) {
    res.status(401).end();
  }

  // 2.) check if targetID's PL != target PL
  const targetUser = await prisma.user.findUnique({ where: { id: targetId } });

  if (targetUser === null) {
    //write error message saying target user can't be found  (403/404)
    res.status(404).send('The user you requested cannot be found. Please try again.');
  } else if (targetUser.privilegeLevel === targetPrivilegeLevel) {
    //write error message saying target PL is already that
    res.status(400).send('The user you requested cannot be found. Please try again.');
  } else {
    //3.) change targetId's PL to target PL
    const updateUser = await prisma.user.update({
      where: {
        id: targetId,
      },
      data: {
        privilegeLevel: targetPrivilegeLevel as PrivilegeLevel,
      },
    });
  }
};
