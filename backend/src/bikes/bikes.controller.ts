import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ControllerOptions,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'
import { BikesService } from './bikes.service'
import { CreateBikeDto } from './dto/create-bike.dto'
import { UpdateBikeDto } from './dto/update-bike.dto'
import { Bike } from './entities/bike.entity'

@Controller(<ControllerOptions>{ version: '1', path: 'bikes' })
export class BikesController {
  constructor(
    private readonly bikesService: BikesService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() inputs: Prisma.BikeCreateInput) {
    return this.prisma.bike.create({ data: inputs })
  }

  @Get()
  asyncfindAll() {
    return this.prisma.bike.findMany({})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.bike.findUnique({ where: { id: +id } })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() inputs: Prisma.BikeUpdateInput) {
    // return this.bikesService.update(+id, updateBikeDto)

    return this.prisma.bike.update({ where: { id: +id }, data: inputs })
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prisma.bike.delete({ where: { id: +id } })
  }
}
