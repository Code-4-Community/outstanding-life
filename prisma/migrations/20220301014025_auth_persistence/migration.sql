/*
  Warnings:

  - The values [PROFILE] on the enum `PrivilegeLevel` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PrivilegeLevel_new" AS ENUM ('BASIC', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "privilegeLevel" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "privilegeLevel" TYPE "PrivilegeLevel_new" USING ("privilegeLevel"::text::"PrivilegeLevel_new");
ALTER TYPE "PrivilegeLevel" RENAME TO "PrivilegeLevel_old";
ALTER TYPE "PrivilegeLevel_new" RENAME TO "PrivilegeLevel";
DROP TYPE "PrivilegeLevel_old";
ALTER TABLE "User" ALTER COLUMN "privilegeLevel" SET DEFAULT 'BASIC';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "privilegeLevel" SET DEFAULT E'BASIC';
