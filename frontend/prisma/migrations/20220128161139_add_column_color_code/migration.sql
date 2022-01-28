/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `BikeColor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `BikeColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BikeColor" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BikeColor_code_key" ON "BikeColor"("code");
