import * as argon2 from 'argon2'

import { Injectable } from '@nestjs/common'
import { LoginUserDto } from '../users/dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(loginParams: LoginUserDto): Promise<any> {
    const { username, password } = loginParams
    const user = await this.usersService.findOne({ username })
    const isVerified = await argon2.verify(user.passwordHash, password)
    if (!isVerified) return null

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...userData } = user
    return userData
  }
}
