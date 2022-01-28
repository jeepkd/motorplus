/*
  Warnings:

  - You are about to drop the column `customerId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleBrandId` on the `Vehicle` table. All the data in the column will be lost.
  - Made the column `addressId` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addressId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_vehicleBrandId_fkey";

-- DropIndex
DROP INDEX "Address_customerId_key";

-- DropIndex
DROP INDEX "Address_userId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "customerId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "vehicleBrandId";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "addressId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "addressId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
