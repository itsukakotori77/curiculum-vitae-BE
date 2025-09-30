import { Module } from '@nestjs/common'
import { CuriculumVitaeService } from './curiculum-vitae.service'
import { CuriculumVitaeController } from './curiculum-vitae.controller'
import { PrismaModule } from 'src/prisma/prisma.module'
import { AuthModule } from 'src/core/auth/auth.module'
import { CuriculumEducationModule } from '../curiculum-education/curiculum-education.module'
import { CuriculumExperienceModule } from '../curiculum-experience/curiculum-experience.module'
import { CuriculumSkillModule } from '../curiculum-skill/curiculum-skill.module'
import { CuriculumTemplateModule } from '../curiculum-template/curiculum-template.module'
import { SharedModule } from 'src/shared/infrastructure/shared.module'
import { FileCurrModule } from '../file-curr/file-curr.module'

@Module({
  providers: [CuriculumVitaeService],
  controllers: [CuriculumVitaeController],
  imports: [
    PrismaModule,
    AuthModule,
    CuriculumEducationModule,
    CuriculumExperienceModule,
    CuriculumSkillModule,
    CuriculumTemplateModule,
    SharedModule,
    FileCurrModule
  ],
})
export class CuriculumVitaeModule {}