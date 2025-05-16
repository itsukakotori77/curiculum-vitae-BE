import { Module } from '@nestjs/common';
import { CuriculumEducationService } from './curiculum-education.service';
import { CuriculumEducationController } from './curiculum-education.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  providers: [CuriculumEducationService],
  controllers: [CuriculumEducationController],
  imports: [PrismaModule, AuthModule],
})
export class CuriculumEducationModule {}
