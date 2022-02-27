/*
  Warnings:

  - You are about to drop the `VSCProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VSCProfile" DROP CONSTRAINT "VSCProfile_userId_fkey";

-- DropTable
DROP TABLE "VSCProfile";

-- CreateTable
CREATE TABLE "VscProfile" (
    "userId" TEXT NOT NULL,
    "privilegeLevel" "PrivilegeLevel" NOT NULL DEFAULT E'PROFILE',

    CONSTRAINT "VscProfile_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "VscProfile" ADD CONSTRAINT "VscProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
