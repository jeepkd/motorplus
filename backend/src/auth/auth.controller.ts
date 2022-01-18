import { AuthService } from './auth.service'
import { Body, Controller, Post } from '@nestjs/common'
import { LoginUserDto } from '../users/dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginParams: LoginUserDto) {
    return this.authService.validateUser(loginParams)
  }
}
