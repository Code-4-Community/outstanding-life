/*
  Warnings:

  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "News";

-- CreateTable
CREATE TABLE "Programs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pictureS3Url" TEXT NOT NULL,

    CONSTRAINT "Programs_pkey" PRIMARY KEY ("id")
);
