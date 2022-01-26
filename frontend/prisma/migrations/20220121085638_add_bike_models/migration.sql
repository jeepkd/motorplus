-- CreateTable
CREATE TABLE "Bike" (
    "id" SERIAL NOT NULL,
    "bikeBrandId" INTEGER NOT NULL,
    "bikeModelId" INTEGER NOT NULL,
    "bikeColorId" INTEGER NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BikeBrand" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "BikeBrand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BikeModel" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "BikeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BikeColor" (
    "id" SERIAL NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "BikeColor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_bikeBrandId_fkey" FOREIGN KEY ("bikeBrandId") REFERENCES "BikeBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_bikeModelId_fkey" FOREIGN KEY ("bikeModelId") REFERENCES "BikeModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_bikeColorId_fkey" FOREIGN KEY ("bikeColorId") REFERENCES "BikeColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
