import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'
import { Strategy } from 'passport-jwt' 
import { ExtractJwt } from 'passport-jwt'
import { jwtSecret } from 'src/libs/constans'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreElements: false,
      secretOrKey: jwtSecret!,
    })
  }
  async validate(payload: any): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    })

    return !!user
  }
}
