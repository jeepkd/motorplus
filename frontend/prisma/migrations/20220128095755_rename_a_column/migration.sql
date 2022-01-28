/*
  Warnings:

  - You are about to drop the column `customerID` on the `Customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customerNumber]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Customer_customerID_key";

-- AlterTable
ALTER TABLE "Customer"
RENAME COLUMN "customerID" to "customerNumber";


-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerNumber_key" ON "Customer"("customerNumber");
