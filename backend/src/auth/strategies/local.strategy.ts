import { Strategy } from 'passport-local'

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'

import { LoginUserDto } from '../../users/dto'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const loginParams: LoginUserDto = { username, password }
    const user = await this.authService.validateUser(loginParams)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
