import {
  Body,
  Controller,
  ControllerOptions,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller(<ControllerOptions>{ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userParams: CreateUserDto): Promise<User> {
    return this.usersService.create(userParams)
  }

  @Get()
  async findAll() {
    return this.usersService.findAll({})
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne({ id: +id })
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() userParams: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, userParams)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(+id)
  }
}
