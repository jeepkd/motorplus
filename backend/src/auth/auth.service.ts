import * as argon2 from 'argon2'

import { Injectable, UnauthorizedException } from '@nestjs/common'

import { LoginUserDto } from '../users/dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser({ username, password }: LoginUserDto): Promise<any> {
    const user = await this.usersService.findOne({ username })
    const isVerified = await argon2.verify(user.passwordHash, password)
    if (!isVerified) return null

    return user
  }
}
