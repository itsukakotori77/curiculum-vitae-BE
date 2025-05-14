import { Module } from '@nestjs/common';
import { CuriculumTemplateService } from './curiculum-template.service';
import { CuriculumTemplateController } from './curiculum-template.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CuriculumTemplateService],
  controllers: [CuriculumTemplateController],
  imports: [PrismaModule]
})
export class CuriculumTemplateModule {}
