import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtSecret } from 'src/libs/constans'
import { AuthcontrollerController } from './authcontroller.controller';

@Module({
  imports: [
    PrismaModule,
    JwtModule,
    PassportModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [JwtModule],
      useFactory: async () => ({
        secret: jwtSecret,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthcontrollerController],
  exports: [JwtModule, PassportModule, AuthService]
})
export class AuthModule {}
