import { PrivilegeLevel } from '@prisma/client';

const LOWEST_AUTHORIZED_PRIVILEGE_LEVEL = PrivilegeLevel.ADMIN;
const PRIVILEGE_LEVEL_ORDERING: PrivilegeLevel[] = [PrivilegeLevel.BASIC, PrivilegeLevel.ADMIN];
const BASE_URL = process.env.PRODURL ?? 'http://localhost:3000';

export { LOWEST_AUTHORIZED_PRIVILEGE_LEVEL, PRIVILEGE_LEVEL_ORDERING, BASE_URL };
