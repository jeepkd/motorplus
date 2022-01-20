import * as argon2 from 'argon2'

import { Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(userParams: CreateUserDto): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const passwordHash = await argon2.hash(Buffer.from(userParams.password))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = userParams
    const user = await this.prisma.user.create({
      data: { ...userData, passwordHash },
    })
    return user
  }

  async findAll(userWhereInput: Prisma.UserWhereInput): Promise<User[]> {
    const users = await this.prisma.user.findMany({ where: userWhereInput })
    return users
  }

  async findOne(query: Prisma.UserWhereUniqueInput): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: query })
    if (!user) throw new NotFoundException()
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
    return await this.prisma.user.delete({ where: { id } })
  }
}
