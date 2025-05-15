import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ConstantConfig } from 'src/libs/constant-config'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConstantConfig],
  exports: [ConstantConfig],
})
export class AppConfigModule {}
