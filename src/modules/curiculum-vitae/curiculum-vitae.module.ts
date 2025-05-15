import { Module } from '@nestjs/common';
import { CuriculumVitaeService } from './curiculum-vitae.service';
import { CuriculumVitaeController } from './curiculum-vitae.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CuriculumVitaeService],
  controllers: [CuriculumVitaeController],
  imports: [PrismaModule]
})
export class CuriculumVitaeModule {}
