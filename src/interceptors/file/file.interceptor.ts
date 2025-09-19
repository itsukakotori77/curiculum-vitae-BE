import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { FileInterceptor as MulterFileInterceptor } from '@nestjs/platform-express'

@Injectable()
export class FileInterceptor implements NestInterceptor {
  private readonly fileInterceptor: NestInterceptor

  constructor() {
    this.fileInterceptor = new (MulterFileInterceptor('file', {
      limits: { fileSize: 5 * 1024 * 1024 },
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new BadRequestException('Only image files allowed'), false)
        }
        cb(null, true)
      },
    }))()
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return this.fileInterceptor.intercept(context, next) as any
  }
}