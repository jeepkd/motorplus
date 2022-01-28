/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `VehicleColor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `VehicleColor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehicleColor" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VehicleColor_code_key" ON "VehicleColor"("code");
