import { Module } from '@nestjs/common';
import { CuriculumSettingService } from './curiculum-setting.service';
import { CuriculumSettingController } from './curiculum-setting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  providers: [CuriculumSettingService],
  controllers: [CuriculumSettingController],
  imports: [PrismaModule, AuthModule],
  exports: [CuriculumSettingService]
})
export class CuriculumSettingModule {}
