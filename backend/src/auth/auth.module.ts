import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'

@Module({
  imports: [UsersModule],
  providers: [AuthService, UsersService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
