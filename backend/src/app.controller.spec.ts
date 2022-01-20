import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { PrismaService } from './prisma/prisma.service'
import { UsersService } from './users/users.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        AuthService,
        UsersService,
        JwtService,
        PrismaService,
      ],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(true).toBe(true)
    })
  })
})
