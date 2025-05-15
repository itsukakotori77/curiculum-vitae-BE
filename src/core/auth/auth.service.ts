import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthDto } from './auth-dto'
import { IAuthResponse, IJwtPayload } from 'src/interface/auth'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from 'src/libs/constans'

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: AuthDto): Promise<IAuthResponse> {
    const user = await this.prisma.user.findUnique({
      where: { username: data.username },
    })

    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('username atau password salah')
    }

    const payload = {
      id: +user.id.toString(),
      email: user.email,
      username: user.username,
    }

    return {
      username: data.username,
      token: this.jwtService.sign(payload),
    }
  }

  async validateToken(token: string): Promise<any> {
    try {
      const payload: IJwtPayload = await this.jwtService.verify(token, {
        secret: jwtSecret!,
      })

      const user = await this.prisma.user.findUnique({
        where: { id: +payload.id },
      })

      if (!user) {
        throw new UnauthorizedException('Invalid token')
      }

      return user
    } catch (err) {
      throw new UnauthorizedException(err.message)
    }
  }
}
