import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '../jwt/jwt-strategy'
import { ConstantConfig } from 'src/shared/infrastructure/config/constant-config'
import { AppConfigModule } from '../../shared/infrastructure/config/app-config.module'
import { AuthController } from './auth.controller'
import { GoogleStrategy } from '../oauth/google-strategy'

@Module({
  imports: [
    PrismaModule,
    AppConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [ConstantConfig],
      useFactory: async (constants: ConstantConfig) => {
        const secret = constants.jwtSecret!

        if (!secret) {
          throw new Error('JWT_SECRET environment variable is required!')
        }

        return {
          secret: secret,
          signOptions: {
            expiresIn: '1d',
            algorithm: 'HS256',
          },
        }
      },
    }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy, GoogleStrategy],
  controllers: [AuthController],
  exports: [JwtModule, PassportModule, AuthService],
})
export class AuthModule {}
