import { Module } from '@nestjs/common';
import { CuriculumSkillService } from './curiculum-skill.service';
import { CuriculumSkillController } from './curiculum-skill.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CuriculumSkillService],
  controllers: [CuriculumSkillController],
  imports: [PrismaModule],
})
export class CuriculumSkillModule {}
