/*
  Warnings:

  - A unique constraint covering the columns `[chassisNumber]` on the table `Bike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[engineNumber]` on the table `Bike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `BikeBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `BikeColor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `BikeModel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chassisNumber` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engineNumber` to the `Bike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "chassisNumber" TEXT NOT NULL,
ADD COLUMN     "engineNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bike_chassisNumber_key" ON "Bike"("chassisNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Bike_engineNumber_key" ON "Bike"("engineNumber");

-- CreateIndex
CREATE UNIQUE INDEX "BikeBrand_name_key" ON "BikeBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BikeColor_name_key" ON "BikeColor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BikeModel_name_key" ON "BikeModel"("name");
