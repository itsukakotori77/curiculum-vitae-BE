import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { ConstantConfig } from 'src/shared/infrastructure/config/constant-config'

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private constant: ConstantConfig) {
    super({
      clientID: constant.googleClientId,
      clientSecret: constant.googleClientSecret,
      callbackURL: constant.googleCallbackUrl,
      scope: ['email', 'profile'],
    })
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    }
    done(null, user)
  }
}
