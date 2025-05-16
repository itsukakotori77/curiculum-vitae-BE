import { Module } from '@nestjs/common';
import { CuriculumExperienceService } from './curiculum-experience.service';
import { CuriculumExperienceController } from './curiculum-experience.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  providers: [CuriculumExperienceService],
  controllers: [CuriculumExperienceController],
  imports: [PrismaModule, AuthModule]
})
export class CuriculumExperienceModule {}
