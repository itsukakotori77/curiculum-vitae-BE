import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { ConstantConfig } from 'src/core/config/constant-config'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly prisma: PrismaService,
    private readonly constants: ConstantConfig, 
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, 
      secretOrKey: constants.jwtSecret,
    })
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload) 
    
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id }, 
    })

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    }
  }
}