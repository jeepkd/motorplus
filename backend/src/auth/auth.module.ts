import { AuthService } from './auth.service'
import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersService } from 'src/users/users.service'

@Module({
  providers: [AuthService, UsersService, PrismaService],
})
export class AuthModule {}
