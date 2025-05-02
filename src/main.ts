import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { port } from './libs/constans'
import * as morgan from 'morgan'
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor'
import { BadRequestException, ValidationPipe } from '@nestjs/common'
import { extractValidation } from './libs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  app.use(morgan('tiny'))
  app.useGlobalInterceptors(new LoggingInterceptor())
  // app.useGlobalFilters(new AllExceptionsFilter())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      exceptionFactory: (errors: any) => {
        const errorMessages = extractValidation(errors)
        console.log('validation', errorMessages)
        return new BadRequestException(errorMessages)
      },
    }),
  )

  await app.listen(port ?? 5000)
}
bootstrap().then(() => console.log(`Server running on port ${port}`))
