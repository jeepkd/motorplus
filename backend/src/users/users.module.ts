import { AuthService } from 'src/auth/auth.service'
import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AuthService],
})
export class UsersModule {}
