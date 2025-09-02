import { 
  CanActivate, 
  ExecutionContext, 
  Injectable, 
  UnauthorizedException 
} from '@nestjs/common'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const authHeader = request.headers.authorization
    
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing')
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authorization header format')
    }

    const token = authHeader.split(' ')[1]
    
    if (!token) {
      throw new UnauthorizedException('Token is missing')
    }

    try {
      const user = await this.authService.validateToken(token)
      
      if (!user) {
        throw new UnauthorizedException('Invalid token')
      }
      
      request.user = user
      return true
      
    } catch (error) {
      console.log('JWT Guard Error:', error.message) 
      
      if (error instanceof UnauthorizedException) {
        throw error
      }
      
      throw new UnauthorizedException('Token validation failed: ' + error.message)
    }
  }
}