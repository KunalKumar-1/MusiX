/*
  Warnings:

  - You are about to drop the column `upvotes` on the `Streams` table. All the data in the column will be lost.
  - Added the required column `extractedId` to the `Streams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Streams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Streams" DROP COLUMN "upvotes",
ADD COLUMN     "extractedId" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
