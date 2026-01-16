import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common'
import { AuthDto } from './auth-dto'
import { AuthService } from './auth.service'
import { Response } from 'express'
import { GoogleOAuthGuard } from '../oauth/google-oauth-guard'
import { ConstantConfig } from 'src/shared/infrastructure/config/constant-config'

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private constant: ConstantConfig,
  ) {}

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
          message: error.message,
        })
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '02',
        success: false,
        message: error.message,
      })
    }
  }

  // NEW: Google OAuth - initiate login
  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Req() req, @Res() res: Response) {
    try {
      console.log('Google auth initiated from IP:', req.ip)
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: '02',
        success: false,
        message: error.message,
      })
    }
  }

  // NEW: Google OAuth - callback handler
  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    try {
      const data = await this.authService.googleLogin(req.user)

      return res.redirect(
        `${this.constant.webFrontUrl}/api/v1/user?token=${data.token}`
      )
    } catch (error: any) {
      return res.redirect(
        `${this.constant.webFrontUrl}/api/v1/user?error=auth_failed`
      )
    }
  }
}
