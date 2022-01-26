/*
  Warnings:

  - You are about to drop the column `color` on the `BikeColor` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `BikeModel` table. All the data in the column will be lost.
  - Added the required column `name` to the `BikeBrand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BikeColor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BikeModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BikeBrand" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BikeColor" DROP COLUMN "color",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BikeModel" DROP COLUMN "model",
ADD COLUMN     "name" TEXT NOT NULL;
