-- DropIndex
DROP INDEX "Bike_engineNumber_key";

-- AlterTable
ALTER TABLE "Bike" ALTER COLUMN "engineNumber" DROP NOT NULL;
