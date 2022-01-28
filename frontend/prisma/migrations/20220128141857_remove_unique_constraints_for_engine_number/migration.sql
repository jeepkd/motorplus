-- DropIndex
DROP INDEX "Vehicle_engineNumber_key";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "engineNumber" DROP NOT NULL;
