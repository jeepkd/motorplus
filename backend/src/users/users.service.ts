import { Prisma, User } from '@prisma/client'

import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(userParams: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({ data: userParams })
    return user
  }

  async findAll(userWhereInput: Prisma.UserWhereInput): Promise<User[]> {
    const users = await this.prisma.user.findMany({ where: userWhereInput })
    return users
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })
    return user
  }

  async update(id: number, userParams: Prisma.UserUpdateInput): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: userParams,
    })
    return user
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id}})
  }
}
