import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User, Prisma } from '@prisma/client'
import { PrismaFilter } from 'src/prisma.filter'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userParams: Prisma.UserCreateInput) {
    return this.usersService.create(userParams)
  }

  @Get()
  async findAll() {
    return this.usersService.findAll({})
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userParams: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update(+id, userParams)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}
