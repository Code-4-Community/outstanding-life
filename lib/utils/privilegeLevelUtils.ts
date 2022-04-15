import { PrivilegeLevel } from '@prisma/client';
import { Session } from 'next-auth';

export const LOWEST_AUTHORIZED_PRIVILEGE_LEVEL = PrivilegeLevel.ADMIN;
export const PRIVILEGE_LEVEL_ORDERING: PrivilegeLevel[] = [PrivilegeLevel.BASIC, PrivilegeLevel.ADMIN];

export function getPrivilegeLevelFromSession(session: Session | null): PrivilegeLevel | undefined {
  if (session === null) {
    return undefined;
  }
  const maybePrivilegeLevel = session?.user?.privilegeLevel;
  return maybePrivilegeLevel ? maybePrivilegeLevel : undefined;
}

export const getIndexOfPrivilegeLevel = (privilegeLevel: PrivilegeLevel) => {
  return PRIVILEGE_LEVEL_ORDERING.indexOf(privilegeLevel);
};

/* returns a positive number if privilegeLevel1 is higher than privilegeLevel2, 0 if privilegeLevel1 is equal to privilegeLevel2, and a negative number if privilegeLevel1 is lower than privilegeLevel2
 */
export const privilegeLevelCompareTo = (
  privilegeLevel1: PrivilegeLevel,
  privilegeLevel2: PrivilegeLevel,
) => {
  return (
    PRIVILEGE_LEVEL_ORDERING.indexOf(privilegeLevel1) -
    PRIVILEGE_LEVEL_ORDERING.indexOf(privilegeLevel2)
  );
};

/* returns whether a given privilegeLevel is above or equal to the lowest authorized privilege level required in order to see the UI to be able to update a user's privilege level
 */
export const isAuthorizedToUpdatePrivilegeLevels = (sessionPrivilegeLevel: PrivilegeLevel) => {
  return privilegeLevelCompareTo(sessionPrivilegeLevel, LOWEST_AUTHORIZED_PRIVILEGE_LEVEL) >= 0;
};
