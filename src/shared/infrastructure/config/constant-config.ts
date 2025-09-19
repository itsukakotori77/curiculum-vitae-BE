import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ConstantConfig {
  // Environment variables
  public readonly port: number
  public readonly baseUrl: string
  public readonly jwtSecret: string
  public readonly apiImage: string 
  public readonly cloudKey: string
  public readonly cloutSecret: string
  public readonly imageKitKey: string
  public readonly imageKitSecret: string 
  public readonly imageKitUrl: string 

  constructor(private configService: ConfigService) {
    this.port = this.configService.get<number>('NEST_PORT', 5000)
    this.baseUrl = this.configService.get<string>(
      'NEST_URL',
      'http://localhost',
    )
    this.jwtSecret = this.configService.get<string>('NEST_JWT_SECRET')!
    this.apiImage = this.configService.get<string>('CLOUDINARY_URL')!
    
    this.cloudKey = this.configService.get<string>('CLOUDINARY_API_KEY')!
    this.cloutSecret = this.configService.get<string>('CLOUDINARY_API_SECRET')!

    this.imageKitUrl = this.configService.get<string>('IMAGEKIT_URL')!
    this.imageKitKey = this.configService.get<string>('IMAGEKIT_KEY')!
    this.imageKitSecret = this.configService.get<string>('IMAGEKIT_SECRET')!
  }
}
