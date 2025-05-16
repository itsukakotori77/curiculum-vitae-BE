import { Module } from '@nestjs/common';
import { CuriculumSkillService } from './curiculum-skill.service';
import { CuriculumSkillController } from './curiculum-skill.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  providers: [CuriculumSkillService],
  controllers: [CuriculumSkillController],
  imports: [PrismaModule, AuthModule],
})
export class CuriculumSkillModule {}
