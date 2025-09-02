import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '../jwt/jwt-strategy'
import { ConstantConfig } from 'src/core/config/constant-config'
import { AppConfigModule } from '../config/app-config.module'
import { AuthController } from './auth.controller'

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
        console.log('secret jwt auth module', secret)
        
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
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, PassportModule, AuthService],
})
export class AuthModule {}
