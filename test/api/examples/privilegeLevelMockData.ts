import { PrivilegeLevel } from "@prisma/client";
import { UpdatePrivilegeRequestBody } from "../../../lib/types/dtos/updatePrivilegeLevel.dto";

export const validPrivilegeLevelRequest: UpdatePrivilegeRequestBody = {
    email: "hi@email.com",
    privilegeLevel: PrivilegeLevel.ADMIN
}

export const privilegeLevelRequestNoPrivLevel: any = {
  email: 'hi@email.com',
};