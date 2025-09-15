import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common'
import { AuthDto } from './auth-dto'
import { AuthService } from './auth.service'
import { Response } from 'express'

@Controller()
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
      if (error instanceof UnauthorizedException) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          code: '01',
          success: false,
          message: error.message
        })
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '02',
        success: false,
        message: 'Internal server error',
      })
    }
  }
}
