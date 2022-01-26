import { Injectable, NotImplementedException } from '@nestjs/common'
import { Bike, Prisma } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'
import { CreateBikeDto } from './dto/create-bike.dto'
import { UpdateBikeDto } from './dto/update-bike.dto'

@Injectable()
export class BikesService {
  constructor(private prisma: PrismaService) {}

  // create(createBikeDto: CreateBikeDto) {
  //   // return 'This action adds a new bike'
  //   throw new NotImplementedException()
  //   return null
  // }

  // async findAll(userWhereInput: Prisma.UserWhereInput): Promise<Bike[]> {
  //   // return `This action returns all bikes`
  //   const bikes = await this.prisma.bike.findMany({ where: userWhereInput })
  //   return bikes
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} bike`
  // }

  // update(id: number, updateBikeDto: UpdateBikeDto) {
  //   return `This action updates a #${id} bike`
  // }

  // remove(id: number) {
  //   return
  //   return `This action removes a #${id} bike`
  // }
}
