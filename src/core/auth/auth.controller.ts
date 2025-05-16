import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { AuthDto } from './auth-dto'
import { AuthService } from './auth.service'
import { Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() request: AuthDto, @Res() res: Response) {
    try {
      const data = await this.authService.login(request)
      return res.status(HttpStatus.OK).json({
        code: '00',
        message: 'Berhasil login',
        data: data,
      })
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '01',
        success: false,
        message: {
          message: error.message,
        },
      })
    }
  }
}
