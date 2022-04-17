import { z } from 'zod';

export const updatePrivilegeLevelSchema = z.object({
  email: z.string().min(1),
  privilegeLevel: z.string().min(1),
});

export type UpdatePrivilegeRequestBody = z.infer<typeof updatePrivilegeLevelSchema>;
