import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'

import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'

@Controller('api/v1')
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
