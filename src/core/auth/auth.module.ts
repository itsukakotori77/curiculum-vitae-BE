import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '../jwt/jwt-strategy'
import { ConstantConfig } from 'src/core/config/constant-config'
import { AppConfigModule } from '../config/app-config.module'
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PrismaModule,
    AppConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [JwtModule, AppConfigModule],
      inject: [ConstantConfig],
      useFactory: async (constants: ConstantConfig) => {
        const secret = constants.jwtSecret!;
        
        if (!secret) {
          console.error('JWT SECRET IS NOT DEFINED! Set NEST_JWT_SECRET environment variable.');
          return {
            secret: 'fallback-development-secret-do-not-use-in-production',
            signOptions: { expiresIn: '1d' },
          };
        }
        
        return {
          secret: secret,
          signOptions: { expiresIn: '1d' },
        };
      },
    }),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, PassportModule, AuthService],
})
export class AuthModule {}
