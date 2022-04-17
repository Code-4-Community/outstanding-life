import { PrivilegeLevel } from '@prisma/client';
import {
  getIndexOfPrivilegeLevel,
  isAuthorizedToUpdatePrivilegeLevels,
  privilegeLevelCompareTo,
} from '../../lib/utils/privilegeLevelUtils';

describe('get index of a privilege level', () => {
  it('should return correct index of admin privilege level', () => {
    expect(getIndexOfPrivilegeLevel(PrivilegeLevel.ADMIN)).toBe(1);
  });
  it('should return correct index of basic privilege level', () => {
    expect(getIndexOfPrivilegeLevel(PrivilegeLevel.BASIC)).toBe(0);
  });
});

describe('privilege level compare to', () => {
  it('should return 0 if privilege levels are the same', () => {
    expect(privilegeLevelCompareTo(PrivilegeLevel.ADMIN, PrivilegeLevel.ADMIN)).toBe(0);
  });
  it('should return -1 if privilege level1 is one level lower than privilege level2', () => {
    expect(privilegeLevelCompareTo(PrivilegeLevel.BASIC, PrivilegeLevel.ADMIN)).toBe(-1);
  });

  it('should return 1 if privilege level1 is one level higher than privilege level2', () => {
    expect(privilegeLevelCompareTo(PrivilegeLevel.ADMIN, PrivilegeLevel.BASIC)).toBe(1);
  });
});

describe('is authorized to update privilege levels', () => {
  it('should return true if LOWEST_AUTHORIZED_PRIVILEGE_LEVEL is ADMIN', () => {
    expect(isAuthorizedToUpdatePrivilegeLevels(PrivilegeLevel.ADMIN)).toBe(true);
  });
  it('should return false if LOWEST_AUTHORIZED_PRIVILEGE_LEVEL is ADMIN', () => {
    expect(isAuthorizedToUpdatePrivilegeLevels(PrivilegeLevel.BASIC)).toBe(false);
  });
});
