import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from 'src/generated/prisma/client/client'
import { ConstantConfig } from 'src/shared/infrastructure/config/constant-config'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(constantConfig: ConstantConfig) {
    const adapter = new PrismaMariaDb({
      host: constantConfig.databaseHost,
      port: +constantConfig.databasePort,
      user: constantConfig.databaseUsername,
      password: constantConfig.databasePassword,
      database: constantConfig.databaseName,
    })

    super({ adapter })
  }
  async onModuleInit() {
    await this.$connect()
  }
  async onModuleDestroy() {
    await this.$disconnect()
  }
}
