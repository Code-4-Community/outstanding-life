/*
  Warnings:

  - You are about to drop the column `privilegeLevel` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "privilegeLevel",
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VSCProfile" (
    "userId" TEXT NOT NULL,
    "privilegeLevel" "PrivilegeLevel" NOT NULL DEFAULT E'PROFILE',

    CONSTRAINT "VSCProfile_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "VSCProfile" ADD CONSTRAINT "VSCProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
