import { Injectable, UnauthorizedException } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginUserDto } from '../users/dto'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(<LoginUserDto>{
      username,
      password,
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
