-- CreateEnum
CREATE TYPE "PrivilegeLevel" AS ENUM ('PROFILE', 'ADMIN');

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "privilegeLevel" "PrivilegeLevel" NOT NULL DEFAULT E'PROFILE',

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
