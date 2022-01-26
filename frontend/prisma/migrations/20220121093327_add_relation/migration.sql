/*
  Warnings:

  - Added the required column `bikeBrandId` to the `BikeModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BikeModel" ADD COLUMN     "bikeBrandId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BikeModel" ADD CONSTRAINT "BikeModel_bikeBrandId_fkey" FOREIGN KEY ("bikeBrandId") REFERENCES "BikeBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
