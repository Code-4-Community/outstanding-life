/*
  Warnings:

  - Added the required column `eventDate` to the `Programs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Programs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Programs" ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;