import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module';
import { CuriculumTemplateModule } from './modules/curiculum-template/curiculum-template.module';
import { CuriculumSkillModule } from './modules/curiculum-skill/curiculum-skill.module';
import { CuriculumExperienceModule } from './modules/curiculum-experience/curiculum-experience.module';
import { CuriculumEducationModule } from './modules/curiculum-education/curiculum-education.module';
import { PrismaModule } from './prisma/prisma.module';
import { CuriculumVitaeModule } from './modules/curiculum-vitae/curiculum-vitae.module';
import { UserController } from './modules/user.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, CuriculumVitaeModule, PrismaModule, CuriculumEducationModule, CuriculumExperienceModule, CuriculumSkillModule, CuriculumTemplateModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
