import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { CuriculumTemplateModule } from './modules/curiculum-template/curiculum-template.module'
import { CuriculumSkillModule } from './modules/curiculum-skill/curiculum-skill.module'
import { CuriculumExperienceModule } from './modules/curiculum-experience/curiculum-experience.module'
import { CuriculumEducationModule } from './modules/curiculum-education/curiculum-education.module'
import { PrismaModule } from './prisma/prisma.module'
import { CuriculumVitaeModule } from './modules/curiculum-vitae/curiculum-vitae.module'
import { RouterModule } from '@nestjs/core'
import { AuthModule } from './core/auth/auth.module'
import { AppConfigModule } from './shared/infrastructure/config/app-config.module'
import { CuriculumSettingModule } from './modules/curiculum-setting/curiculum-setting.module'
import { SharedModule } from './shared/infrastructure/shared.module'
import { FileManagerModule } from './modules/file-manager/file-manager.module'
import { ConfigModule } from '@nestjs/config'
import { FileCurrModule } from './modules/file-curr/file-curr.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: '/v1/auth',
        module: AuthModule,
      },
      {
        path: '/v1/user',
        module: UserModule,
      },
      {
        path: 'v1/curiculum-vitae',
        module: CuriculumVitaeModule,
      },
      {
        path: 'v1/curiculum-education',
        module: CuriculumEducationModule,
      },
      {
        path: 'v1/curiculum-experience',
        module: CuriculumExperienceModule,
      },
      {
        path: 'v1/curiculum-skill',
        module: CuriculumSkillModule,
      },
      {
        path: 'v1/curiculum-template',
        module: CuriculumTemplateModule,
      },
      {
        path: 'v1/curiculum-setting',
        module: CuriculumSettingModule,
      },
      {
        path: 'v1/file-manager',
        module: FileManagerModule,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    UserModule,
    CuriculumVitaeModule,
    PrismaModule,
    CuriculumEducationModule,
    CuriculumExperienceModule,
    CuriculumSkillModule,
    CuriculumTemplateModule,
    AuthModule,
    AppConfigModule,
    CuriculumSettingModule,
    SharedModule,
    FileManagerModule,
    FileCurrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
