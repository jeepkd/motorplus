/*
  Warnings:

  - You are about to drop the column `color` on the `VehicleColor` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `VehicleModel` table. All the data in the column will be lost.
  - Added the required column `name` to the `VehicleBrand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `VehicleColor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `VehicleModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VehicleBrand" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VehicleColor" DROP COLUMN "color",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VehicleModel" DROP COLUMN "model",
ADD COLUMN     "name" TEXT NOT NULL;
