import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthDto } from './auth-dto'
import { IAuthResponse, IJwtPayload } from 'src/interface/auth'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { ConstantConfig } from 'src/libs/constant-config'

@Injectable()
export class AuthService {
  private readonly secret: string

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly contants: ConstantConfig,
  ) {
    this.secret = this.contants.jwtSecret!
  }

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
      // Use the same secret that's configured for signing

      if (!this.secret) {
        throw new UnauthorizedException('JWT secret is not configured')
      }

      const payload: IJwtPayload = await this.jwtService.verify(token, {
        secret: this.secret!,
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
