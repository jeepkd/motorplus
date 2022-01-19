import * as argon2 from 'argon2'

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { LoginUserDto } from '../users/dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginUserDto): Promise<any> {
    const user = await this.usersService.findOne({ username })
    const isVerified = await argon2.verify(user.passwordHash, password)
    if (!isVerified) return null

    return user
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, hi: 'hi' }
    return { access_token: this.jwtService.sign(payload) }
  }
}
