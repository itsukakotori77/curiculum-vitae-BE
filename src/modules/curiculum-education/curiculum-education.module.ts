import { Module } from '@nestjs/common';
import { CuriculumEducationService } from './curiculum-education.service';
import { CuriculumEducationController } from './curiculum-education.controller';

@Module({
  providers: [CuriculumEducationService],
  controllers: [CuriculumEducationController]
})
export class CuriculumEducationModule {}
