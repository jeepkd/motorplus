import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { BikesController } from './bikes.controller'
import { BikesService } from './bikes.service'

@Module({
  controllers: [BikesController],
  providers: [BikesService, PrismaService],
})
export class BikesModule {}
