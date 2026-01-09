import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from 'src/generated/prisma/client/client'
import { ConstantConfig } from 'src/shared/infrastructure/config/constant-config'
import { Logger } from '@nestjs/common'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(constantConfig: ConstantConfig) {
    const config = {
      host: constantConfig.databaseHost,
      port: +constantConfig.databasePort,
      user: constantConfig.databaseUsername,
      password: constantConfig.databasePassword,
      database: constantConfig.databaseName,
      connectTimeout: 10000,
      acquireTimeout: 10000,
    }

    const adapter = new PrismaMariaDb(config)

    super({
      adapter,
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
      ],
      errorFormat: 'pretty',
    })
  }
  async onModuleInit() {
    try {
      console.log('🔌 Attempting database connection...')
      await this.$connect()
      console.log('✅ Database connected successfully')

      // Test query
      // await this.$queryRaw`SELECT 1`
      console.log('✅ Database query test passed')
    } catch (error) {
      Logger.error('❌ Database connection failed:', error)
      throw error
    }
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
