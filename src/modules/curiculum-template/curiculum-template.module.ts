import { Module } from '@nestjs/common';
import { CuriculumTemplateService } from './curiculum-template.service';
import { CuriculumTemplateController } from './curiculum-template.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';
import { SharedModule } from 'src/shared/infrastructure/shared.module';

@Module({
  providers: [CuriculumTemplateService],
  controllers: [CuriculumTemplateController],
  imports: [PrismaModule, AuthModule, SharedModule],
  exports: [CuriculumTemplateService]
})
export class CuriculumTemplateModule {}
