import { PrivilegeLevel } from '@prisma/client';
import 'next-auth';

declare module 'next-auth' {
  // Overrides the `Session` type in next-auth to include custom fields such as `privilegeLevel`
  // Previously extended next-auth's `DefaultSession`, removed extenstion and copied fields for clarity
  interface Session extends Record<string, unknown> {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      privilegeLevel?: PrivilegeLevel | null;
    };
    expires: ISODateString;
  }
}
