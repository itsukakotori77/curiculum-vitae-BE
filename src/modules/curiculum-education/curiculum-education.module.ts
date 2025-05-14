import { Module } from '@nestjs/common';
import { CuriculumEducationService } from './curiculum-education.service';
import { CuriculumEducationController } from './curiculum-education.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CuriculumEducationService],
  controllers: [CuriculumEducationController],
  imports: [PrismaModule]
})
export class CuriculumEducationModule {}
