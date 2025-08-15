import { Module } from '@nestjs/common';
import { CuriculumSettingService } from './curiculum-setting.service';
import { CuriculumSettingController } from './curiculum-setting.controller';

@Module({
  providers: [CuriculumSettingService],
  controllers: [CuriculumSettingController]
})
export class CuriculumSettingModule {}
