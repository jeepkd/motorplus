import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'

import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { LoginUserDto } from './users/dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user
  }
}
