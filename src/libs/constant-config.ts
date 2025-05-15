import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ConstantConfig {
  // Environment variables
  public readonly port: number
  public readonly baseUrl: string
  public readonly jwtSecret: string

  constructor(private configService: ConfigService) {
    this.port = this.configService.get<number>('NEST_PORT', 5000)
    this.baseUrl = this.configService.get<string>(
      'NEST_URL',
      'http://localhost',
    )
    this.jwtSecret = this.configService.get<string>('NEST_JWT_SECRET')!
  }
}
