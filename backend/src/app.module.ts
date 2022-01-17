import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
