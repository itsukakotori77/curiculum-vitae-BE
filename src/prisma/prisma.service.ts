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
  private logger = new Logger(PrismaService.name)

  constructor(constantConfig: ConstantConfig) {
    const config = {
      host: constantConfig.databaseHost || '127.0.0.1',  
      port: +constantConfig.databasePort || 3306,
      user: constantConfig.databaseUsername || 'appuser',
      password: constantConfig.databasePassword || 'apppassword',
      database: constantConfig.databaseName || 'myapp',
      
      // Increased timeouts for Mac/Podman
      connectTimeout: 30000,        // 30 seconds
      acquireTimeout: 30000,         // 30 seconds
      socketTimeout: 60000,          // 60 seconds
      
      // Connection pool settings
      connectionLimit: 10,
      idleTimeout: 600000,           // 10 minutes
      
      // Important for stability
      allowPublicKeyRetrieval: true,
      multipleStatements: false,
    }

    console.log('🔌 Initializing database connection with config:', {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
    })

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

    // Log Prisma events
    // @ts-ignore
    this.$on('query', (e: any) => {
      this.logger.debug(`Query: ${e.query}`)
      this.logger.debug(`Duration: ${e.duration}ms`)
    })

    // @ts-ignore
    this.$on('error', (e) => {
      this.logger.error('Prisma Error:', e)
    })

    // @ts-ignore
    this.$on('warn', (e) => {
      this.logger.warn('Prisma Warning:', e)
    })

    // @ts-ignore
    this.$on('info', (e) => {
      this.logger.log('Prisma Info:', e)
    })
  }

  async onModuleInit() {
    const maxRetries = 5
    const retryDelay = 3000 // 3 seconds

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.logger.log(`🔌 Attempting database connection (attempt ${attempt}/${maxRetries})...`)
        
        // Connect Prisma
        await this.$connect()
        this.logger.log('✅ Prisma connected successfully')

        // Test query to ensure everything works
        await this.$queryRaw`SELECT 1 as test`
        this.logger.log('✅ Database query test passed')
        
        // Success!
        return
        
      } catch (error) {
        this.logger.error(`❌ Connection attempt ${attempt} failed:`, error.message)
        
        if (attempt < maxRetries) {
          this.logger.warn(`⏳ Retrying in ${retryDelay / 1000} seconds...`)
          await new Promise(resolve => setTimeout(resolve, retryDelay))
        } else {
          this.logger.error('❌ All connection attempts failed')
          this.logger.error('💡 Troubleshooting tips:')
          this.logger.error('   1. Check if MySQL container is running: podman ps')
          this.logger.error('   2. Check if port 3306 is accessible: nc -zv localhost 3306')
          this.logger.error('   3. Try restarting Podman: podman machine restart')
          this.logger.error('   4. Check MySQL logs: podman logs service_mysql')
          this.logger.error('   5. Try using 127.0.0.1 instead of localhost')
          throw error
        }
      }
    }
  }

  async onModuleDestroy() {
    try {
      this.logger.log('🔌 Disconnecting from database...')
      await this.$disconnect()
      this.logger.log('✅ Database disconnected successfully')
    } catch (error) {
      this.logger.error('❌ Error during disconnect:', error)
    }
  }

  // Health check method
  async healthCheck(): Promise<boolean> {
    try {
      await this.$queryRaw`SELECT 1`
      return true
    } catch (error) {
      this.logger.error('Health check failed:', error)
      return false
    }
  }
}