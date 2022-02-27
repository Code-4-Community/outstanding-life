/*
  Warnings:

  - You are about to drop the `VscProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VscProfile" DROP CONSTRAINT "VscProfile_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "privilegeLevel" "PrivilegeLevel" NOT NULL DEFAULT E'PROFILE';

-- DropTable
DROP TABLE "VscProfile";
