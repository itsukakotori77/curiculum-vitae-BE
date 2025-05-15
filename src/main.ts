import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { baseUrl, port } from './libs/constans'
import * as morgan from 'morgan'
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor'
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { extractValidation } from './libs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  try {
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

    const config = new DocumentBuilder()
      .setTitle('API Presence')
      .setDescription('API description here')
      .setVersion('1.0')
      // .addBearerAuth(
      //   {
      //     type: 'http',
      //     scheme: 'bearer',
      //     bearerFormat: 'JWT',
      //     description: 'Please enter JWT token here',
      //   },
      //   'JWT-auth',
      // )
      .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(port ?? 5000)
    Logger.log(`🚀 Service running at ${baseUrl}${port}`, 'Bootstrap')
  } catch (error: any) {
    Logger.error(
      `❌ Fatal error during startup: ${error.message}`,
      '',
      'Bootstrap',
    )
    process.exit(1)
  }
}
bootstrap().then(() => console.log(`Server running on port ${port}`))
