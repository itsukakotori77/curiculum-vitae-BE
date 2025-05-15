import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as morgan from 'morgan'
import { LoggingInterceptor } from './interceptors/logging/logging.interceptor'
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common'
import { extractValidation } from './libs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConstantConfig } from './core/config/constant-config'

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)
    const constants = app.get(ConstantConfig)

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
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Please enter JWT token here',
        },
        'JWT-auth',
      )
      .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: {
        responseInterceptor: (res: any) => {
          if (res.url.includes('/auth/login') && res.status === 200) {
            const token = res.body?.access_token || res.body?.data?.token
            if (token) {
              localStorage.setItem('jwtToken', `Bearer ${token}`)
              setTimeout(() => {
                const swaggerUI = (window as any).ui
                if (swaggerUI) {
                  swaggerUI.preauthorizeApiKey('JWT-auth', `Bearer ${token}`)
                }
              }, 500)
            }
          }
          return res
        },
        onComplete: () => {
          const token = localStorage.getItem('jwtToken')
          if (token) {
            setTimeout(() => {
              const swaggerUI = (window as any).ui
              if (swaggerUI) {
                swaggerUI.preauthorizeApiKey('JWT-auth', token)
              }
            }, 500)
          }
        },
        requestInterceptor: (req: any) => {
          const token = localStorage.getItem('jwtToken')
          if (token && req.url.includes('/api/')) {
            req.headers['Authorization'] = token
          }
          return req
        },
      },
    })

    await app.listen(constants.port ?? 5000)
    Logger.log(`🚀 Service running at ${constants.baseUrl} ${constants.port}`, 'Bootstrap')

    return constants
  } catch (error: any) {
    Logger.error(
      `❌ Fatal error during startup: ${error.message}`,
      '',
      'Bootstrap',
    )
    process.exit(1)
  }
}
bootstrap().then((constants) => console.log(`Server running on port ${constants.port}`))
