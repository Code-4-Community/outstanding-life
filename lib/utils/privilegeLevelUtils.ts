import { PrivilegeLevel } from '@prisma/client';
import { Session } from 'next-auth';
import { PRIVILEGE_LEVEL_ORDERING } from '../constants';

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

/* returns a positive number if privilegeLevel1 is higher than privilegeLevel2
- 0 if privilegeLevel1 is equal to privilegeLevel2
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
