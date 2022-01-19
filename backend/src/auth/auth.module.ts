import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, UsersService, PrismaService, LocalStrategy],
})
export class AuthModule {}
